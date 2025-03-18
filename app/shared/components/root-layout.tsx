import { type ReactNode } from 'react';

import { Toaster } from '@ui/sonner';
import { cn } from '@utils/cn';

import { Header } from './header';

type RootLayoutProps = {
  children: ReactNode;
  className?: string;
};

export const RootLayout = ({ children, className }: RootLayoutProps) => {
  return (
    <div className={cn('bg-background container mx-auto min-h-screen', className)}>
      <Header />
      <main className="py-6">{children}</main>
      <Toaster />
    </div>
  );
};
