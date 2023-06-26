import styles from './page.module.scss';

export const metadata = {
  title: 'Thank you for your order',
  description: 'We are building dreams for you',
};

export default function thankyouPage() {
  return (
    <main className={styles.main}>
      <h1>Thank you for your order</h1>
      <div>
        <p>Thank you for letting us handle your Dreams!</p>
      </div>
    </main>
  );
}
