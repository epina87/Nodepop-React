import { useState } from 'react';
import './App.css';
import AdvertsPage from './components/adverts/AdvertsPage';
import LoginPage from './components/auth/LoginPage';
import NewAdvertPage from './components/adverts/NewAdvertPage';
import { Navigate, Route, Routes } from 'react-router-dom';
import NotFoundPage from './components/adverts/NotFound/NotFoundPage';
import AdvertPage from './components/adverts/AdvertPage';
import RequireAuth from './components/auth/RequireAuth';
import { AuthContext } from './components/auth/context';

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
      <AuthContext.Provider value={{isLogged,onLogout:handleLogout, onLogin:handleLogin}}>
        <Routes>
          <Route
            path="/login"
            element={<LoginPage/>}
          ></Route>

          <Route
            path="/adverts"
            element={
              <RequireAuth>
                <AdvertsPage />
              </RequireAuth>
            }
          />

          <Route
            path="/adverts/new"
            element={
              <RequireAuth>
                <NewAdvertPage/>
              </RequireAuth>
            }
          />

          <Route
            path="/adverts/:id"
            element={
              <RequireAuth>
                <AdvertPage/>
              </RequireAuth>
            }
          />

          <Route path="/404" element={<NotFoundPage />}></Route>

          <Route path="*" element={<Navigate to="/404" />}></Route>

          <Route path="/" element={<Navigate to="/adverts" />} />
        </Routes>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
