import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navs from './components/Navbar';
import Home from './pages/Home';
import CountryDetails from './pages/CountryDetails';
import countries from '../data.json'; 

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className={darkMode ? 'bg-dark text-white min-vh-100' : 'bg-light text-dark min-vh-100'}>
        
        <Navs darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

        <div className="container mt-4">
          <Routes>
           
            <Route path="/" element={<Home  darkMode={darkMode}/>} />
            
           
            <Route path="/country/:name" element={<CountryDetails countries={countries} />} />
          </Routes>
        </div>

      </div>
    </Router>
  );
}

export default App;