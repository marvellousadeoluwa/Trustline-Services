-- Multi-tenant HR Center Schema
-- Adds companies with customized subdomains and full staff profiles

-- 1. Companies Table
CREATE TABLE IF NOT EXISTS public.companies (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  subdomain TEXT UNIQUE NOT NULL,
  industry TEXT,
  company_size TEXT,
  created_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Enable RLS on companies
ALTER TABLE public.companies ENABLE ROW LEVEL SECURITY;

-- Anyone authenticated can view company by subdomain or membership
CREATE POLICY "Users can view their own company"
ON public.companies FOR SELECT
USING (
  id IN (
    SELECT company_id FROM public.user_profiles WHERE id = auth.uid()
  )
  OR
  EXISTS (
    SELECT 1 FROM public.user_profiles WHERE id = auth.uid() AND role = 'trustline_staff'
  )
);

CREATE POLICY "Authenticated users can create a company"
ON public.companies FOR INSERT
WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Company creators and staff can update their company"
ON public.companies FOR UPDATE
USING (
  created_by = auth.uid()
  OR
  EXISTS (
    SELECT 1 FROM public.user_profiles WHERE id = auth.uid() AND role = 'trustline_staff'
  )
);

-- 2. Staff Profiles Table
CREATE TABLE IF NOT EXISTS public.staff_profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company_id UUID NOT NULL REFERENCES public.companies(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  role TEXT NOT NULL DEFAULT 'Staff',
  department TEXT NOT NULL DEFAULT 'General',
  employment_type TEXT NOT NULL DEFAULT 'Full-time',
  salary NUMERIC NOT NULL DEFAULT 0,
  status TEXT NOT NULL DEFAULT 'Active' CHECK (status IN ('Active', 'Onboarding', 'Suspended', 'Terminated')),
  tax_state TEXT DEFAULT 'Lagos (LIRS)',
  pension_pin TEXT,
  nhf_number TEXT,
  start_date DATE DEFAULT CURRENT_DATE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Enable RLS on staff_profiles
ALTER TABLE public.staff_profiles ENABLE ROW LEVEL SECURITY;

-- HR Admins can view and manage their company staff
CREATE POLICY "Company HR can view their own company staff"
ON public.staff_profiles FOR SELECT
USING (
  EXISTS (
    SELECT 1 FROM public.user_profiles
    WHERE id = auth.uid()
      AND 'hr' = ANY(products)
      AND company_id = staff_profiles.company_id
  )
  OR
  EXISTS (
    SELECT 1 FROM public.user_profiles WHERE id = auth.uid() AND role = 'trustline_staff'
  )
);

CREATE POLICY "Company HR can insert staff"
ON public.staff_profiles FOR INSERT
WITH CHECK (
  EXISTS (
    SELECT 1 FROM public.user_profiles
    WHERE id = auth.uid()
      AND 'hr' = ANY(products)
      AND company_id = staff_profiles.company_id
  )
  OR
  EXISTS (
    SELECT 1 FROM public.user_profiles WHERE id = auth.uid() AND role = 'trustline_staff'
  )
);

CREATE POLICY "Company HR can update staff"
ON public.staff_profiles FOR UPDATE
USING (
  EXISTS (
    SELECT 1 FROM public.user_profiles
    WHERE id = auth.uid()
      AND 'hr' = ANY(products)
      AND company_id = staff_profiles.company_id
  )
  OR
  EXISTS (
    SELECT 1 FROM public.user_profiles WHERE id = auth.uid() AND role = 'trustline_staff'
  )
);

CREATE POLICY "Company HR can delete staff"
ON public.staff_profiles FOR DELETE
USING (
  EXISTS (
    SELECT 1 FROM public.user_profiles
    WHERE id = auth.uid()
      AND 'hr' = ANY(products)
      AND company_id = staff_profiles.company_id
  )
  OR
  EXISTS (
    SELECT 1 FROM public.user_profiles WHERE id = auth.uid() AND role = 'trustline_staff'
  )
);
