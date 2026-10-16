import { Suspense } from 'react';
import LoginForm from './LoginForm';

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-trust-blue/50">Loading...</div>}>
      <LoginForm />
    </Suspense>
  );
}
