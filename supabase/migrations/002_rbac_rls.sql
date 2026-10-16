-- Create user profiles table to hold roles and products
CREATE TABLE IF NOT EXISTS public.user_profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  role TEXT NOT NULL DEFAULT 'client' CHECK (role IN ('client', 'trustline_staff')),
  products TEXT[] NOT NULL DEFAULT '{}',
  company_id UUID,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Enable RLS on user_profiles
ALTER TABLE public.user_profiles ENABLE ROW LEVEL SECURITY;

-- Users can read their own profile
CREATE POLICY "Users can view own profile" 
ON public.user_profiles FOR SELECT 
USING (auth.uid() = id);

-- Trustline staff can view all profiles
CREATE POLICY "Staff can view all profiles" 
ON public.user_profiles FOR SELECT 
USING (
  EXISTS (
    SELECT 1 FROM public.user_profiles
    WHERE id = auth.uid() AND role = 'trustline_staff'
  )
);

-- Helper function to get current user's profile
CREATE OR REPLACE FUNCTION get_my_profile()
RETURNS SETOF public.user_profiles
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
STABLE
AS $$
  SELECT * FROM public.user_profiles WHERE id = auth.uid();
$$;

-----------------------------------------------------------
-- TEST TABLES FOR COMPLIANCE AND HR RLS ENFORCEMENT
-----------------------------------------------------------

-- 1. HR Employees Table
CREATE TABLE IF NOT EXISTS public.hr_employees (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company_id UUID NOT NULL,
  name TEXT NOT NULL,
  salary NUMERIC NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE public.hr_employees ENABLE ROW LEVEL SECURITY;

-- HR Data Policy: 
-- 1. User must have 'hr' in their products array
-- 2. User's company_id must match the employee's company_id
CREATE POLICY "HR users can only see their own company's employees" 
ON public.hr_employees FOR SELECT 
USING (
  EXISTS (
    SELECT 1 FROM public.user_profiles 
    WHERE id = auth.uid() 
      AND 'hr' = ANY(products) 
      AND company_id = hr_employees.company_id
  )
);

-- 2. Compliance Records Table
CREATE TABLE IF NOT EXISTS public.compliance_records (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  client_id UUID NOT NULL REFERENCES auth.users(id),
  document_name TEXT NOT NULL,
  status TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE public.compliance_records ENABLE ROW LEVEL SECURITY;

-- Compliance Data Policy:
-- 1. Client can see their own records IF they have the 'compliance' product
-- 2. Trustline Staff can see ALL compliance records
CREATE POLICY "Compliance users see own records, Staff see all" 
ON public.compliance_records FOR SELECT 
USING (
  EXISTS (
    SELECT 1 FROM public.user_profiles 
    WHERE id = auth.uid() 
      AND (
        (role = 'trustline_staff') 
        OR 
        (role = 'client' AND 'compliance' = ANY(products) AND client_id = auth.uid())
      )
  )
);

-----------------------------------------------------------
-- TRIGGER TO AUTOMATICALLY CREATE PROFILE ON SIGNUP
-----------------------------------------------------------
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.user_profiles (id, role, products)
  VALUES (
    NEW.id,
    'client',
    -- Default to what they selected on signup, or empty array
    ARRAY[COALESCE(NEW.raw_user_meta_data->>'service', 'compliance')]
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Check if trigger exists before creating
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();
