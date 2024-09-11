import styles from './page.module.css';

export default function Index() {
  return (
    <div className={styles.page}>
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <h1>
              <span> Homsphere </span>
              Login
            </h1>
          </div>
          <div>
            <a href="/api/auth/login">Login</a>
          </div>
        </div>
      </div>
    </div>
  );
}
