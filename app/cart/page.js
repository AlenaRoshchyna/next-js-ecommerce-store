import Link from 'next/link';

// import styles from './cart.module.scss';

export default function CartPage() {
  return (
    <div>
      <div>Product</div>
      <div>Name</div>
      <div>Price</div>
      <div>Quantity</div>
      <div>Total</div>

      <h3>Cart Total</h3>
      <h2>00, 00</h2>
      <div>
        <Link href="/products">Continue Shopping</Link>
        <Link href="/checkout">Checkout</Link>
      </div>
    </div>
  );
}
