import styles from './page.module.css';
// import { Navbar } from '@org/shared-ui';

export default function Index() {
  return (
    <div className={styles.page}>
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <h1>
              <span>Homsphere </span>
              Admin
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
