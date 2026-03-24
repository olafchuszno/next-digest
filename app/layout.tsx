import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Digest App Title',
  description: 'Digest App Description',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="mb-8 flex gap-2">
          <Link className="bordered" href={'/'}>
            {'<'} Home
          </Link>
          <Link
            prefetch
            className="bordered"
            href={'https://next-digest-cache-components.vercel.app/'}
          >
            Cache Components (true)
          </Link>
        </header>
        {children}
      </body>
    </html>
  );
}
