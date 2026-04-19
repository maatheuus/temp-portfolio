import Nav from '@/src/components/UI/Nav';
import PageTransition from '@/src/components/UI/PageTransition';
import { AnimatePresence } from 'framer-motion';
import type { Metadata } from 'next';
import { ViewTransitions } from 'next-view-transitions';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Maat | Frontend Engineer & Web Developer',
    template: '%s | Maat',
  },
  description:
    'Frontend engineer from Brazil specializing in React, Next.js, and TypeScript. Building performant, accessible, and modern web experiences. View my portfolio and projects.',
  keywords: [
    'frontend developer',
    'web developer',
    'React developer',
    'Next.js developer',
    'TypeScript developer',
    'UI developer',
    'web designer',
    'portfolio',
    'JavaScript',
    'TypeScript',
    'web development',
    'software developer',
    'Brazil developer',
  ],
  authors: [
    {
      name: 'Matheus MB',
      url: 'https://maatmbx.dev',
    },
  ],
  creator: 'Matheus MB',
  publisher: 'Matheus MB',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Maat | Frontend Engineer & Web Developer',
    description:
      'Frontend engineer from Brazil specializing in React, Next.js, and TypeScript. View my portfolio and projects.',
    url: 'https://matheusmb.vercel.app',
    siteName: 'Maat Portfolio',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: './icon.png',
        width: 1200,
        height: 630,
        alt: 'Maat - Frontend Engineer Portfolio',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maat | Frontend Engineer & Web Developer',
    description:
      'Frontend engineer from Brazil specializing in React, Next.js, and TypeScript. View my portfolio and projects.',
    images: ['./icon.png'],
  },
  icons: {
    icon: '/icon.png',
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.ico',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: 'https://matheusmb.vercel.app',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Maat Portfolio',
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
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
    </ViewTransitions>
  );
}
