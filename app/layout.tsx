import Nav from '@/src/components/UI/Nav';
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
        <main className="px-4 pb-32 pt-16 sm:pt-32">{children}</main>
        <Nav />
      </body>
    </html>
  );
}
