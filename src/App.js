import React, { useState, useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './styles/tailwind.css';
import Home from './Home/Home';
import Work from './Work/Work';
import Preloader from '../src/components/preloader'; // Import the Preloader component
import Weblearn from './components/Weblearn';
import Digitallearn from './components/Digitallearn';
import Sociallearn from './components/Sociallearn';
import Applearn from './components/Applearn';
import Brandlearn from './components/Brandlearn';
import Gamelearn from './components/Gamelearn';
import CaseStudies from './components/casestudy';
import './App.css'; // Import global CSS


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app-container">
      <div className="layout-container">
    <div className="App">
      {loading ? (
        <Preloader />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/Weblearn" element={<Weblearn/>}/>
            <Route path="/Digitallearn" element={<Digitallearn/>}/>
            <Route path="/Sociallearn" element={<Sociallearn/>}/>
            <Route path="/Applearn" element={<Applearn/>}/>
            <Route path="/Brandlearn" element={<Brandlearn/>}/>
            <Route path="/Gamelearn" element={<Gamelearn/>}/>
          </Routes>
        </BrowserRouter>
      )}
    </div>
    </div></div>
  );
}

export default App;
