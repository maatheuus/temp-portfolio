import Nav from '@/src/components/UI/Nav';
import PageTransition from '@/src/components/UI/PageTransition';
import { AnimatePresence } from 'framer-motion';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Maat | Frontend Engineer',
    template: '%s | Maat Portfolio',
  },
  description:
    "I'm Maat, a frontend developer based in Brazil. I build performant, accessible, and modern web experiences.",
  keywords: [
    'frontend developer',
    'web developer',
    'React',
    'Next.js',
    'portfolio',
    'JavaScript',
    'TypeScript',
  ],
  authors: [
    {
      name: 'Maat',
      url: 'https://matheusmb.vercel.app',
    },
  ],
  openGraph: {
    title: 'Maat | Frontend Engineer',
    description:
      "I'm Maat, a frontend developer based in Brazil. I build performant, accessible, and modern web experiences.",
    url: 'https://matheusmb.vercel.app',
    siteName: 'Maat Portfolio',
    locale: 'br_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maat | Frontend Engineer',
    description:
      "I'm Maat, a frontend developer based in Brazil. I build performant, accessible, and modern web experiences.",
  },
  icons: {
    icon: '/icon.png',
    apple: '/apple-touch-icon.png',
  },
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
