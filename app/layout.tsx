import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';

const geist = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'goHighTech — Android, iOS & Web App Development Agency',
  description:
    'goHighTech is a full-service IT agency in Pune, India specializing in Android, iOS, and web application development. Build. Launch. Dominate.',
  keywords: [
    'android app development',
    'iOS app development',
    'web app development',
    'React Native',
    'Next.js',
    'IT agency Pune',
    'mobile app development India',
    'goHighTech',
  ],
  authors: [{ name: 'Arjun More', url: 'https://gohightech.in' }],
  creator: 'goHighTech',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://gohightech.in',
    siteName: 'goHighTech',
    title: 'goHighTech — Android, iOS & Web App Development Agency',
    description:
      'We craft premium Android, iOS & Web applications that scale with your business. Based in Pune, India.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'goHighTech — Android, iOS & Web App Development Agency',
    description: 'We craft premium Android, iOS & Web applications that scale with your business.',
    creator: '@gohightech',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-[#080810] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
