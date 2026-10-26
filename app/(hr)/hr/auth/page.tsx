'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Building2,
  Lock,
  Mail,
  User,
  Globe,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  ChevronLeft,
} from 'lucide-react';
import GlassOverlay from '@/components/ui/GlassOverlay';
import TrustlineLogo from '@/icon_1.png';
import {
  HrStore,
  validateSubdomain,
  sanitizeSubdomain,
} from '@/lib/hr-center';

export default function HrAuthPage() {
  const router = useRouter();
  const [tab, setTab] = useState<'signup' | 'login'>('signup');

  const [companyName, setCompanyName] = useState('');
  const [subdomain, setSubdomain] = useState('');
  const [industry, setIndustry] = useState('Logistics & Supply Chain');
  const [companySize, setCompanySize] = useState('10 - 50 staff');
  const [adminName, setAdminName] = useState('');
  const [adminEmail, setAdminEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginSubdomain, setLoginSubdomain] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [subdomainError, setSubdomainError] = useState('');

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
        setError(res.error || 'Failed to register company.');
        setIsLoading(false);
        return;
      }

      router.push(`/hr?company=${subdomain}`);
    } catch (err: any) {
      setError(err?.message || 'Registration failed.');
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
      let targetCompany = loginSubdomain
        ? HrStore.findCompanyBySubdomain(loginSubdomain)
        : companies.find(
            (c) => c.adminEmail.toLowerCase() === loginEmail.toLowerCase().trim()
          );

      if (!targetCompany && companies.length > 0) {
        targetCompany = companies[0];
      }

      if (!targetCompany) {
        setError('No company workspace found. Please register first.');
        setIsLoading(false);
        return;
      }

      HrStore.saveSession({
        user: {
          id: `usr_${Date.now()}`,
          email: loginEmail || targetCompany.adminEmail,
          name: targetCompany.adminName,
          role: 'admin',
        },
        company: targetCompany,
      });

      router.push(`/hr?company=${targetCompany.subdomain}`);
    } catch (err: any) {
      setError(err?.message || 'Login failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E6F0FA] via-white to-[#E6F0FA] flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="pointer-events-none absolute -top-40 -right-40 w-96 h-96 rounded-full bg-brand-gold/25 blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-trust-blue/20 blur-3xl" />

      <div className="w-full max-w-xl mb-6 flex justify-between items-center z-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-trust-blue hover:text-brand-gold transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to Trustline Services
        </Link>
        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-trust-blue/10 text-trust-blue">
          NDPR &amp; NDPC Compliant
        </span>
      </div>

      <div className="relative w-full max-w-xl rounded-3xl border border-white/80 p-8 sm:p-10 shadow-[0_20px_60px_rgba(0,51,102,0.18)] z-10 overflow-hidden">
        <GlassOverlay variant="light" withRefraction={true} />

        <div className="text-center space-y-3 mb-8 relative z-10">
          <div className="flex justify-center mb-2">
            <Image src={TrustlineLogo} alt="Trustline Logo" width={48} height={48} className="h-12 w-12 object-contain" />
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-trust-blue/10 border border-trust-blue/20 text-xs font-bold text-trust-blue">
            <ShieldCheck className="w-4 h-4 text-brand-gold" />
            Trustline HR Center Portal
          </div>
          <h1 className="text-3xl font-display font-bold text-trust-blue">
            {tab === 'signup' ? 'Claim Your Company Subdomain' : 'Log In to HR Center'}
          </h1>
          <p className="text-sm text-trust-blue/80 max-w-md mx-auto">
            {tab === 'signup'
              ? 'Multi-tenant HR architecture with automated Admin provisioning and Nigerian statutory reporting.'
              : 'Access your company staff directory and payroll infrastructure.'}
          </p>
        </div>

        <div className="flex rounded-xl bg-white/60 p-1 mb-6 border border-white/80 shadow-inner relative z-10">
          <button type="button" onClick={() => { setTab('signup'); setError(''); }}
            className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all ${tab === 'signup' ? 'bg-trust-blue text-white shadow-md' : 'text-trust-blue/80 hover:text-trust-blue'}`}>
            Register Company
          </button>
          <button type="button" onClick={() => { setTab('login'); setError(''); }}
            className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all ${tab === 'login' ? 'bg-trust-blue text-white shadow-md' : 'text-trust-blue/80 hover:text-trust-blue'}`}>
            Sign In
          </button>
        </div>

        {error && (
          <div className="mb-6 p-4 rounded-xl bg-red-50/90 border border-red-200 text-sm text-red-700 flex items-center gap-2 relative z-10">
            <span>⚠️</span><span>{error}</span>
          </div>
        )}

        {tab === 'signup' && (
          <form onSubmit={handleCompanySignup} className="space-y-4 relative z-10">
            <div className="space-y-1">
              <label className="block text-xs font-semibold uppercase tracking-wider text-trust-blue">Company Legal Name</label>
              <div className="relative">
                <Building2 className="absolute left-3.5 top-3.5 w-4 h-4 text-trust-blue/40" />
                <input type="text" required placeholder="e.g. Apex Logistics Ltd" value={companyName} onChange={handleCompanyNameChange}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-white/90 bg-white/70 backdrop-blur-md text-sm text-trust-blue placeholder:text-trust-blue/40 focus:outline-none focus:ring-2 focus:ring-trust-blue shadow-inner" />
              </div>
            </div>

            <div className="space-y-1">
              <label className="block text-xs font-semibold uppercase tracking-wider text-trust-blue">Custom Subdomain</label>
              <div className="flex items-center rounded-xl border border-white/90 bg-white/70 backdrop-blur-md overflow-hidden shadow-inner">
                <div className="pl-3.5 pr-2 text-trust-blue/40"><Globe className="w-4 h-4" /></div>
                <input type="text" required placeholder="e.g. apex" value={subdomain} onChange={handleSubdomainChange}
                  className="w-full py-3 bg-transparent text-sm font-semibold text-trust-blue placeholder:text-trust-blue/40 focus:outline-none" />
                <span className="pr-3.5 text-xs font-medium text-trust-blue/60 select-none whitespace-nowrap">.trustlineprofessional.com</span>
              </div>
              {subdomainError ? (
                <p className="text-xs text-red-600 font-medium">{subdomainError}</p>
              ) : subdomain ? (
                <p className="text-xs text-emerald-700 font-medium flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Workspace: https://{subdomain}.trustlineprofessional.com
                </p>
              ) : null}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="block text-xs font-semibold uppercase tracking-wider text-trust-blue">Industry</label>
                <select value={industry} onChange={(e) => setIndustry(e.target.value)}
                  className="w-full px-3 py-3 rounded-xl border border-white/90 bg-white/70 backdrop-blur-md text-sm text-trust-blue focus:outline-none focus:ring-2 focus:ring-trust-blue shadow-inner">
                  <option value="Logistics & Supply Chain">Logistics &amp; Supply Chain</option>
                  <option value="Fintech & Financial Services">Fintech &amp; Finance</option>
                  <option value="Manufacturing & Retail">Manufacturing &amp; Retail</option>
                  <option value="Education & Healthcare">Education &amp; Healthcare</option>
                  <option value="NGO & Micro-enterprise">NGO &amp; Micro-enterprise</option>
                  <option value="Professional Services">Professional Services</option>
                </select>
              </div>
              <div className="space-y-1">
                <label className="block text-xs font-semibold uppercase tracking-wider text-trust-blue">Team Size</label>
                <select value={companySize} onChange={(e) => setCompanySize(e.target.value)}
                  className="w-full px-3 py-3 rounded-xl border border-white/90 bg-white/70 backdrop-blur-md text-sm text-trust-blue focus:outline-none focus:ring-2 focus:ring-trust-blue shadow-inner">
                  <option value="1 - 10 staff">1 - 10 staff</option>
                  <option value="10 - 50 staff">10 - 50 staff (Growth SME)</option>
                  <option value="50 - 150 staff">50 - 150 staff</option>
                  <option value="150+ staff">150+ staff</option>
                </select>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white/60 border border-white/80 space-y-3">
              <p className="text-xs font-bold text-trust-blue flex items-center gap-1.5 uppercase tracking-wide">
                <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
                Primary HR Administrator Account
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="block text-xs font-medium text-trust-blue">Admin Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-4 h-4 text-trust-blue/40" />
                    <input type="text" required placeholder="e.g. Adeola Adeleke" value={adminName} onChange={(e) => setAdminName(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-white/90 bg-white/80 text-sm text-trust-blue focus:outline-none focus:ring-2 focus:ring-trust-blue" />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="block text-xs font-medium text-trust-blue">Work Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-4 h-4 text-trust-blue/40" />
                    <input type="email" required placeholder="hr@company.com" value={adminEmail} onChange={(e) => setAdminEmail(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-white/90 bg-white/80 text-sm text-trust-blue focus:outline-none focus:ring-2 focus:ring-trust-blue" />
                  </div>
                </div>
              </div>
              <div className="space-y-1">
                <label className="block text-xs font-medium text-trust-blue">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 w-4 h-4 text-trust-blue/40" />
                  <input type="password" required minLength={6} placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-white/90 bg-white/80 text-sm text-trust-blue focus:outline-none focus:ring-2 focus:ring-trust-blue" />
                </div>
              </div>
            </div>

            <button type="submit" disabled={isLoading}
              className="w-full py-4 px-6 rounded-xl bg-trust-blue text-white font-semibold flex items-center justify-center gap-2 hover:bg-trust-blue/90 transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-trust-blue focus:ring-offset-2">
              {isLoading ? <span>Configuring HR Center...</span> : <><span>Deploy My HR Center</span><ArrowRight className="w-5 h-5" /></>}
            </button>
          </form>
        )}

        {tab === 'login' && (
          <form onSubmit={handleLogin} className="space-y-5 relative z-10">
            <div className="space-y-1">
              <label className="block text-xs font-semibold uppercase tracking-wider text-trust-blue">Company Subdomain (Optional)</label>
              <div className="flex items-center rounded-xl border border-white/90 bg-white/70 backdrop-blur-md overflow-hidden shadow-inner">
                <div className="pl-3.5 pr-2 text-trust-blue/40"><Globe className="w-4 h-4" /></div>
                <input type="text" placeholder="e.g. apex" value={loginSubdomain} onChange={(e) => setLoginSubdomain(sanitizeSubdomain(e.target.value))}
                  className="w-full py-3 bg-transparent text-sm font-semibold text-trust-blue placeholder:text-trust-blue/40 focus:outline-none" />
                <span className="pr-3.5 text-xs font-medium text-trust-blue/60 select-none whitespace-nowrap">.trustlineprofessional.com</span>
              </div>
            </div>

            <div className="space-y-1">
              <label className="block text-xs font-semibold uppercase tracking-wider text-trust-blue">Work Email</label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-trust-blue/40" />
                <input type="email" required placeholder="hr@apexlogistics.ng" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-white/90 bg-white/70 backdrop-blur-md text-sm text-trust-blue placeholder:text-trust-blue/40 focus:outline-none focus:ring-2 focus:ring-trust-blue shadow-inner" />
              </div>
            </div>

            <div className="space-y-1">
              <label className="block text-xs font-semibold uppercase tracking-wider text-trust-blue">Password</label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-3.5 w-4 h-4 text-trust-blue/40" />
                <input type="password" required placeholder="••••••••" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-white/90 bg-white/70 backdrop-blur-md text-sm text-trust-blue placeholder:text-trust-blue/40 focus:outline-none focus:ring-2 focus:ring-trust-blue shadow-inner" />
              </div>
            </div>

            <button type="submit" disabled={isLoading}
              className="w-full py-4 px-6 rounded-xl bg-trust-blue text-white font-semibold flex items-center justify-center gap-2 hover:bg-trust-blue/90 transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-trust-blue focus:ring-offset-2">
              {isLoading ? <span>Entering Workspace...</span> : <><span>Sign In to HR Center</span><ArrowRight className="w-5 h-5" /></>}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
