import type { Metadata } from 'next';
import Link from 'next/link';
import { Geist, Geist_Mono } from 'next/font/google';

import './globals.css';

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' });
const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
});

export const metadata: Metadata = {
  title: 'Oxycons',
  description: 'A comprehensive, categorized React icon library. Sharp. Dark. Ready.',
  metadataBase: new URL('https://oxycons.onrender.com'),

  icons: {
    icon: [
      { url: '/logo.svg', type: 'image/svg+xml' },
      { url: '/logo.png', type: 'image/png' },
    ],
    apple: '/logo.png',
    shortcut: '/logo.png',
  },

  openGraph: {
    title: 'Oxycons',
    description: 'A comprehensive, categorized React icon library. Sharp. Dark. Ready.',
    url: 'https://oxycons.onrender.com',
    siteName: 'Oxycons',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Oxycons - React Icon Library',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary',
    title: 'Oxycons',
    description: 'A comprehensive, categorized React icon library. Sharp. Dark. Ready.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='dark'>
      <body className={`${geist.variable} ${geistMono.variable} min-h-screen bg-[#0a0a0a] font-sans text-zinc-100 antialiased`}>
        <header className='fixed left-0 right-0 top-0 z-50 border-b border-zinc-800/80 bg-[#0a0a0a]/90 backdrop-blur-sm'>
          <div className='mx-auto flex h-14 items-center justify-between px-6'>
            <Link href='/' className='flex text-lg font-semibold tracking-tight text-white transition-colors hover:text-zinc-300'>
              <img src='/wordmark.svg' alt='Oxycons' className='h-5 w-auto' />
              {/* beta */}
              <p className='ml-2 text-xs text-zinc-500'>beta</p>
            </Link>
            <nav className='flex items-center gap-8'>
              <Link href='/icons' className='text-sm font-medium text-zinc-400 transition-colors hover:text-white'>
                Browse Icons
              </Link>
              <a
                href='https://www.npmjs.com/package/@onimuxha/oxycons'
                target='_blank'
                rel='noopener noreferrer'
                className='text-sm font-medium text-zinc-400 transition-colors hover:text-white'
              >
                npm
              </a>
            </nav>
          </div>
        </header>
        <main className='pt-14'>{children}</main>
      </body>
    </html>
  );
}
