// Trustline HR Center Client & State Management
// Supports Multi-tenant customized subdomains, HR Admin auto-provisioning, and staff profiles.

export interface CompanyTenant {
  id: string;
  name: string;
  subdomain: string;
  industry: string;
  companySize: string;
  adminEmail: string;
  adminName: string;
  createdAt: string;
}

export interface StaffProfile {
  id: string;
  companyId: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  department: string;
  employmentType: 'Full-time' | 'Part-time' | 'Contract' | 'Remote';
  salary: number; // Gross Monthly in NGN (₦)
  status: 'Active' | 'Onboarding' | 'Suspended' | 'Terminated';
  taxState: string;
  pensionPin?: string;
  nhfNumber?: string;
  startDate: string;
  createdAt: string;
}

export interface HrAuthSession {
  user: {
    id: string;
    email: string;
    name: string;
    role: 'admin' | 'staff';
  };
  company: CompanyTenant;
  token?: string;
}

const RESERVED_SUBDOMAINS = new Set([
  'admin',
  'api',
  'app',
  'auth',
  'dashboard',
  'hrcenter',
  'mail',
  'root',
  'status',
  'support',
  'test',
  'www',
]);

export function sanitizeSubdomain(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9-]/g, '-')
    .replace(/--+/g, '-')
    .replace(/^-|-$/g, '');
}

export function validateSubdomain(subdomain: string): { valid: boolean; error?: string } {
  const clean = sanitizeSubdomain(subdomain);
  if (!clean) return { valid: false, error: 'Subdomain is required.' };
  if (clean.length < 3) return { valid: false, error: 'Subdomain must be at least 3 characters.' };
  if (clean.length > 30) return { valid: false, error: 'Subdomain cannot exceed 30 characters.' };
  if (RESERVED_SUBDOMAINS.has(clean)) {
    return { valid: false, error: `"${clean}" is a reserved system subdomain.` };
  }
  return { valid: true };
}

/**
 * Calculates statutory deductions under Nigerian tax laws:
 * - Employee Pension: 8% of gross/emoluments (PRA 2014)
 * - Employer Pension: 10% of gross/emoluments (PRA 2014)
 * - NHF: 2.5% of basic salary (~1.25% of gross)
 * - PAYE: PITA graduated tax bands with Consolidated Relief Allowance (CRA)
 */
export function calculateNigerianPayroll(grossMonthlySalary: number) {
  const gross = Math.max(0, grossMonthlySalary);
  const employeePension = Math.round(gross * 0.08);
  const employerPension = Math.round(gross * 0.10);
  const nhf = Math.round(gross * 0.015); // ~1.5% statutory estimate

  // Annualized computation for statutory Consolidated Relief Allowance (CRA)
  const annualGross = gross * 12;
  const craBase = Math.max(200000, annualGross * 0.01);
  const cra = craBase + annualGross * 0.20;
  const taxableAnnualIncome = Math.max(0, annualGross - cra - (employeePension * 12) - (nhf * 12));
  
  // Graduated PITA Bands:
  // First 300k @ 7%, Next 300k @ 11%, Next 500k @ 15%, Next 500k @ 19%, Next 1.6M @ 21%, Above 3.2M @ 24%
  let remaining = taxableAnnualIncome;
  let annualTax = 0;

  const bands = [
    { limit: 300000, rate: 0.07 },
    { limit: 300000, rate: 0.11 },
    { limit: 500000, rate: 0.15 },
    { limit: 500000, rate: 0.19 },
    { limit: 1600000, rate: 0.21 },
    { limit: Infinity, rate: 0.24 },
  ];

  for (const band of bands) {
    if (remaining <= 0) break;
    const taxableInBand = Math.min(remaining, band.limit);
    annualTax += taxableInBand * band.rate;
    remaining -= taxableInBand;
  }

  // Minimum tax rule (1% of gross income if computed tax is lower)
  const minAnnualTax = annualGross * 0.01;
  annualTax = Math.max(annualTax, minAnnualTax);
  const monthlyPaye = Math.round(annualTax / 12);

  const totalDeductions = employeePension + nhf + monthlyPaye;
  const netPay = Math.max(0, gross - totalDeductions);

  return {
    grossMonthly: gross,
    employeePension,
    employerPension,
    nhf,
    monthlyPaye,
    totalDeductions,
    netPay,
  };
}

