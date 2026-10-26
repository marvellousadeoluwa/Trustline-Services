import { ReactNode } from 'react';

// HR Center has its own full-screen layout — bypass the (app) parent layout
export default function HrLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
