import { Link } from 'react-router-dom';
import './Navbar.scss';

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__item">
          <Link to="/" className="navbar__link">Olli Suominen</Link>
        </li>
        <li className="navbar__item">
          <Link to="/photos" className="navbar__link">Photo & Video</Link>
        </li>
        <li className="navbar__item">
          <Link to="/software" className="navbar__link">Software</Link>
        </li>
        <li className="navbar__item">
          <Link to="/contact" className="navbar__link">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
