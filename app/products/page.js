// import { cookies } from 'next/dist/client/components/headers';
// import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '../../database/products';
import styles from './page.module.scss';

export const metadata = {
  title: 'Products',
  description: 'All products',
};
export default function ProductsPage() {
  // const allCookies = cookies().getAll();
  // console.log(allCookies);
  return (
    <main className={styles.main}>
      <section className={styles.productsContainer}>
        {products.map((product) => {
          return (
            <div key={`product-div-${product.id}`}>
              <Image
                src={`/images/${product.name}.jpg`}
                width={172}
                height={343}
              />
              <br />
              <Link
                href={`/products/${product.id}`}
                data-test-id="product-<product id>"
              >
                {product.name}
              </Link>
            </div>
          );
        })}
      </section>
    </main>
  );
}
