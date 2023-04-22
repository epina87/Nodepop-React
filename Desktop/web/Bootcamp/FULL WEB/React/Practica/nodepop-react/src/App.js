import { useState } from 'react';
import './App.css';
import AdvertsPage from './components/adverts/AdvertsPage';
import LoginPage from './components/auth/LoginPage';

function App({ isInitiallyLogged }) {
  const [isLogged, setIslogged] = useState(isInitiallyLogged);

  const handleLogin = () => {
    setIslogged(true);
  };

  const handleLogout = () => {
    setIslogged(false);
  };

  return (
    <div className="App">
      {isLogged ? (
        <AdvertsPage onLogout={handleLogout} />
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
