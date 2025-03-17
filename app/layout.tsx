import { type ReactNode } from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { RootLayout } from '@shared/components/root-layout';
import { I18nProvider } from '@shared/providers/i18n-provider';
import { ThemeProvider } from '@shared/providers/theme-provider';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Logistic',
  description: 'Logistic management system',
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <I18nProvider>
          <ThemeProvider>
            <RootLayout>{children}</RootLayout>
          </ThemeProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
