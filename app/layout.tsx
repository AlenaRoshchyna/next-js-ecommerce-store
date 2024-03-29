import './globals.scss';
import Image from 'next/image';
import Link from 'next/link';
import { FaOpencart } from 'react-icons/fa';
import logo from '../public/logo.png';
import CartNumberProduct from './components/CartNumberProducts';
import { CookieBanner } from './components/CookieBanner';
import styles from './layout.module.scss';

export const metadata = {
  title: 'Dreams',
  description: 'Enter the world of new dreams',
};

type LayoutProps = {
  children: string;
};

export default function RootLayout({ children }: LayoutProps) {
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
                <Link href="/products" data-test-id="products-link">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/cart" data-test-id="cart-link">
                  {' '}
                  <FaOpencart /> <CartNumberProduct data-test-id="cart-count" />
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <main>{children}</main>
      </body>
    </html>
  );
}
