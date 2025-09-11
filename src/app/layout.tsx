import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://viteach-website-ten.vercel.app'), // update to your canonical domain
  title: {
    default: 'VITeach',
    template: '%s | VITeach',
  },
  description: 'Celebrating 10+ years of inspiring students…',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: 'https://viteach-website-ten.vercel.app',
    siteName: 'VITeach',
    title: 'VITeach',
    description: 'Celebrating 10+ years of inspiring students…',
    images: [
      { url: '/root/image-1.jpg', width: 1200, height: 630, alt: 'VITeach' },
    ],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <div className="py-5 bg-red-50">
          <div className="mx-auto max-w-6xl">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
