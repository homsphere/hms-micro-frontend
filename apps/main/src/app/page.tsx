import Link from 'next/link';
import styles from './page.module.css';

export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div className={styles.page}>
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <h1>
              <span> Hello there, </span>
              Welcome main 👋
            </h1>
          </div>
          <div>
            <ul>
              <li>
                <Link href="/app1">Home (Multi Zones)</Link>
              </li>
              <li>
                <Link href="/app2">Docs</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
