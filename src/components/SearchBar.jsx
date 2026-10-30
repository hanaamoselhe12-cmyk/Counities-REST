import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { IoMdSearch } from "react-icons/io";

function SearchBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
           
            
            <NavDropdown title="Fiter By Region" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Africe</NavDropdown.Item>
              <NavDropdown.Item href="#action4"> Asia</NavDropdown.Item>
              <NavDropdown.Item href="#action5"> Americe</NavDropdown.Item>
              <NavDropdown.Item href="#action6">Europe</NavDropdown.Item>
              <NavDropdown.Item href="#action7">Oceania</NavDropdown.Item>
            
              
            </NavDropdown>
          
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search For Country....."
              className="me-2"
              aria-label="Search"
              
            />
            <Button variant="outline-success">Search<IoMdSearch /></Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default SearchBar;


