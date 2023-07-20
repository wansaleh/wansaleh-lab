import { Inter as Sans } from 'next/font/google';

import globalMetadata from './metadata';
import Providers from './providers';

import './globals.css';

import { cn } from '@/lib/utils';
import Footer from '@/components/footer';
import MouseProvider from '@/components/mouse-provider';
import Nav from '@/components/nav';
import { TailwindIndicator } from '@/components/tailwind-indicator';

export const metadata = globalMetadata;

const fontSans = Sans({
  preload: true,
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn(fontSans.variable)} suppressHydrationWarning>
      <head />
      <body>
        <Providers>
          <Nav />
          <main>{children}</main>
          <Footer />
        </Providers>
        <MouseProvider />
        <TailwindIndicator />
      </body>
    </html>
  );
}
