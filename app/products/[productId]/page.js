import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProductById } from '../../../database/products';
import ProductQuantityForm from './ProductQuantityForm';

export const dynamic = 'force-dynamic';
export default function ProductPage({ params }) {
  const singleProduct = getProductById(Number(params.productId)); // Convert the string into a number
  console.log(singleProduct);
  if (!singleProduct) {
    notFound();
  }
  return (
    <main>
      <Image
        data-test-id="product-image"
        src={`/images/${singleProduct.name}.jpg`}
        width={400}
        height={500}
      />
      <h1>{singleProduct.name}</h1>
      <h5>{singleProduct.description}</h5>
      <h6 data-test-id="product-price">{singleProduct.price}EUR</h6>
      <p>Quantity</p>
      <div>
        <ProductQuantityForm productId={singleProduct.id} />
      </div>
      <p>
        Care information ✿‿✿
        <br /> To ensure the longevity of your flowers, trim the stems at an
        angle and use a clean vase filled with fresh, cool water. Find a cool
        location for your flowers, away from direct sunlight. Regularly
        replenish the water to keep the stems submerged and remember to keep
        your floral arrangement out of reach from pets as certain flowers can be
        harmful to them.
      </p>
    </main>
  );
}
