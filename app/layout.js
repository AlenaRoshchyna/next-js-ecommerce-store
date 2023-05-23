import './globals.scss';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import AboutPage from './about/page';
import styles from './page.module.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className={styles.navbar}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/product">Product</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <main>{children}</main>
      </body>
    </html>
  );
}
