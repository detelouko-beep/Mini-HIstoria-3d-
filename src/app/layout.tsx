import type { Metadata } from 'next';
import { AuthProvider } from '@/contexts/AuthContext';
import { SITE_CONFIG } from '@/constants';
import './globals.css';

export const metadata: Metadata = {
  title: SITE_CONFIG.name,
  description: SITE_CONFIG.description,
  keywords: SITE_CONFIG.keywords,
  authors: [{ name: SITE_CONFIG.author }],
  openGraph: {
    type: 'website',
    locale: SITE_CONFIG.locale,
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#9333ea" />
        {process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID && (
          <meta
            name="google-adsense-account"
            content={`ca-pub-${process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID}`}
          />
        )}
      </head>
      <body className="bg-neutral-950 text-neutral-50">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
