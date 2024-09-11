// import styles from './shared-ui.module.css';

export function NavBar() {
  return (
    <nav>
      <ul style={{ listStyle: 'none', margin: 10, padding: 0, display: 'flex', gap: '10px' }}>
        <li>
          <a href="/" style={{ textDecoration: 'none' }}>
            Dashboard
          </a>
        </li>
        <li>
          <a href="/app1" style={{ textDecoration: 'none' }}>
            Supervisor
          </a>
        </li>
        <li>
          <a href="/app2" style={{ textDecoration: 'none' }}>
            Admin
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
