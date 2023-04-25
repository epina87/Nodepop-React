import { useState } from 'react';
import './App.css';
import AdvertsPage from './components/adverts/AdvertsPage';
import LoginPage from './components/auth/LoginPage';
import NewAdvertPage from './components/adverts/NewAdvertPage';
import { Navigate, Route, Routes } from 'react-router-dom';
import NotFoundPage from './components/adverts/NotFound/NotFoundPage';
import AdvertPage from './components/adverts/AdvertPage';
import RequireAuth from './components/auth/RequireAuth';

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
      <Routes>
        <Route
          path="/login"
          element={<LoginPage onLogin={handleLogin} />}
        ></Route>

        <Route
          path="/adverts"
          element={
            <RequireAuth isLogged={isLogged}>
              <AdvertsPage onLogout={handleLogout} isLogged={isLogged} />
            </RequireAuth>
          }
        />

        <Route
          path="/adverts/new"
          element={ 
                <RequireAuth isLogged={isLogged}>
                  <NewAdvertPage onLogout={handleLogout} isLogged={isLogged} />
                </RequireAuth>
          }
        />

        <Route
          path="/adverts/:id"
          element={
            <RequireAuth isLogged={isLogged}>
              <AdvertPage onLogout={handleLogout} isLogged={isLogged} />
            </RequireAuth>
          }
        />

        <Route path="/404" element={<NotFoundPage />}></Route>

        <Route path="*" element={<Navigate to="/404" />}></Route>

        <Route path="/" element={<Navigate to="/adverts" />} />
      </Routes>
    </div>
  );
}

export default App;
