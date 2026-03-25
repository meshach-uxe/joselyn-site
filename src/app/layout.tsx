import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Kindness',
  description:
    'The World Needs More Kindmakers. Every day, the world reminds us how much kindness matters. ' +
    'It\'s time to turn empathy into action and hope into change.',
  openGraph: {
    title: 'Kindness',
    description: 'The World Needs More Kindmakers.',
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
      <body>{children}</body>
    </html>
  );
}
