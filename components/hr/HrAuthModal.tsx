'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import {
  Building2,
  Lock,
  Mail,
  User,
  Globe,
  ArrowRight,
  CheckCircle2,
  X,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';
import GlassOverlay from '@/components/ui/GlassOverlay';
import {
  HrStore,
  validateSubdomain,
  sanitizeSubdomain,
} from '@/lib/hr-center';

interface HrAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'signup' | 'login';
}

export default function HrAuthModal({
  isOpen,
  onClose,
  initialTab = 'signup',
}: HrAuthModalProps) {
  const router = useRouter();
  const [tab, setTab] = useState<'signup' | 'login'>(initialTab);

  useEffect(() => {
    setTab(initialTab);
  }, [initialTab]);

  // Company Signup Form State
  const [companyName, setCompanyName] = useState('');
  const [subdomain, setSubdomain] = useState('');
  const [industry, setIndustry] = useState('Logistics & Supply Chain');
  const [companySize, setCompanySize] = useState('10 - 50 staff');
  const [adminName, setAdminName] = useState('');
  const [adminEmail, setAdminEmail] = useState('');
  const [password, setPassword] = useState('');

  // Login Form State
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginSubdomain, setLoginSubdomain] = useState('');

  // Status
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [subdomainError, setSubdomainError] = useState('');

  // Auto-generate subdomain from company name as user types
  const handleCompanyNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setCompanyName(val);
    if (!subdomain || subdomain === sanitizeSubdomain(companyName)) {
      setSubdomain(sanitizeSubdomain(val));
    }
  };

  const handleSubdomainChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const clean = sanitizeSubdomain(e.target.value);
    setSubdomain(clean);
    const check = validateSubdomain(clean);
    setSubdomainError(check.valid ? '' : check.error || '');
  };

  const handleCompanySignup = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    const check = validateSubdomain(subdomain);
    if (!check.valid) {
      setSubdomainError(check.error || 'Invalid subdomain');
      setIsLoading(false);
      return;
    }

    try {
      const res = HrStore.registerCompany({
        name: companyName,
        subdomain,
        industry,
        companySize,
        adminName,
        adminEmail,
      });

      if (!res.success) {
        setError(res.error || 'Failed to create company workspace.');
        setIsLoading(false);
        return;
      }

      onClose();
      // Redirect to the newly created company's HR Center
      router.push(`/hr?company=${subdomain}`);
    } catch (err: any) {
      setError(err?.message || 'Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const companies = HrStore.getCompanies();

      // If user provided a specific subdomain, look it up
      let targetCompany = loginSubdomain
        ? HrStore.findCompanyBySubdomain(loginSubdomain)
        : companies.find(
            (c) =>
              c.adminEmail.toLowerCase() === loginEmail.toLowerCase().trim()
          );

      // Default to first company if testing
      if (!targetCompany && companies.length > 0) {
        targetCompany = companies[0];
      }

      if (!targetCompany) {
        setError('No company account found with those details. Register your company below.');
        setIsLoading(false);
        return;
      }

      // Save user session as admin
      HrStore.saveSession({
        user: {
          id: `usr_${Date.now()}`,
          email: loginEmail || targetCompany.adminEmail,
          name: targetCompany.adminName,
          role: 'admin',
        },
        company: targetCompany,
      });

      onClose();
      router.push(`/hr?company=${targetCompany.subdomain}`);
    } catch (err: any) {
      setError(err?.message || 'Login failed');
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-trust-blue/60 backdrop-blur-md"
        />

        {/* Modal Window with Physical Glassmorphism */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-xl my-8 rounded-3xl border border-white/80 p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,51,102,0.3)] overflow-hidden z-10"
        >
          {/* Glass Refraction Overlay */}
          <GlassOverlay variant="light" withRefraction={true} />

          {/* Ambient Lighting Accents */}
          <div className="pointer-events-none absolute -top-20 -right-20 w-60 h-60 rounded-full bg-brand-gold/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-trust-blue/15 blur-3xl" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full text-trust-blue/70 hover:text-trust-blue hover:bg-white/60 transition-colors z-20"
            aria-label="Close HR Center modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header Title */}
          <div className="relative z-10 text-center space-y-2 mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-trust-blue/10 border border-trust-blue/20 text-xs font-semibold text-trust-blue">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-gold" />
              Trustline HR Center • Multi-Tenant
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-trust-blue">
              {tab === 'signup' ? 'Deploy Your Company HR Center' : 'Sign In to Your Workspace'}
            </h2>
            <p className="text-sm text-trust-blue/80 max-w-md mx-auto">
              {tab === 'signup'
                ? 'Claim your customized subdomain. Your initial user is automatically granted HR Admin privileges.'
                : 'Access your company staff directory, compliance reports, and payroll records.'}
            </p>
          </div>

          {/* Navigation Tabs */}
          <div className="relative z-10 flex rounded-xl bg-white/60 p-1 mb-6 border border-white/80 shadow-inner">
            <button
              type="button"
              onClick={() => {
                setTab('signup');
                setError('');
              }}
              className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${
                tab === 'signup'
                  ? 'bg-trust-blue text-white shadow-md'
                  : 'text-trust-blue/80 hover:text-trust-blue'
              }`}
            >
              Register Company
            </button>
            <button
              type="button"
              onClick={() => {
                setTab('login');
                setError('');
              }}
              className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${
                tab === 'login'
                  ? 'bg-trust-blue text-white shadow-md'
                  : 'text-trust-blue/80 hover:text-trust-blue'
              }`}
            >
              Sign In
            </button>
          </div>

          {error && (
            <div className="relative z-10 mb-4 p-3 rounded-xl bg-red-50/90 border border-red-200 text-sm text-red-700 flex items-center gap-2">
              <span>⚠️</span>
              <span>{error}</span>
            </div>
          )}

          {/* ================= COMPANY SIGNUP TAB ================= */}
          {tab === 'signup' && (
            <form onSubmit={handleCompanySignup} className="relative z-10 space-y-4">
              <div className="space-y-1">
                <label className="block text-xs font-semibold uppercase tracking-wider text-trust-blue">
                  Company Legal Name
                </label>
                <div className="relative">
                  <Building2 className="absolute left-3.5 top-3.5 w-4 h-4 text-trust-blue/40" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Apex Logistics Ltd"
                    value={companyName}
                    onChange={handleCompanyNameChange}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-white/90 bg-white/70 backdrop-blur-md text-sm text-trust-blue placeholder:text-trust-blue/40 focus:outline-none focus:ring-2 focus:ring-trust-blue shadow-inner"
                  />
                </div>
              </div>

              {/* Subdomain Input with Live URL Badge */}
              <div className="space-y-1">
                <label className="block text-xs font-semibold uppercase tracking-wider text-trust-blue">
                  Company Subdomain
                </label>
                <div className="flex items-center rounded-xl border border-white/90 bg-white/70 backdrop-blur-md overflow-hidden shadow-inner">
                  <div className="pl-3.5 pr-2 text-trust-blue/40">
                    <Globe className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    placeholder="e.g. apex"
                    value={subdomain}
                    onChange={handleSubdomainChange}
                    className="w-full py-2.5 bg-transparent text-sm font-semibold text-trust-blue placeholder:text-trust-blue/40 focus:outline-none"
                  />
                  <span className="pr-3.5 text-xs font-medium text-trust-blue/60 select-none whitespace-nowrap">
                    .trustlineprofessional.com
                  </span>
                </div>
                {subdomainError ? (
                  <p className="text-xs text-red-600 font-medium">{subdomainError}</p>
                ) : subdomain ? (
                  <p className="text-xs text-emerald-700 font-medium flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Live URL: https://{subdomain}.trustlineprofessional.com
                  </p>
                ) : null}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-trust-blue">
                    Industry
                  </label>
                  <select
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-white/90 bg-white/70 backdrop-blur-md text-sm text-trust-blue focus:outline-none focus:ring-2 focus:ring-trust-blue shadow-inner"
                  >
                    <option value="Logistics & Supply Chain">Logistics & Supply Chain</option>
                    <option value="Fintech & Financial Services">Fintech & Finance</option>
                    <option value="Manufacturing & Retail">Manufacturing & Retail</option>
                    <option value="Education & Healthcare">Education & Healthcare</option>
                    <option value="NGO & Micro-enterprise">NGO & Micro-enterprise</option>
                    <option value="Professional Services">Professional Services</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-trust-blue">
                    Team Size
                  </label>
                  <select
                    value={companySize}
                    onChange={(e) => setCompanySize(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-white/90 bg-white/70 backdrop-blur-md text-sm text-trust-blue focus:outline-none focus:ring-2 focus:ring-trust-blue shadow-inner"
                  >
                    <option value="1 - 10 staff">1 - 10 staff</option>
                    <option value="10 - 50 staff">10 - 50 staff (Growth SME)</option>
                    <option value="50 - 150 staff">50 - 150 staff</option>
                    <option value="150+ staff">150+ staff</option>
                  </select>
                </div>
              </div>

              {/* HR Admin Credentials */}
              <div className="p-4 rounded-2xl bg-white/50 border border-white/80 space-y-3">
                <p className="text-xs font-bold text-trust-blue flex items-center gap-1.5 uppercase tracking-wide">
                  <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
                  Initial HR Administrator Profile
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="block text-xs font-medium text-trust-blue">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 w-4 h-4 text-trust-blue/40" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Adeola Adeleke"
                        value={adminName}
                        onChange={(e) => setAdminName(e.target.value)}
                        className="w-full pl-9 pr-3 py-2 rounded-lg border border-white/90 bg-white/80 text-sm text-trust-blue focus:outline-none focus:ring-2 focus:ring-trust-blue"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-medium text-trust-blue">Work Email</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 w-4 h-4 text-trust-blue/40" />
                      <input
                        type="email"
                        required
                        placeholder="hr@company.com"
                        value={adminEmail}
                        onChange={(e) => setAdminEmail(e.target.value)}
                        className="w-full pl-9 pr-3 py-2 rounded-lg border border-white/90 bg-white/80 text-sm text-trust-blue focus:outline-none focus:ring-2 focus:ring-trust-blue"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-medium text-trust-blue">Admin Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 w-4 h-4 text-trust-blue/40" />
                    <input
                      type="password"
                      required
                      minLength={6}
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 rounded-lg border border-white/90 bg-white/80 text-sm text-trust-blue focus:outline-none focus:ring-2 focus:ring-trust-blue"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3.5 px-6 rounded-xl bg-trust-blue text-white font-semibold flex items-center justify-center gap-2 hover:bg-trust-blue/90 transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-trust-blue focus:ring-offset-2"
              >
                {isLoading ? (
                  <span>Deploying HR Center...</span>
                ) : (
                  <>
                    <span>Create Company HR Center</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}

          {/* ================= SIGN IN TAB ================= */}
          {tab === 'login' && (
            <form onSubmit={handleLogin} className="relative z-10 space-y-4">
              <div className="space-y-1">
                <label className="block text-xs font-semibold uppercase tracking-wider text-trust-blue">
                  Company Subdomain (Optional)
                </label>
                <div className="flex items-center rounded-xl border border-white/90 bg-white/70 backdrop-blur-md overflow-hidden shadow-inner">
                  <div className="pl-3.5 pr-2 text-trust-blue/40">
                    <Globe className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    placeholder="e.g. apex"
                    value={loginSubdomain}
                    onChange={(e) => setLoginSubdomain(sanitizeSubdomain(e.target.value))}
                    className="w-full py-2.5 bg-transparent text-sm font-semibold text-trust-blue placeholder:text-trust-blue/40 focus:outline-none"
                  />
                  <span className="pr-3.5 text-xs font-medium text-trust-blue/60 select-none whitespace-nowrap">
                    .trustlineprofessional.com
                  </span>
                </div>
                <p className="text-xs text-trust-blue/60">
                  Tip: Leave blank or use <strong>apex</strong> for instant test preview.
                </p>
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-semibold uppercase tracking-wider text-trust-blue">
                  Work Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-trust-blue/40" />
                  <input
                    type="email"
                    required
                    placeholder="hr@apexlogistics.ng"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-white/90 bg-white/70 backdrop-blur-md text-sm text-trust-blue placeholder:text-trust-blue/40 focus:outline-none focus:ring-2 focus:ring-trust-blue shadow-inner"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-semibold uppercase tracking-wider text-trust-blue">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-3.5 w-4 h-4 text-trust-blue/40" />
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-white/90 bg-white/70 backdrop-blur-md text-sm text-trust-blue placeholder:text-trust-blue/40 focus:outline-none focus:ring-2 focus:ring-trust-blue shadow-inner"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3.5 px-6 rounded-xl bg-trust-blue text-white font-semibold flex items-center justify-center gap-2 hover:bg-trust-blue/90 transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-trust-blue focus:ring-offset-2"
                >
                  {isLoading ? (
                    <span>Authenticating...</span>
                  ) : (
                    <>
                      <span>Enter HR Center</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <div className="text-center pt-2">
                <button
                  type="button"
                  onClick={() => setTab('signup')}
                  className="text-xs text-brand-gold font-semibold hover:underline"
                >
                  Don't have an HR Center yet? Register your company →
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
