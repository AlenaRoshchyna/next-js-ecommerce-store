import './globals.scss';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { FaOpencart } from 'react-icons/fa';
import logo from '../public/logo.png';
import CartNumberProduct from './components/CartNumberProducts';
import { CookieBanner } from './components/CookieBanner';
import styles from './layout.module.scss';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={styles.body}>
        <CookieBanner />
        <header className={styles.header}>
          <nav className={styles.navbar}>
            <div>
              <Image src={logo} width={50} height={50} alt="logo" />
            </div>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/products">Products</Link>
              </li>
              <li>
                <Link href="/cart">
                  {' '}
                  <FaOpencart /> <CartNumberProduct />
                </Link>
              </li>
            </ul>
            {/* {Math.floor(Math.random() * 10)} */}
          </nav>
        </header>

        <main>{children}</main>
      </body>
    </html>
  );
}
