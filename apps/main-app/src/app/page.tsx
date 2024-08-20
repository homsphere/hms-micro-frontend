import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Main App</h1>
      <nav className={styles.navContainer}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/sub-app-1">Go to Sub App 1</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/sub-app-2">Go to Sub App 2</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
