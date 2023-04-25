import { logout } from '../auth/service';
import './style/Header.css';
import './style/Button.css';
import { Link, NavLink, useNavigate } from 'react-router-dom';

const Header = ({ isLogged, onLogout }) => {
  const navigate = useNavigate();
  const handleLogoutClick = async () => {
    await logout();
    onLogout();
  };

  const goLogin = () => {
    navigate('/login');
  };

  return (
    <header>
      <div>
        <Link to="/">
          <div className="logo"></div>
          <h1 className="texto">NODEPOP</h1>
        </Link>
      </div>

      <nav>
        <NavLink to="/adverts/new"> New Advert</NavLink>

        <NavLink to="/adverts"> See Adverts</NavLink>

        {isLogged ? (
          <button className="btn" onClick={handleLogoutClick}>
            Logout
          </button>
        ) : (
          <button className="btn" onClick={goLogin}>
            {' '}
            Login
          </button>
        )}
      </nav>
    </header>
  );
};

export default Header;
