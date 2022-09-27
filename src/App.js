
import './App.css';
import Countries from './Components/Countries/Countries';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Countries></Countries>
      <Footer></Footer>


    </div>
  );
}















/* function LoadCountries() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.com/v2/all')
      .then(res => res.json())
      .then(data => setCountries(data))

  }, [])
  return (
    <div>
      <h1>Visiting Every Country of the Wold!!</h1>
      <h3>Available Countries: {countries.length}</h3>
      {
        countries.map(country => <Country name={country.name} capital={country.capital} flag={country.flag} region={country.region} population={country.population}></Country>)
      }
    </div>
  )
}

function Country(props) {
  return (
    <div>
      <img src={props.flag} alt="" />
      <h2>Name:{props.name}</h2>
      <h3>Capital: {props.capital}</h3>
      <h3>Region: {props.region}</h3>
      <h3>Population: {props.population}</h3>

    </div>
  )
} */

export default App;
