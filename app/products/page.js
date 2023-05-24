// import { cookies } from 'next/dist/client/components/headers';
// import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '../../database/products';

export const metadata = {
  title: 'Products',
  description: 'All products',
};
export default function ProductsPage() {
  // const allCookies = cookies().getAll();
  // console.log(allCookies);
  return (
    <main>
      These are the products
      {products.map((product) => {
        return (
          <div key={`product-div-${product.id}`}>
            <Link
              href={`/products/${product.id}`}
              data-test-id="product-<product id>"
            >
              {product.name}
            </Link>
            <br />
            <Image
              src={`/images/${product.name}.jpg`}
              width={100}
              height={100}
            />
          </div>
        );
      })}
    </main>
  );
}
