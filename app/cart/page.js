import Image from 'next/image';
import Link from 'next/link';
import { getProductById } from '../../database/products';
import { getQuantity } from '../products/[productId]/actions';
import ChangeQuantityItem from './ChangeQuantityItem';
import DeleteItems from './DeleteItems';
import styles from './page.module.scss';

export const metadata = {
  title: 'Dreams',
  description: 'Enter the world of new dreams',
};

export default async function CartPage() {
  const productQuantity = await getQuantity();

  const productInCart = await Promise.all(
    productQuantity.map(async (item) => {
      // item is my product in cookies
      const matchingProduct = await getProductById(Number(item.id));

      return {
        ...matchingProduct,
        quantity: item.quantity,
      };
    }),
  );

  function calculateTotalPrice() {
    return productInCart.reduce(
      (total, item) => total + item.quantity * item.price,
      0,
    );
  }
  let subTotalProductPrice = 0;

  return (
    <main>
      <section className={styles.cartPage}>
        {productInCart.map((product) => {
          subTotalProductPrice = product.quantity * product.price;

          return (
            <div key={`product-${product.id}`} className={styles.productCart}>
              <Image
                alt=""
                src={`/images/${product.name}.jpg`}
                width={250}
                height={250}
              />
              <div>Name: {product.name}</div>
              <div>Price: {product.price}</div>
              <div>Subtotal price: {subTotalProductPrice}</div>

              {/* <div>{product.totalQuantity}</div> */}
              <form>
                <ChangeQuantityItem product={product} />
              </form>

              <form>
                <DeleteItems product={product} />
              </form>
            </div>
          );
        })}

        <div>
          Total price:
          <span data-test-id="cart-total">{calculateTotalPrice()}</span>
        </div>

        {/* <Link href="/cart/checkout/" data-test-id="cart-checkout">
          Checkout
        </Link> */}
      </section>
    </main>
  );
}
