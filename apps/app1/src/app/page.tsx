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
              Supervisor
            </h1>
          </div>
          {/* <Navbar /> */}
          <div>
            <ul>
              <li>
                <a href="/supervisor/about">About</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
