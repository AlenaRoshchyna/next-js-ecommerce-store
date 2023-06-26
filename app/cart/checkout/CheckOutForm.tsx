'use client';

import { useRouter } from 'next/navigation';
import { clearCookies } from '../actions';
import styles from './page.module.scss';

export default function CheckOutFormPage() {
  const router = useRouter();
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    await clearCookies();
    router.push('/cart/checkout/thankyou');
    router.refresh();
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
        <dt />
        <label className={styles.label}>
          Last Name:
          <input
            className={styles.input}
            data-test-id="checkout-last-name"
            required
          />
        </label>
        <dt />
        <label className={styles.label}>
          Email:
          <input
            className={styles.input}
            data-test-id="checkout-email"
            required
          />
        </label>
        <dt />
        <label className={styles.label}>
          Adress:
          <input
            className={styles.input}
            data-test-id="checkout-address"
            required
          />
        </label>
        <dt />
        <label className={styles.label}>
          City:
          <input
            className={styles.input}
            data-test-id="checkout-city"
            required
          />
        </label>
        <dt />
        <label className={styles.label}>
          Postal code:
          <input
            className={styles.input}
            data-test-id="checkout-postal-code"
            required
          />
        </label>
        <dt />
        <label className={styles.label}>
          Country:
          <input
            className={styles.input}
            data-test-id="checkout-country"
            required
          />
        </label>
        <dt />
        <label className={styles.label}>
          Credit card:
          <input
            className={styles.input}
            data-test-id="checkout-credit-card"
            required
          />
        </label>
        <dt />
        <label className={styles.label}>
          Expiration date:
          <input
            className={styles.input}
            data-test-id="checkout-expiration-date"
            required
          />
        </label>
        <dt />
        <label className={styles.label}>
          Security code:
          <input
            className={styles.input}
            data-test-id="checkout-security-code"
            required
          />
        </label>
        <dt />

        <button data-test-id="checkout-confirm-order">Confirm Order</button>
      </form>
    </section>
  );
}
