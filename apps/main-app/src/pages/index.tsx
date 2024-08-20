import styles from './index.module.css';

function Index() {
  return (
    <div className={styles.container}>
      <h1>Main App</h1>
      <nav className={styles.navContainer}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <a href="/sub-app-1">Go to Sub App 1</a>
          </li>
          <li className={styles.navItem}>
            <a href="/sub-app-2">Go to Sub App 2</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Index;
