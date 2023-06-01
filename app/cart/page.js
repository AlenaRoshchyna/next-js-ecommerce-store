import Image from 'next/image';
import { getProductById } from '../../database/products';
// import { getCookie } from '../../util/cookies';
// import { parseJson } from '../../util/json';
import { getQuantity } from '../products/[productId]/actions';
import ChangeQuantityItem from './ChangeQuantityItem';
import DeleteItems from './DeleteItems';
import styles from './page.module.scss';

export default async function CartPage() {
  const productQuantity = await getQuantity();

  const productInCart = await Promise.all(
    productQuantity.map(async (item) => {
      // item is my product in cokies
      const matchingProduct = await getProductById(Number(item.id));

      return {
        ...matchingProduct,
        quantity: item.quantity,
      };
    }),
  );

  return (
    <main>
      <section className={styles.cartPage}>
        {productInCart.map((product) => {
          console.log(product);
          return (
            <div key={`product-${product.id}`} className={styles.productCart}>
              <Image
                alt=""
                src={`/images/${product.name}.jpg`}
                width={250}
                height={250}
              />
              <div>{product.name}</div>
              <div>{product.price}</div>

              <form>
                <ChangeQuantityItem product={product} />
              </form>

              <form>
                <DeleteItems product={product} />
              </form>
            </div>
          );
        })}
      </section>
    </main>
  );
}
