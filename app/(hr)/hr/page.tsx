'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  Users,
  UserPlus,
  Building2,
  Globe,
  Search,
  Filter,
  ShieldCheck,
  Briefcase,
  DollarSign,
  Calendar,
  CheckCircle2,
  Trash2,
  Eye,
  LogOut,
  Download,
  AlertCircle,
  X,
  CreditCard,
  FileText,
  BadgeCheck,
} from 'lucide-react';
import GlassOverlay from '@/components/ui/GlassOverlay';
import {
  HrStore,
  CompanyTenant,
  StaffProfile,
  HrAuthSession,
  calculateNigerianPayroll,
} from '@/lib/hr-center';

function HrCenterDashboardContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const companyQuery = searchParams.get('company');

  const [session, setSession] = useState<HrAuthSession | null>(null);
  const [company, setCompany] = useState<CompanyTenant | null>(null);
  const [staffList, setStaffList] = useState<StaffProfile[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All');

  // Modals
  const [isAddStaffOpen, setIsAddStaffOpen] = useState(false);
  const [selectedStaff, setSelectedStaff] = useState<StaffProfile | null>(null);

  // New Staff Form State
  const [staffName, setStaffName] = useState('');
  const [staffEmail, setStaffEmail] = useState('');
  const [staffPhone, setStaffPhone] = useState('');
  const [staffRole, setStaffRole] = useState('');
  const [staffDepartment, setStaffDepartment] = useState('People Operations');
  const [staffEmploymentType, setStaffEmploymentType] = useState<'Full-time' | 'Part-time' | 'Contract' | 'Remote'>('Full-time');
  const [staffSalary, setStaffSalary] = useState<number>(350000);
  const [staffTaxState, setStaffTaxState] = useState('Lagos (LIRS)');
  const [staffPensionPin, setStaffPensionPin] = useState('');
  const [staffNhfNumber, setStaffNhfNumber] = useState('');
  const [staffStartDate, setStaffStartDate] = useState(new Date().toISOString().split('T')[0]);

  // Load Session and Company
  useEffect(() => {
    let currentSession = HrStore.getSession();

    // If query string specifies a different company subdomain, switch to it
    if (companyQuery) {
      const match = HrStore.findCompanyBySubdomain(companyQuery);
      if (match) {
        currentSession = {
          user: {
            id: `usr_${Date.now()}`,
            email: match.adminEmail,
            name: match.adminName,
            role: 'admin',
          },
          company: match,
        };
        HrStore.saveSession(currentSession);
      }
    }

    if (currentSession) {
      setSession(currentSession);
      setCompany(currentSession.company);
      const staff = HrStore.getStaff(currentSession.company.id);
      setStaffList(staff);
    } else {
      router.push('/hr/auth');
    }
  }, [companyQuery, router]);

  const refreshStaff = (comp: CompanyTenant) => {
    const list = HrStore.getStaff(comp.id);
    setStaffList([...list]);
  };

  const handleAddStaff = (e: React.FormEvent) => {
    e.preventDefault();
    if (!company) return;

    const newStaff: StaffProfile = {
      id: `staff_${Date.now()}`,
      companyId: company.id,
      name: staffName.trim(),
      email: staffEmail.toLowerCase().trim(),
      phone: staffPhone.trim(),
      role: staffRole.trim(),
      department: staffDepartment,
      employmentType: staffEmploymentType,
      salary: Number(staffSalary) || 0,
      status: 'Active',
      taxState: staffTaxState,
      pensionPin: staffPensionPin.trim() || undefined,
      nhfNumber: staffNhfNumber.trim() || undefined,
      startDate: staffStartDate,
      createdAt: new Date().toISOString(),
    };

    HrStore.saveStaffProfile(newStaff);
    refreshStaff(company);
    setIsAddStaffOpen(false);

    setStaffName('');
    setStaffEmail('');
    setStaffPhone('');
    setStaffRole('');
    setStaffSalary(350000);
    setStaffPensionPin('');
    setStaffNhfNumber('');
  };

  const handleDeleteStaff = (id: string, name: string) => {
    if (confirm(`Remove staff profile for ${name}?`)) {
      HrStore.deleteStaff(id);
      if (company) refreshStaff(company);
      if (selectedStaff?.id === id) setSelectedStaff(null);
    }
  };

  const handleLogout = () => {
    HrStore.clearSession();
    router.push('/hr/auth');
  };

  const filteredStaff = staffList.filter((s) => {
    const matchesSearch =
      s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDept = selectedDepartment === 'All' || s.department === selectedDepartment;
    return matchesSearch && matchesDept;
  });

  const totalStaffCount = staffList.length;
  const activeStaffCount = staffList.filter((s) => s.status === 'Active').length;
  const totalMonthlyPayroll = staffList.reduce((acc, s) => acc + (Number(s.salary) || 0), 0);
  const totalEstimatedPaye = staffList.reduce((acc, s) => acc + calculateNigerianPayroll(Number(s.salary) || 0).monthlyPaye, 0);

  const formDeductions = calculateNigerianPayroll(Number(staffSalary) || 0);

  const departments = ['All', 'People Operations', 'Operations', 'Finance', 'Technology', 'Sales & Marketing', 'Executive / HR'];

  if (!company || !session) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-accent-sky">
        <div className="text-center space-y-4">
          <div className="w-12 h-12 border-4 border-trust-blue border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-trust-blue font-semibold">Loading HR Center Workspace...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F4F7FB] text-trust-blue -m-8 sm:-m-8">
      {/* ================= TOP NAVIGATION / TENANT HEADER ================= */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-white/60 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            {/* Company Tenant Branding */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-trust-blue to-brand-gold flex items-center justify-center text-white font-display font-bold shadow-md">
                {company.name.charAt(0)}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-lg font-display font-bold text-trust-blue">
                    {company.name}
                  </h1>
                  <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-brand-gold/15 text-brand-gold border border-brand-gold/30">
                    HR Admin
                  </span>
                </div>
                {/* Customized Subdomain Badge */}
                <div className="flex items-center gap-1.5 text-xs text-trust-blue/70">
                  <Globe className="w-3.5 h-3.5 text-brand-gold" />
                  <span className="font-semibold text-trust-blue">
                    https://{company.subdomain}.trustlineprofessional.com
                  </span>
                  <span className="text-[10px] bg-emerald-50 text-emerald-700 px-1.5 py-0.2 rounded border border-emerald-200">
                    Active Tenant
                  </span>
                </div>
              </div>
            </div>

            {/* Admin Controls */}
            <div className="flex items-center gap-3 self-end sm:self-auto">
              <Link
                href="/"
                className="text-xs font-semibold px-3 py-1.5 rounded-lg border border-border-grey text-trust-blue hover:bg-white transition-colors"
              >
                Website
              </Link>
              <button
                onClick={() => router.push('/hr/auth')}
                className="text-xs font-semibold px-3 py-1.5 rounded-lg border border-brand-gold/40 text-brand-gold hover:bg-brand-gold/10 transition-colors"
              >
                Switch Subdomain
              </button>
              <button
                onClick={handleLogout}
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-red-50 text-red-700 hover:bg-red-100 transition-colors border border-red-200"
              >
                <LogOut className="w-3.5 h-3.5" />
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ================= MAIN DASHBOARD CONTENT ================= */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Welcome Banner */}
        <div className="relative overflow-hidden rounded-3xl border border-white/80 p-6 sm:p-8 shadow-[0_12px_36px_rgba(0,51,102,0.06)]">
          <GlassOverlay variant="light" withRefraction={true} />
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-trust-blue/10 text-xs font-semibold text-trust-blue">
                <ShieldCheck className="w-4 h-4 text-brand-gold" />
                NDPR & NDPC Workforce Compliance Active
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-trust-blue">
                Welcome, {session.user.name}
              </h2>
              <p className="text-sm text-trust-blue/80 max-w-2xl leading-relaxed">
                You are managing <strong>{company.name}</strong>'s HR and talent records on{' '}
                <code className="text-xs font-bold text-brand-gold bg-trust-blue/5 px-2 py-0.5 rounded">
                  {company.subdomain}.trustlineprofessional.com
                </code>
                . Create employee profiles, monitor PAYE compliance, and administer payroll safely.
              </p>
            </div>

            <button
              onClick={() => setIsAddStaffOpen(true)}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-trust-blue text-white font-semibold shadow-md hover:bg-trust-blue/90 hover:shadow-lg transition-all self-start md:self-center"
            >
              <UserPlus className="w-5 h-5" />
              <span>Add Staff Profile</span>
            </button>
          </div>
        </div>

        {/* ================= KEY METRICS ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Card 1: Total Staff */}
          <div className="relative overflow-hidden rounded-2xl border border-white/80 p-5 shadow-sm">
            <GlassOverlay variant="light" withRefraction={false} />
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-trust-blue/70">
                  Total Staff
                </p>
                <h3 className="text-3xl font-display font-bold text-trust-blue mt-1">
                  {totalStaffCount}
                </h3>
              </div>
              <div className="w-12 h-12 rounded-xl bg-trust-blue/10 flex items-center justify-center text-trust-blue">
                <Users className="w-6 h-6" />
              </div>
            </div>
            <p className="text-xs text-trust-blue/70 mt-3 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              {activeStaffCount} Active On Payroll
            </p>
          </div>

          {/* Card 2: Monthly Payroll */}
          <div className="relative overflow-hidden rounded-2xl border border-white/80 p-5 shadow-sm">
            <GlassOverlay variant="light" withRefraction={false} />
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-trust-blue/70">
                  Monthly Payroll (Gross)
                </p>
                <h3 className="text-2xl font-display font-bold text-trust-blue mt-1">
                  ₦{totalMonthlyPayroll.toLocaleString()}
                </h3>
              </div>
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                <DollarSign className="w-6 h-6" />
              </div>
            </div>
            <p className="text-xs text-trust-blue/70 mt-3">
              Total monthly gross emolument
            </p>
          </div>

          {/* Card 3: Est. Statutory PAYE */}
          <div className="relative overflow-hidden rounded-2xl border border-white/80 p-5 shadow-sm">
            <GlassOverlay variant="light" withRefraction={false} />
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-trust-blue/70">
                  Est. Monthly PAYE
                </p>
                <h3 className="text-2xl font-display font-bold text-trust-blue mt-1">
                  ₦{totalEstimatedPaye.toLocaleString()}
                </h3>
              </div>
              <div className="w-12 h-12 rounded-xl bg-brand-gold/15 text-brand-gold flex items-center justify-center">
                <CreditCard className="w-6 h-6" />
              </div>
            </div>
            <p className="text-xs text-trust-blue/70 mt-3">
              Tax deductions for LIRS / OGIRS
            </p>
          </div>

          {/* Card 4: Compliance Status */}
          <div className="relative overflow-hidden rounded-2xl border border-white/80 p-5 shadow-sm">
            <GlassOverlay variant="light" withRefraction={false} />
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-trust-blue/70">
                  Statutory Records
                </p>
                <h3 className="text-xl font-display font-bold text-emerald-700 mt-1 flex items-center gap-1.5">
                  <BadgeCheck className="w-6 h-6" />
                  100% Defensible
                </h3>
              </div>
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                <FileText className="w-6 h-6" />
              </div>
            </div>
            <p className="text-xs text-trust-blue/70 mt-3">
              Protected by People Shield™ standards
            </p>
          </div>
        </div>

        {/* ================= STAFF DIRECTORY & PROFILES ================= */}
        <div className="relative overflow-hidden rounded-3xl border border-white/80 p-6 sm:p-8 shadow-[0_12px_36px_rgba(0,51,102,0.06)] space-y-6">
          <GlassOverlay variant="light" withRefraction={true} />

          {/* Table Header & Search Filters */}
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-display font-bold text-trust-blue">
                Staff Roster & Profile Directory
              </h3>
              <p className="text-xs text-trust-blue/70">
                Manage employee profiles, contracts, compensation, and statutory identifiers.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {/* Search input */}
              <div className="relative">
                <Search className="absolute left-3 top-2.5 w-4 h-4 text-trust-blue/40" />
                <input
                  type="text"
                  placeholder="Search staff..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9 pr-4 py-2 rounded-xl border border-white/90 bg-white/80 text-xs text-trust-blue placeholder:text-trust-blue/40 focus:outline-none focus:ring-2 focus:ring-trust-blue w-48 sm:w-60 shadow-inner"
                />
              </div>

              {/* Department Filter */}
              <div className="flex items-center gap-1.5">
                <Filter className="w-4 h-4 text-trust-blue/60" />
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="px-3 py-2 rounded-xl border border-white/90 bg-white/80 text-xs font-medium text-trust-blue focus:outline-none focus:ring-2 focus:ring-trust-blue shadow-inner"
                >
                  {departments.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </div>

              <button
                onClick={() => setIsAddStaffOpen(true)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-xl bg-trust-blue text-white hover:bg-trust-blue/90 shadow transition-colors"
              >
                <UserPlus className="w-4 h-4" />
                Add Staff
              </button>
            </div>
          </div>

          {/* Staff Table */}
          <div className="relative z-10 overflow-x-auto rounded-2xl border border-white/90 bg-white/60 shadow-inner">
            <table className="w-full text-left text-xs text-trust-blue">
              <thead className="bg-trust-blue/5 border-b border-white/80 text-trust-blue font-semibold uppercase tracking-wider text-[11px]">
                <tr>
                  <th className="py-3.5 px-4">Employee</th>
                  <th className="py-3.5 px-4">Role & Dept</th>
                  <th className="py-3.5 px-4">Employment</th>
                  <th className="py-3.5 px-4">Gross Salary</th>
                  <th className="py-3.5 px-4">Est. Net Pay</th>
                  <th className="py-3.5 px-4">Tax State</th>
                  <th className="py-3.5 px-4">Status</th>
                  <th className="py-3.5 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/80">
                {filteredStaff.length === 0 ? (
                  <tr>
                    <td colSpan={8} className="py-12 text-center text-trust-blue/60">
                      No staff profiles found. Click "Add Staff Profile" to create one.
                    </td>
                  </tr>
                ) : (
                  filteredStaff.map((staff) => {
                    const pay = calculateNigerianPayroll(staff.salary);
                    return (
                      <tr
                        key={staff.id}
                        className="hover:bg-white/80 transition-colors"
                      >
                        <td className="py-3.5 px-4">
                          <div className="font-semibold text-sm text-trust-blue">
                            {staff.name}
                          </div>
                          <div className="text-trust-blue/60">{staff.email}</div>
                        </td>
                        <td className="py-3.5 px-4">
                          <div className="font-medium text-trust-blue">{staff.role}</div>
                          <div className="text-[11px] text-trust-blue/60">
                            {staff.department}
                          </div>
                        </td>
                        <td className="py-3.5 px-4">
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-trust-blue/10 text-trust-blue">
                            {staff.employmentType}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 font-semibold text-trust-blue">
                          ₦{Number(staff.salary).toLocaleString()}
                        </td>
                        <td className="py-3.5 px-4 font-semibold text-emerald-700">
                          ₦{pay.netPay.toLocaleString()}
                        </td>
                        <td className="py-3.5 px-4 text-trust-blue/80">
                          {staff.taxState}
                        </td>
                        <td className="py-3.5 px-4">
                          <span
                            className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                              staff.status === 'Active'
                                ? 'bg-emerald-100 text-emerald-800'
                                : 'bg-amber-100 text-amber-800'
                            }`}
                          >
                            {staff.status}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button
                              onClick={() => setSelectedStaff(staff)}
                              className="p-1.5 rounded-lg text-trust-blue/70 hover:text-trust-blue hover:bg-white/80 transition-colors"
                              title="View Full Profile & Deductions"
                            >
                              <Eye className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleDeleteStaff(staff.id, staff.name)}
                              className="p-1.5 rounded-lg text-red-600/70 hover:text-red-700 hover:bg-red-50 transition-colors"
                              title="Delete Staff"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* ================= ADD STAFF MODAL ================= */}
      {isAddStaffOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div
            className="fixed inset-0 bg-trust-blue/60 backdrop-blur-sm"
            onClick={() => setIsAddStaffOpen(false)}
          />

          <div className="relative w-full max-w-2xl my-8 rounded-3xl border border-white/80 p-6 sm:p-8 shadow-2xl overflow-hidden z-10 bg-white">
            <GlassOverlay variant="light" withRefraction={true} />

            <div className="flex items-center justify-between mb-6 relative z-10">
              <div>
                <h3 className="text-xl font-display font-bold text-trust-blue">
                  Create New Staff Profile
                </h3>
                <p className="text-xs text-trust-blue/70">
                  Provision employee profile with Nigerian tax, pension, and compensation setup.
                </p>
              </div>
              <button
                onClick={() => setIsAddStaffOpen(false)}
                className="p-1.5 rounded-full text-trust-blue/60 hover:text-trust-blue hover:bg-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddStaff} className="space-y-4 relative z-10 max-h-[75vh] overflow-y-auto pr-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-trust-blue">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Babatunde Olumide"
                    value={staffName}
                    onChange={(e) => setStaffName(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-border-grey text-xs text-trust-blue focus:outline-none focus:ring-2 focus:ring-trust-blue"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-trust-blue">Work Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="b.olumide@company.com"
                    value={staffEmail}
                    onChange={(e) => setStaffEmail(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-border-grey text-xs text-trust-blue focus:outline-none focus:ring-2 focus:ring-trust-blue"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-trust-blue">Job Title / Role *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Lead Logistics Analyst"
                    value={staffRole}
                    onChange={(e) => setStaffRole(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-border-grey text-xs text-trust-blue focus:outline-none focus:ring-2 focus:ring-trust-blue"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-trust-blue">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+234 802 000 0000"
                    value={staffPhone}
                    onChange={(e) => setStaffPhone(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-border-grey text-xs text-trust-blue focus:outline-none focus:ring-2 focus:ring-trust-blue"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-trust-blue">Department</label>
                  <select
                    value={staffDepartment}
                    onChange={(e) => setStaffDepartment(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-border-grey text-xs text-trust-blue focus:outline-none focus:ring-2 focus:ring-trust-blue"
                  >
                    <option value="People Operations">People Operations</option>
                    <option value="Operations">Operations</option>
                    <option value="Finance">Finance</option>
                    <option value="Technology">Technology</option>
                    <option value="Sales & Marketing">Sales & Marketing</option>
                    <option value="Executive / HR">Executive / HR</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-trust-blue">Employment Type</label>
                  <select
                    value={staffEmploymentType}
                    onChange={(e) => setStaffEmploymentType(e.target.value as any)}
                    className="w-full px-3 py-2.5 rounded-xl border border-border-grey text-xs text-trust-blue focus:outline-none focus:ring-2 focus:ring-trust-blue"
                  >
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Contract">Contract</option>
                    <option value="Remote">Remote</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-trust-blue">
                    Gross Monthly Salary (₦) *
                  </label>
                  <input
                    type="number"
                    required
                    min={0}
                    step={1000}
                    value={staffSalary}
                    onChange={(e) => setStaffSalary(Number(e.target.value))}
                    className="w-full px-3 py-2.5 rounded-xl border border-border-grey text-xs font-bold text-trust-blue focus:outline-none focus:ring-2 focus:ring-trust-blue"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-trust-blue">State Tax Jurisdiction</label>
                  <select
                    value={staffTaxState}
                    onChange={(e) => setStaffTaxState(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-border-grey text-xs text-trust-blue focus:outline-none focus:ring-2 focus:ring-trust-blue"
                  >
                    <option value="Lagos (LIRS)">Lagos (LIRS)</option>
                    <option value="Ogun (OGIRS)">Ogun (OGIRS)</option>
                    <option value="Abuja (FCT-IRS)">Abuja (FCT-IRS)</option>
                    <option value="Rivers (RIRS)">Rivers (RIRS)</option>
                    <option value="Oyo (OYSIRS)">Oyo (OYSIRS)</option>
                    <option value="Kano (KIRS)">Kano (KIRS)</option>
                  </select>
                </div>
              </div>

              {/* Nigerian Statutory Payroll Preview Box */}
              <div className="p-4 rounded-2xl bg-sky/50 border border-border-grey space-y-2">
                <p className="text-xs font-bold text-trust-blue uppercase tracking-wide">
                  Nigerian Statutory Deductions Preview (PITA & PRA 2014)
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                  <div className="p-2 rounded-lg bg-white/80">
                    <span className="text-[10px] text-trust-blue/70">8% Pension:</span>
                    <p className="font-bold text-trust-blue">₦{formDeductions.employeePension.toLocaleString()}</p>
                  </div>
                  <div className="p-2 rounded-lg bg-white/80">
                    <span className="text-[10px] text-trust-blue/70">1.5% NHF:</span>
                    <p className="font-bold text-trust-blue">₦{formDeductions.nhf.toLocaleString()}</p>
                  </div>
                  <div className="p-2 rounded-lg bg-white/80">
                    <span className="text-[10px] text-trust-blue/70">Monthly PAYE:</span>
                    <p className="font-bold text-trust-blue">₦{formDeductions.monthlyPaye.toLocaleString()}</p>
                  </div>
                  <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-200">
                    <span className="text-[10px] text-emerald-700 font-semibold">Net Pay:</span>
                    <p className="font-bold text-emerald-700">₦{formDeductions.netPay.toLocaleString()}</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-trust-blue">RSA Pension PIN (Optional)</label>
                  <input
                    type="text"
                    placeholder="e.g. PEN1008765432"
                    value={staffPensionPin}
                    onChange={(e) => setStaffPensionPin(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-border-grey text-xs text-trust-blue focus:outline-none focus:ring-2 focus:ring-trust-blue"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-trust-blue">NHF Registration Number (Optional)</label>
                  <input
                    type="text"
                    placeholder="e.g. NHF-7890123"
                    value={staffNhfNumber}
                    onChange={(e) => setStaffNhfNumber(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-border-grey text-xs text-trust-blue focus:outline-none focus:ring-2 focus:ring-trust-blue"
                  />
                </div>
              </div>

              <div className="pt-3 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsAddStaffOpen(false)}
                  className="px-5 py-2.5 rounded-xl border border-border-grey text-xs font-semibold text-trust-blue hover:bg-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-trust-blue text-white text-xs font-semibold hover:bg-trust-blue/90 shadow transition-colors"
                >
                  Save Staff Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ================= VIEW STAFF DETAILS MODAL ================= */}
      {selectedStaff && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div
            className="fixed inset-0 bg-trust-blue/60 backdrop-blur-sm"
            onClick={() => setSelectedStaff(null)}
          />

          <div className="relative w-full max-w-lg my-8 rounded-3xl border border-white/80 p-6 sm:p-8 shadow-2xl overflow-hidden z-10 bg-white">
            <GlassOverlay variant="light" withRefraction={true} />

            <div className="flex items-start justify-between mb-5 relative z-10">
              <div>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-trust-blue/10 text-trust-blue">
                  {selectedStaff.department}
                </span>
                <h3 className="text-2xl font-display font-bold text-trust-blue mt-1">
                  {selectedStaff.name}
                </h3>
                <p className="text-xs text-trust-blue/70">{selectedStaff.role} • {selectedStaff.email}</p>
              </div>
              <button
                onClick={() => setSelectedStaff(null)}
                className="p-1.5 rounded-full text-trust-blue/60 hover:text-trust-blue hover:bg-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 relative z-10 text-xs">
              <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-white/80 border border-border-grey">
                <div>
                  <span className="text-[11px] text-trust-blue/60">Phone:</span>
                  <p className="font-semibold text-trust-blue">{selectedStaff.phone || 'Not recorded'}</p>
                </div>
                <div>
                  <span className="text-[11px] text-trust-blue/60">Employment:</span>
                  <p className="font-semibold text-trust-blue">{selectedStaff.employmentType}</p>
                </div>
                <div>
                  <span className="text-[11px] text-trust-blue/60">Tax Jurisdiction:</span>
                  <p className="font-semibold text-trust-blue">{selectedStaff.taxState}</p>
                </div>
                <div>
                  <span className="text-[11px] text-trust-blue/60">Start Date:</span>
                  <p className="font-semibold text-trust-blue">{selectedStaff.startDate}</p>
                </div>
              </div>

              {/* Nigerian Statutory Payroll Breakdown */}
              {(() => {
                const breakdown = calculateNigerianPayroll(selectedStaff.salary);
                return (
                  <div className="p-4 rounded-2xl bg-trust-blue text-white space-y-3 shadow-md">
                    <p className="text-xs font-bold uppercase tracking-wider text-brand-gold">
                      Monthly Statutory Emoluments Breakdown
                    </p>
                    <div className="space-y-1.5">
                      <div className="flex justify-between">
                        <span className="text-white/80">Gross Monthly Emolument:</span>
                        <span className="font-bold">₦{selectedStaff.salary.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-white/70">
                        <span>Employee Pension (8%):</span>
                        <span>- ₦{breakdown.employeePension.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-white/70">
                        <span>NHF Contribution (1.5%):</span>
                        <span>- ₦{breakdown.nhf.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-white/70">
                        <span>Monthly PAYE Tax:</span>
                        <span>- ₦{breakdown.monthlyPaye.toLocaleString()}</span>
                      </div>
                      <div className="border-t border-white/20 pt-2 flex justify-between font-bold text-sm text-brand-gold">
                        <span>Estimated Net Take-Home:</span>
                        <span>₦{breakdown.netPay.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                );
              })()}

              <div className="p-3 rounded-xl bg-white/80 border border-border-grey space-y-1">
                <span className="text-[10px] font-semibold text-trust-blue/70">Statutory Identifiers:</span>
                <p className="text-trust-blue">
                  <strong>RSA PIN:</strong> {selectedStaff.pensionPin || 'Pending submission'}
                </p>
                <p className="text-trust-blue">
                  <strong>NHF Number:</strong> {selectedStaff.nhfNumber || 'Pending submission'}
                </p>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setSelectedStaff(null)}
                  className="px-5 py-2 rounded-xl bg-trust-blue text-white font-semibold text-xs hover:bg-trust-blue/90"
                >
                  Close Dossier
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function HrCenterDashboard() {
  return (
    <React.Suspense
      fallback={
        <div className="min-h-screen bg-slate-50 flex items-center justify-center">
          <div className="flex items-center gap-3 text-trust-blue font-semibold">
            <div className="w-5 h-5 border-2 border-trust-blue border-t-transparent rounded-full animate-spin" />
            <span>Loading HR Center workspace...</span>
          </div>
        </div>
      }
    >
      <HrCenterDashboardContent />
    </React.Suspense>
  );
}

