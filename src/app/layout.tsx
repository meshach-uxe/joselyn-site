import type { Metadata } from 'next';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  title: 'Joslyn Divine Foundation',
  description:
    'Empowering the future of Sierra Leone through dignity, education, and holistic care.',
  icons: {
    icon: '/Logo/Logo Mark/Orange.png',
    apple: '/Logo/Logo Mark/Orange.png',
  },
  openGraph: {
    title: 'Joslyn Divine Foundation',
    description: 'Empowering the future of Sierra Leone through dignity, education, and holistic care.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
