import './header.css';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header-top">
      <Link to="/" className="nav-link active">
        <header>
          <h1 className="titleMarvel">MARVEL</h1>
          <h2>comics</h2>
        </header>
      </Link>
      <Navbar />
    </div>
  );
}

export default Header;
