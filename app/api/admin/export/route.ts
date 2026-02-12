import { NextResponse } from 'next/server';
import { hasAdminSession } from '@/lib/auth';
import { getSupabaseAdmin } from '@/lib/supabase/server';

export async function GET() {
  const ok = await hasAdminSession();
  if (!ok) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  const { data, error } = await getSupabaseAdmin()
    .from('waitlist_signups')
    .select('email, created_at')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Export error:', error);
    return NextResponse.json({ error: 'Export failed' }, { status: 500 });
  }

  const headers = ['email', 'created_at'];
  const rows = (data || []).map((r) => [
    r.email,
    new Date(r.created_at).toISOString(),
  ]);
  const csv = [headers.join(','), ...rows.map((r) => r.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(','))].join('\n');

  return new NextResponse(csv, {
    status: 200,
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
      'Content-Disposition': 'attachment; filename="waitlist-signups.csv"',
    },
  });
}
