import styles from './page.module.css';

export default function Index() {
  return (
    <div className={styles.page}>
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <h1>
              <span> Homsphere </span>
              Dashboard
            </h1>
          </div>
          <div>
            <ul>
              <li>
                <a href="/app1">Supervisor</a>
              </li>
              <li>
                <a href="/app2">Admin</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
