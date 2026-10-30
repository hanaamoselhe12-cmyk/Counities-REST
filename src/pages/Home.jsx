import SearchBar from '../components/SearchBar';
import ContryCard from '../components/CoyntryCard';
import countries from '../../data.json';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {

  const firstEightCountries = countries.slice(0, 16);

  return (
    <Container className="py-4">
      <SearchBar />

      
      <Row className="mt-4 g-4">
        {firstEightCountries.map((country) => (
         
          <Col key={country.alpha3Code} xs={12} sm={6} md={4} lg={3}>
            <ContryCard country={country} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;