import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import ScrollComponent from '@/components/layout/Scroll';
import type { Metadata } from 'next';
import { twMerge } from 'tailwind-merge';
import { montserrat, nexaTrial } from '../assets/font';
import '../assets/styles/globals.scss';

export const metadata: Metadata = {
  title: 'TechVSI',
  description: 'TechVSI Thankgiving!',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={twMerge(montserrat.variable, nexaTrial.variable)}>
      <body>
        <Header />
        <main className="flex min-h-screen flex-col items-center justify-between container mx-auto pt-[120px]">
          {children}
          <ScrollComponent />
          <Footer />
        </main>
      </body>
    </html>
  );
}
