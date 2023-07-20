import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import './App.css';
import Comics from './components/Comics';
import Header from './components/layout/Body/Header';
import Creators from './components/Creators';
import Characters from './components/Characters';
import PageMarvelPrincipalList from './components/PageMarvelPrincipalList';
import Footer from './components/layout/Body/Footer';
import PageMarvelDetailList from './components/PageMarvelDetailList';
import NotFoundPage from './components/layout/Error/404';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        {/* <Route path="/comics" element={<Comics/>}/>
            <Route path="/creators" element={<Creators/>}/>
            <Route path="/characters" element={<Characters/>}/> */}

        <Route
          path="/comics"
          element={<PageMarvelPrincipalList principalList="comics" />}
        />
        <Route
          path="/creators"
          element={<PageMarvelPrincipalList principalList="creators" />}
        />
        <Route
          path="/characters"
          element={<PageMarvelPrincipalList principalList="characters" />}
        />

        <Route
          path="/events"
          element={<PageMarvelPrincipalList principalList="events" />}
        />
        <Route
          path="/series"
          element={<PageMarvelPrincipalList principalList="series" />}
        />
        <Route
          path="/stories"
          element={<PageMarvelPrincipalList principalList="stories" />}
        />

        <Route path="/" element={<Navigate to="/comics" />} />

        <Route
          path="/:namePage/detail/:id"
          element={<PageMarvelDetailList />}
        />

        <Route path="/404" element={<NotFoundPage />}></Route>
        <Route path="*" element={<Navigate to="/404" />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
