// import styles from './shared-ui.module.css';

export function NavBar() {
  return (
    <nav>
      <ul style={{ listStyle: 'none', margin: 10, padding: 0, display: 'flex', gap: '10px' }}>
        <li>
          <a href="/dashboard" style={{ textDecoration: 'none' }}>
            Dashboard
          </a>
        </li>
        <li>
          <a href="/supervisor" style={{ textDecoration: 'none' }}>
            Supervisor
          </a>
        </li>
        <li>
          <a href="/admin" style={{ textDecoration: 'none' }}>
            Admin
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
