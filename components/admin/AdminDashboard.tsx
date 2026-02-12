'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button';

export type WaitlistEntry = { id: string; email: string; created_at: string };

export default function AdminDashboard({ signups }: { signups: WaitlistEntry[] }) {
  const [exporting, setExporting] = useState(false);

  const handleExport = async () => {
    setExporting(true);
    try {
      const res = await fetch('/api/admin/export');
      if (!res.ok) throw new Error('Export failed');
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'waitlist-signups.csv';
      a.click();
      URL.revokeObjectURL(url);
    } catch {
      alert('Export failed. Make sure you are logged in.');
    } finally {
      setExporting(false);
    }
  };

  const handleLogout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' });
    window.location.reload();
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-display font-bold text-trust-blue">Waitlist Admin</h1>
        <div className="flex gap-3">
          <Button variant="gold" onClick={handleExport} disabled={exporting}>
            {exporting ? 'Exporting…' : 'Export to CSV'}
          </Button>
          <Button variant="outline" onClick={handleLogout}>
            Log out
          </Button>
        </div>
      </div>

      <div className="rounded-lg border border-border-grey bg-white p-4 sm:p-6">
        <p className="text-3xl font-display font-bold text-trust-blue">
          {signups.length}
        </p>
        <p className="text-sm text-trust-blue/70">Total signups</p>
      </div>

      <div className="overflow-hidden rounded-lg border border-border-grey bg-white">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[320px] text-left text-sm">
            <thead>
              <tr className="border-b border-border-grey bg-accent-sky/50">
                <th className="px-4 py-3 font-semibold text-trust-blue">Email</th>
                <th className="px-4 py-3 font-semibold text-trust-blue">Signed up</th>
              </tr>
            </thead>
            <tbody>
              {signups.length === 0 ? (
                <tr>
                  <td colSpan={2} className="px-4 py-8 text-center text-trust-blue/60">
                    No signups yet.
                  </td>
                </tr>
              ) : (
                signups.map((row) => (
                  <tr key={row.id} className="border-b border-border-grey last:border-0">
                    <td className="px-4 py-3 text-trust-blue">{row.email}</td>
                    <td className="px-4 py-3 text-trust-blue/80">
                      {new Date(row.created_at).toLocaleString()}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
