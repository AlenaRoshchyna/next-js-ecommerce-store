'use client';

import { useRouter } from 'next/navigation';
import styles from './page.module.scss';

export default function CheckOutFormPage() {
  const router = useRouter();
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    router.push('cart/checkout/thankYou');
  };

  return (
    <section>
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit}>
        <label className={styles.label}>
          First Name:
          <input
            className={styles.input}
            data-test-id="checkout-first-name"
            required
          />
        </label>
        <label className={styles.label}>
          Last Name:
          <input
            className={styles.input}
            data-test-id="checkout-last-name"
            required
          />
        </label>
        <label className={styles.label}>
          Email:
          <input
            className={styles.input}
            data-test-id="checkout-email"
            required
          />
        </label>
        <label className={styles.label}>
          Adress:
          <input
            className={styles.input}
            data-test-id="checkout-address"
            required
          />
        </label>
        <label className={styles.label}>
          City:
          <input
            className={styles.input}
            data-test-id="checkout-city"
            required
          />
        </label>
        <label className={styles.label}>
          Postal code:
          <input
            className={styles.input}
            data-test-id="checkout-postal-code"
            required
          />
        </label>
        <label className={styles.label}>
          Country:
          <input
            className={styles.input}
            data-test-id="checkout-country"
            required
          />
        </label>
        <label className={styles.label}>
          Credit card:
          <input
            className={styles.input}
            data-test-id="checkout-credit-card"
            required
          />
        </label>
        <label className={styles.label}>
          Expiration date:
          <input
            className={styles.input}
            data-test-id="checkout-expiration-date"
            required
          />
        </label>
        <label className={styles.label}>
          Security code:
          <input
            className={styles.input}
            data-test-id="checkout-security-code"
            required
          />
        </label>

        <button data-test-id="checkout-confirm-order">Confirm Order</button>
      </form>
    </section>
  );
}