// Default Seed Demo Company
const SEED_COMPANY: CompanyTenant = {
  id: 'c0a80101-0000-0000-0000-000000000001',
  name: 'Apex Growth Logistics Ltd',
  subdomain: 'apex',
  industry: 'Logistics & Supply Chain',
  companySize: '10 - 50 staff',
  adminEmail: 'hr@apexlogistics.ng',
  adminName: 'Adeola Adeleke',
  createdAt: '2026-01-15T09:00:00Z',
};

const SEED_STAFF: StaffProfile[] = [
  {
    id: 's01',
    companyId: 'c0a80101-0000-0000-0000-000000000001',
    name: 'Adeola Adeleke',
    email: 'hr@apexlogistics.ng',
    phone: '+234 803 234 5678',
    role: 'HR & People Operations Lead',
    department: 'People Operations',
    employmentType: 'Full-time',
    salary: 650000,
    status: 'Active',
    taxState: 'Lagos (LIRS)',
    pensionPin: 'PEN1009823451',
    nhfNumber: 'NHF-7890123',
    startDate: '2024-03-01',
    createdAt: '2024-03-01T10:00:00Z',
  },
  {
    id: 's02',
    companyId: 'c0a80101-0000-0000-0000-000000000001',
    name: 'Chukwuma Obi',
    email: 'c.obi@apexlogistics.ng',
    phone: '+234 812 345 6789',
    role: 'Head of Fleet Operations',
    department: 'Operations',
    employmentType: 'Full-time',
    salary: 550000,
    status: 'Active',
    taxState: 'Lagos (LIRS)',
    pensionPin: 'PEN1008765432',
    nhfNumber: 'NHF-7890124',
    startDate: '2024-05-15',
    createdAt: '2024-05-15T10:00:00Z',
  },
  {
    id: 's03',
    companyId: 'c0a80101-0000-0000-0000-000000000001',
    name: 'Fatima Aliyu',
    email: 'f.aliyu@apexlogistics.ng',
    phone: '+234 809 876 5432',
    role: 'Senior Finance & Tax Officer',
    department: 'Finance',
    employmentType: 'Full-time',
    salary: 480000,
    status: 'Active',
    taxState: 'Ogun (OGIRS)',
    pensionPin: 'PEN1007654321',
    nhfNumber: 'NHF-7890125',
    startDate: '2024-08-01',
    createdAt: '2024-08-01T10:00:00Z',
  },
  {
    id: 's04',
    companyId: 'c0a80101-0000-0000-0000-000000000001',
    name: 'Tunde Bakare',
    email: 't.bakare@apexlogistics.ng',
    phone: '+234 815 678 9012',
    role: 'Systems & Logistics Dispatcher',
    department: 'Operations',
    employmentType: 'Full-time',
    salary: 280000,
    status: 'Onboarding',
    taxState: 'Lagos (LIRS)',
    startDate: '2026-09-01',
    createdAt: '2026-09-01T10:00:00Z',
  },
];

const STORAGE_KEYS = {
  COMPANIES: 'trustline_hr_companies',
  STAFF: 'trustline_hr_staff',
  SESSION: 'trustline_hr_session',
};

