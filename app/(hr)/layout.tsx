import { ReactNode } from 'react';

// Dedicated Layout for HR Center multi-tenant portal & workspace
export default function HrRouteGroupLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 antialiased">
      {children}
    </div>
  );
}
