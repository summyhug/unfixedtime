import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Unfixedtime - Portfolio & Travel Blog',
  description: 'A portfolio showcasing sustainable projects and travel experiences',
  keywords: ['portfolio', 'sustainability', 'travel', 'photography'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}


