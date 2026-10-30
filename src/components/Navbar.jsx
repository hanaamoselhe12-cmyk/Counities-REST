import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { CiDark, CiSun } from "react-icons/ci"; 

function Navs({ darkMode, toggleDarkMode }) {
  return (
    <Navbar className={darkMode ? 'bg-secondary text-white shadow-sm py-3' : 'bg-white text-dark shadow-sm py-3'}>
      <Container>
        <Navbar.Brand href="#home" className={`fw-bold ${darkMode ? 'text-white' : 'text-dark'}`}>
          Where in the world?
        </Navbar.Brand>
        
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          
          <Navbar.Text 
            className={`fw-semibold ${darkMode ? 'text-white' : 'text-dark'}`} 
            style={{ cursor: 'pointer', userSelect: 'none' }}
            onClick={toggleDarkMode}
          >
          
            {darkMode ? (
              <>
                <CiSun className="me-2 fs-5" /> Light Mode
              </>
            ) : (
              <>
                <CiDark className="me-2 fs-5" /> Dark Mode
              </>
            )}
          </Navbar.Text>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navs;