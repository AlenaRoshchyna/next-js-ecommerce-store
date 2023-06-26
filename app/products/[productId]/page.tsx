import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProductById } from '../../../database/products';
import styles from './page.module.scss';
import ProductQuantityForm from './ProductQuantityForm';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Explore the dream',
  description: 'Products',
};

type Props = {
  params: {
    productId: string;
  };
};

export default async function ProductPage(props: Props) {
  const singleProduct = await getProductById(Number(props.params.productId)); // Convert the string into a number

  if (!singleProduct) {
    notFound();
  }

  return (
    <main className={styles.productPage}>
      <Image
        data-test-id="product-image"
        src={`/images/${singleProduct.name}.jpg`}
        alt="picture of the dream"
        width={286}
        height={571}
      />
      <h1>{singleProduct.name}</h1>
      <h5>{singleProduct.description}</h5>
      <h6 data-test-id="product-price">Price: {singleProduct.price}</h6>
      <p>Quantity</p>
      <div>
        <ProductQuantityForm productId={singleProduct.id} />
      </div>
      {/* <p>Use your dreams carefully!</p> */}
    </main>
  );
}
