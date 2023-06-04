// import { cookies } from 'next/dist/client/components/headers';
// import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { getProducts, products } from '../../database/products';
import styles from './page.module.scss';

export const metadata = {
  title: 'Dreams to buy',
  description: 'Products',
};

export default async function ProductsPage() {
  const products = await getProducts();
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
