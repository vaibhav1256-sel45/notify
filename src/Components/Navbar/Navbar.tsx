
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-logo">MyApp</div>
    <ul className="navbar-links">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/login">Login</Link></li>
      <li><Link to="/about">About Us</Link></li>
    </ul>
  </nav>
);

export default Navbar;
