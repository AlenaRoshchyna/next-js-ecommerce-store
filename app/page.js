import Image from 'next/legacy/image';
import dreamfaces from '../public/dreamfaces.png';
import styles from './page.module.scss';

export default function Home() {
  return (
    <main>
      <Image
        src={dreamfaces}
        objectFit="cover"
        layout="fill"
        objectPosition="center top"
        quality={100}
        alt="dream-faces"
      />
      <h1 className={styles.landingText}>Welcome to the store</h1>
    </main>
  );
}
