import styles from './page.module.scss';

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
