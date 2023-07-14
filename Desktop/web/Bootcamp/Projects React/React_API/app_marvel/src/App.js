import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import './App.css';
import Comics from './components/Comics';
import Header from './components/layout/Header';
import Creators from './components/Creators';
import Characters from './components/Characters';
import PageMarvelPrincipalList from './components/PageMarvelPrincipalList';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="App">
        <Header />
       
        <Routes>
            
            {/* <Route path="/comics" element={<Comics/>}/>
            <Route path="/creators" element={<Creators/>}/>
            <Route path="/characters" element={<Characters/>}/> */}

            <Route path="/comics" element={<PageMarvelPrincipalList principalList="comics"/>}/>
            <Route path="/creators" element={<PageMarvelPrincipalList principalList="creators"/>}/>
            <Route path="/characters" element={<PageMarvelPrincipalList principalList="characters"/>}/>

            <Route path="/events" element={<PageMarvelPrincipalList principalList="events"/>}/>
            <Route path="/series" element={<PageMarvelPrincipalList principalList="series"/>}/>
            <Route path="/stories" element={<PageMarvelPrincipalList principalList="stories"/>}/>

            <Route path="/" element={<Navigate to="/comics" />} />

        </Routes> 
        
        <Footer/>





    </div>
  );
}

export default App;
