import styles from './page.module.scss';

export default function thankYouPage() {
  return (
    <main className={styles.thankYou}>
      <h1>Thank you for your order</h1>
      <div>
        <p>Thank you for letting us handle your Dreams!</p>
      </div>
    </main>
  );
}
