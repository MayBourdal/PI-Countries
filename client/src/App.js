import './App.css';
import Countries from './components/countries';
import SearchBar from './components/searchBar';
import Order from './components/order';

function App() {
  return (
    <div className="App">
      <SearchBar />
      <Order />
      <Countries />
    </div>
  );
}

export default App;
