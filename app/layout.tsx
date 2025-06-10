import Nav from '@/src/components/UI/Nav';
import PageTransition from '@/src/components/UI/PageTransition';
import { AnimatePresence } from 'framer-motion';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Matheus | Frontend engineer',
  description: "I'm Matheus and I am a frontend developer based in Brasil",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-primary-black font-alice">
        <AnimatePresence mode="wait">
          <PageTransition>
            <main className="px-4 pb-32 pt-16 sm:pt-32">{children}</main>
          </PageTransition>
        </AnimatePresence>
        <Nav />
      </body>
    </html>
  );
}
