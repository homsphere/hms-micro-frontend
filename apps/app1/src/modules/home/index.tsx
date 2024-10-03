'use client';

import styles from './page.module.css';
import { useUser } from '@auth0/nextjs-auth0/client';
// import { Navbar } from '@org/shared-ui';

export default function Home() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

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
          {user && (
            <div>
              <h2>{user.name}</h2>
              <p>{user.email}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
