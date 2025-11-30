import { Link } from 'react-router-dom';
import './Navbar.scss';

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__item">
          <Link to="/" className="navbar__link">Frontpage</Link>
        </li>
        <li className="navbar__item">
          <Link to="/photo" className="navbar__link">Photo</Link>
        </li>
        <li className="navbar__item">
          <Link to="/video" className="navbar__link">Video</Link>
        </li>
        <li className="navbar__item">
          <Link to="/software" className="navbar__link">Software</Link>
        </li>
      </ul>
    </nav>
  );
}
