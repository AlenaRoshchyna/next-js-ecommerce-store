import CheckOutFormPage from './CheckOutForm';
import styles from './page.module.scss';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Dreams - checkout',
  description: 'Enjoy the world of new dreams',
};

export default function CheckoutPage() {
  return (
    <main className={styles.main}>
      <CheckOutFormPage />
    </main>
  );
}
