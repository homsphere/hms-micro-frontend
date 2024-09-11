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
                <a href="/supervisor">Supervisor</a>
              </li>
              <li>
                <a href="/admin">Admin</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
