import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => request.cookies.set(name, value))
          supabaseResponse = NextResponse.next({
            request,
          })
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  // Refresh session if expired
  const {
    data: { user },
  } = await supabase.auth.getUser()

  // Protect /app routes (excluding auth pages handled elsewhere if needed)
  // Our logged-in app is in the `app/(app)` folder. We need to define paths.
  // We'll protect /dashboard and such. The root /admin has its own auth, but maybe we combine?
  // The PRD says "Block full dashboard access until the link is clicked."
  // Wait, the prompt says "A new user genuinely cannot reach any dashboard page before verifying their email"

  // Subdomain & Multi-tenant HR Center Routing
  const host = request.headers.get('host') || ''
  const hostname = host.split(':')[0]
  let hostSubdomain = ''
  
  if (hostname.endsWith('.trustlineprofessional.com')) {
    hostSubdomain = hostname.replace('.trustlineprofessional.com', '')
  } else if (hostname.endsWith('.localhost')) {
    hostSubdomain = hostname.replace('.localhost', '')
  }

  // Handle custom host subdomain on root domain (e.g. apex.localhost:3000 -> /hr?company=apex)
  if (hostSubdomain && !['www', 'api', 'admin', 'app', 'mail', 'test'].includes(hostSubdomain.toLowerCase())) {
    if (request.nextUrl.pathname === '/') {
      const hrUrl = request.nextUrl.clone()
      hrUrl.pathname = '/hr'
      hrUrl.searchParams.set('company', hostSubdomain.toLowerCase())
      return NextResponse.rewrite(hrUrl)
    }
  }

  const isHrRoute = request.nextUrl.pathname.startsWith('/hr')
  const isHrAuthPage = request.nextUrl.pathname === '/hr/auth'
  const hasHrSession = !!request.cookies.get('trustline_hr_subdomain')?.value
  const hasCompanyQuery = request.nextUrl.searchParams.has('company')

  if (isHrRoute && !isHrAuthPage) {
    if (!user && !hasHrSession && !hasCompanyQuery) {
      const authUrl = request.nextUrl.clone()
      authUrl.pathname = '/hr/auth'
      return NextResponse.redirect(authUrl)
    }
    return supabaseResponse
  }

  const isDashboardRoute = request.nextUrl.pathname.startsWith('/dashboard') || request.nextUrl.pathname.startsWith('/compliance')

  if (isDashboardRoute) {
    if (!user) {
      const loginUrl = request.nextUrl.clone()
      loginUrl.pathname = '/login'
      return NextResponse.redirect(loginUrl)
    }

    // Check email verification
    if (!user.email_confirmed_at) {
      const verifyUrl = request.nextUrl.clone()
      verifyUrl.pathname = '/verify'
      return NextResponse.redirect(verifyUrl)
    }

    // Check product access
    const { data: profile } = await supabase
      .from('user_profiles')
      .select('products, role')
      .eq('id', user.id)
      .single()

    const products = (profile?.products as string[]) || [];
    const isStaff = profile?.role === 'trustline_staff';

    // Staff can access everything
    if (!isStaff) {
      if (request.nextUrl.pathname.startsWith('/hr') && !products.includes('hr')) {
        const redirectUrl = request.nextUrl.clone()
        redirectUrl.pathname = products.includes('compliance') ? '/compliance' : '/dashboard'
        return NextResponse.redirect(redirectUrl)
      }

      if (request.nextUrl.pathname.startsWith('/compliance') && !products.includes('compliance')) {
        const redirectUrl = request.nextUrl.clone()
        redirectUrl.pathname = products.includes('hr') ? '/hr' : '/dashboard'
        return NextResponse.redirect(redirectUrl)
      }
    }
  }

  return supabaseResponse
}
