import { hasAdminSession, isAdminAuthConfigured } from "@/lib/auth";
import { getSupabaseAdmin } from "@/lib/supabase/server";
import AdminLoginForm from "@/components/admin/AdminLoginForm";
import AdminDashboard from "@/components/admin/AdminDashboard";
import Container from "@/components/ui/Container";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  if (!isAdminAuthConfigured()) {
    return (
      <main className="min-h-screen bg-accent-sky/30 py-16">
        <Container size="md">
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-6 text-center text-trust-blue">
            <p className="font-medium">Admin login is not configured.</p>
            <p className="mt-2 text-sm text-trust-blue/80">
              Set <code className="rounded bg-white px-1 py-0.5">ADMIN_PASSWORD</code> in your environment to enable the admin dashboard.
            </p>
          </div>
        </Container>
      </main>
    );
  }

  const authenticated = await hasAdminSession();
  if (!authenticated) {
    return (
      <main className="min-h-screen bg-accent-sky/30 flex items-center justify-center py-16">
        <Container size="sm">
          <AdminLoginForm />
        </Container>
      </main>
    );
  }

  const { data: signups, error } = await getSupabaseAdmin()
    .from("waitlist_signups")
    .select("id, email, created_at")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Admin fetch error:", error);
    return (
      <main className="min-h-screen bg-accent-sky/30 py-16">
        <Container size="md">
          <div className="rounded-xl border border-red-200 bg-red-50 p-6 text-center text-trust-blue">
            <p className="font-medium">Failed to load waitlist data.</p>
          </div>
        </Container>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-accent-sky/30 py-12">
      <Container size="xl">
        <AdminDashboard signups={signups ?? []} />
      </Container>
    </main>
  );
}
