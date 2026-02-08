import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Oxycons",
  description:
    "A comprehensive, categorized React icon library. Sharp. Dark. Ready.",
  icons: {
    icon: [
      { url: "/logo.svg", type: "image/svg+xml" },
      { url: "/logo.png", type: "image/png" },
    ],
    apple: "/logo.png",
    shortcut: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geist.variable} ${geistMono.variable} font-sans antialiased bg-[#0a0a0a] text-zinc-100 min-h-screen`}
      >
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800/80 bg-[#0a0a0a]/90 backdrop-blur-sm">
          <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
            <Link
              href="/"
              className="text-lg font-semibold tracking-tight text-white hover:text-zinc-300 transition-colors"
            >
              <img src="/wordmark.svg" alt="Oxycons" className="h-5 w-auto" />
            </Link>
            <nav className="flex items-center gap-8">
              <Link
                href="/icons"
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
              >
                Browse Icons
              </Link>
              <a
                href="https://www.npmjs.com/package/@onimuxha/oxycons"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
              >
                npm
              </a>
            </nav>
          </div>
        </header>
        <main className="pt-14">{children}</main>
      </body>
    </html>
  );
}
