import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';

export const metaData: Metadata = {
  title: {
    template: '%s | Next Dash',
    default: 'Next Dash',
  },
  description: 'Next.js Course Dashboard built with App Router',
  metadataBase: new URL('http://nexih.vercel.app'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
