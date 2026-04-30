import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const BASE_URL = 'https://www.mycnpservices.com';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'CNP Community Services | Empowering Individuals with Developmental Disabilities',
    template: '%s | CNP Community Services',
  },
  description:
    'CNP Community Services is a New Jersey nonprofit dedicated to supporting individuals with developmental disabilities through personalized care, vocational training, life skills, and community programs.',
  keywords: [
    'CNP Community Services',
    'developmental disabilities',
    'New Jersey',
    'DDD',
    'support brokerage',
    'life skills',
    'vocational training',
    'summer camp',
    'respite care',
    'West Orange NJ',
    'disability services NJ',
  ],
  authors: [{ name: 'CNP Community Services' }],
  creator: 'CNP Community Services',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: 'CNP Community Services',
    title: 'CNP Community Services | Empowering Individuals with Developmental Disabilities',
    description:
      'A New Jersey nonprofit supporting individuals with developmental disabilities through personalized care, vocational training, life skills, and community programs.',
    images: [
      {
        url: '/assets/logo.png',
        width: 1200,
        height: 630,
        alt: 'CNP Community Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CNP Community Services | Empowering Individuals with Developmental Disabilities',
    description:
      'A New Jersey nonprofit supporting individuals with developmental disabilities through personalized care, vocational training, life skills, and community programs.',
    images: ['/assets/logo.png'],
  },
  alternates: {
    canonical: BASE_URL,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col">
        <div id="google_translate_element" style={{ display: 'none' }} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Script id="google-translate-init" strategy="afterInteractive">
          {`
            function googleTranslateElementInit() {
              new google.translate.TranslateElement({
                pageLanguage: 'en',
                includedLanguages: 'en,es',
                autoDisplay: false
              }, 'google_translate_element');
            }
          `}
        </Script>
        <Script
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
