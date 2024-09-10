import styles from './page.module.css';

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
          {/* <div>
            <ul>
              <li>
                <a href="/app1/about">About</a>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </div>
  );
}