// Client-side state persistence
export const HrStore = {
  getCompanies(): CompanyTenant[] {
    if (typeof window === 'undefined') return [SEED_COMPANY];
    try {
      const data = localStorage.getItem(STORAGE_KEYS.COMPANIES);
      if (!data) {
        localStorage.setItem(STORAGE_KEYS.COMPANIES, JSON.stringify([SEED_COMPANY]));
        return [SEED_COMPANY];
      }
      return JSON.parse(data);
    } catch {
      return [SEED_COMPANY];
    }
  },

  findCompanyBySubdomain(subdomain: string): CompanyTenant | undefined {
    const clean = sanitizeSubdomain(subdomain);
    return this.getCompanies().find((c) => c.subdomain === clean);
  },

  findCompanyById(id: string): CompanyTenant | undefined {
    return this.getCompanies().find((c) => c.id === id);
  },

  registerCompany(data: {
    name: string;
    subdomain: string;
    industry: string;
    companySize: string;
    adminName: string;
    adminEmail: string;
  }): { success: boolean; company?: CompanyTenant; error?: string } {
    const cleanSubdomain = sanitizeSubdomain(data.subdomain);
    const validation = validateSubdomain(cleanSubdomain);
    if (!validation.valid) return { success: false, error: validation.error };

    const companies = this.getCompanies();
    if (companies.some((c) => c.subdomain === cleanSubdomain)) {
      return { success: false, error: `Subdomain "${cleanSubdomain}" is already claimed.` };
    }

    const newCompany: CompanyTenant = {
      id: `comp_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      name: data.name.trim(),
      subdomain: cleanSubdomain,
      industry: data.industry || 'General Business',
      companySize: data.companySize || '10 - 50 staff',
      adminEmail: data.adminEmail.toLowerCase().trim(),
      adminName: data.adminName.trim(),
      createdAt: new Date().toISOString(),
    };

    companies.push(newCompany);
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEYS.COMPANIES, JSON.stringify(companies));
    }

    // Auto-create initial Admin staff profile
    const initialAdminStaff: StaffProfile = {
      id: `staff_${Date.now()}`,
      companyId: newCompany.id,
      name: newCompany.adminName,
      email: newCompany.adminEmail,
      phone: '',
      role: 'HR Admin / Primary Lead',
      department: 'Executive / HR',
      employmentType: 'Full-time',
      salary: 0,
      status: 'Active',
      taxState: 'Lagos (LIRS)',
      startDate: new Date().toISOString().split('T')[0],
      createdAt: new Date().toISOString(),
    };

    this.saveStaffProfile(initialAdminStaff);

    // Auto-sign in the new company admin
    const session: HrAuthSession = {
      user: {
        id: `usr_${Date.now()}`,
        email: newCompany.adminEmail,
        name: newCompany.adminName,
        role: 'admin',
      },
      company: newCompany,
    };
    this.saveSession(session);

    return { success: true, company: newCompany };
  },

  getStaff(companyId?: string): StaffProfile[] {
    if (typeof window === 'undefined') return companyId ? SEED_STAFF.filter((s) => s.companyId === companyId) : SEED_STAFF;
    try {
      const data = localStorage.getItem(STORAGE_KEYS.STAFF);
      let staffList: StaffProfile[] = data ? JSON.parse(data) : [];
      if (!staffList.length) {
        staffList = SEED_STAFF;
        localStorage.setItem(STORAGE_KEYS.STAFF, JSON.stringify(staffList));
      }
      return companyId ? staffList.filter((s) => s.companyId === companyId) : staffList;
    } catch {
      return SEED_STAFF;
    }
  },

  saveStaffProfile(profile: StaffProfile): StaffProfile {
    const all = this.getStaff();
    const existingIndex = all.findIndex((s) => s.id === profile.id);
    if (existingIndex >= 0) {
      all[existingIndex] = profile;
    } else {
      all.unshift(profile);
    }
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEYS.STAFF, JSON.stringify(all));
    }
    return profile;
  },

  deleteStaff(id: string): boolean {
    const all = this.getStaff();
    const filtered = all.filter((s) => s.id !== id);
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEYS.STAFF, JSON.stringify(filtered));
    }
    return true;
  },

  getSession(): HrAuthSession | null {
    if (typeof window === 'undefined') return null;
    try {
      const data = localStorage.getItem(STORAGE_KEYS.SESSION);
      if (data) return JSON.parse(data);
      // Default to demo session for ease of preview
      const defaultSession: HrAuthSession = {
        user: {
          id: 'u01',
          email: SEED_COMPANY.adminEmail,
          name: SEED_COMPANY.adminName,
          role: 'admin',
        },
        company: SEED_COMPANY,
      };
      localStorage.setItem(STORAGE_KEYS.SESSION, JSON.stringify(defaultSession));
      return defaultSession;
    } catch {
      return null;
    }
  },

  saveSession(session: HrAuthSession) {
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEYS.SESSION, JSON.stringify(session));
      // Also write cookie so server middleware can detect active company subdomain
      document.cookie = `trustline_hr_subdomain=${session.company.subdomain}; path=/; max-age=604800; SameSite=Lax`;
    }
  },

  clearSession() {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(STORAGE_KEYS.SESSION);
      document.cookie = 'trustline_hr_subdomain=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    }
  },
};
