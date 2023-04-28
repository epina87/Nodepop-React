import { logout } from '../auth/service';
import './style/Header.css';
import './style/Button.css';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/context';
import { getMe } from '../adverts/service';

const Header = () => {
  const { isLogged, onLogout } = useAuth();

  const navigate = useNavigate();
  const handleLogoutClick = async () => {
    await logout();
    onLogout();
  };


const itsMe=async()=>{
    try {
        await getMe();
    } catch (error) {
        if (error.status===401){
            navigate('/login');
        }     
    }

}
  

  const goLogin = () => {
    navigate('/login');
  };

  itsMe()

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
      </nav>
      <div>
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
      </div>
    </header>
  );
};

export default Header;
