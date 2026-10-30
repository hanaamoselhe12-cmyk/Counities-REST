import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'; // 1. استيراد Link

function ContryCard({ country }) {
  return (
    <Link to={`/country/${country.name}`} style={{ textDecoration: 'none' }}>
      <Card className="h-100 shadow-sm" style={{ cursor: 'pointer' }}>
       
        <Card.Img 
          variant="top" 
          src={country.flags.png || country.flags.svg} 
          alt={country.name}
          style={{ height: '150px', objectFit: 'cover' }} 
        />
        
        <Card.Body className="d-flex flex-column justify-content-between">
          <div>
            <Card.Title className="fs-5 fw-bold text-dark">{country.name}</Card.Title>
            
            <Card.Text as="div" className="mt-2 text-muted">
              <p className="mb-1"><strong>Population:</strong> {country.population?.toLocaleString()}</p>
              <p className="mb-1"><strong>Region:</strong> {country.region}</p>
              <p className="mb-1"><strong>Capital:</strong> {country.capital}</p>
            </Card.Text>
          </div>
        </Card.Body>
      </Card>
    </Link>
  );
}

export default ContryCard;