import { useParams, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function CountryDetails({ countries }) {
  const { name } = useParams();
  
  const country = countries.find(c => c.name === name);

  if (!country) {
    return <h2>Country not found!</h2>;
  }

  return (
    <div className="container mt-4">
   
      <Link to="/">
        <Button variant="light" className="mb-4 shadow-sm">
          &larr; Back
        </Button>
      </Link>

      <div className="row align-items-center">
       
        <div className="col-md-6 mb-4">
          <img 
            src={country.flags?.png || country.flag} 
            alt={country.name} 
            className="img-fluid shadow"
          />
        </div>

        <div className="col-md-6">
          <h2>{country.name}</h2>
          <div className="row mt-3">
            <div className="col-sm-6">
              <p><strong>Native Name:</strong> {country.nativeName}</p>
              <p><strong>Population:</strong> {country.population?.toLocaleString()}</p>
              <p><strong>Region:</strong> {country.region}</p>
              <p><strong>Sub Region:</strong> {country.subregion}</p>
              <p><strong>Capital:</strong> {country.capital}</p>
            </div>
            <div className="col-sm-6">
              <p><strong>Top Level Domain:</strong> {country.topLevelDomain}</p>
              <p><strong>Currencies:</strong> {country.currencies?.map(c => c.name).join(', ')}</p>
              <p><strong>Languages:</strong> {country.languages?.map(l => l.name).join(', ')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryDetails;