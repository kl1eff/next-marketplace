import './globals.scss';
import { Inter } from 'next/font/google';
import Header from '@/components/header/Header';
import ProviderWrapper from '@/components/providerWrapper/ProviderWrapper';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ClickHead shop',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <ProviderWrapper children={<main>{children}</main>} />
      </body>
    </html>
  );
}