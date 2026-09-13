import "../Styles/Navbar.css";
import { Link } from "react-router-dom";
import logo from '../assets/logo.jpg';

function Nav() {
  return (
    <>
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt='Wemade logo'></img>
        <p>Wemade</p>
      </div>
      <ul className="navbar-links">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/resume">Resume</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/certificates">Certificates</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      </nav>
    </>
  );
}

export default Nav;