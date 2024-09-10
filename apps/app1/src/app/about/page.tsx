import styles from './page.module.css';

export default function Index() {
  return (
    <div className={styles.page}>
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <h1>
              <span> Homsphere </span>
              Supervisor about
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
