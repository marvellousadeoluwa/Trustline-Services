import { cookies } from 'next/headers';

const ADMIN_COOKIE = 'admin_session';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || '';

export function getAdminPassword(): string {
  return ADMIN_PASSWORD;
}

export function isAdminAuthConfigured(): boolean {
  return Boolean(ADMIN_PASSWORD);
}

export async function setAdminSession(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.set(ADMIN_COOKIE, '1', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24, // 24h
    path: '/',
  });
}

export async function clearAdminSession(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(ADMIN_COOKIE);
}

export async function hasAdminSession(): Promise<boolean> {
  if (!isAdminAuthConfigured()) return false;
  const cookieStore = await cookies();
  const session = cookieStore.get(ADMIN_COOKIE);
  return session?.value === '1';
}
