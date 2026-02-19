import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Alex-Crystal Home',
  description: 'Alex-Crystal Home Site created by Webideya Team',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={`${inter.className} `}>{children}</body>
    </html>
  );
}
