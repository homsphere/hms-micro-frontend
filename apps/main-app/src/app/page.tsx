import Link from 'next/link';
import './page.css';

export default function Home() {
  return (
    <div className="container">
      <h1>Main App</h1>
      <nav className="nav-container">
        <ul className="nav-list">
          <li className="nav-item">
            <Link href="/sub-app-1">Go to Sub App 1</Link>
          </li>
          <li className="nav-item">
            <Link href="/sub-app-2">Go to Sub App 2</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
