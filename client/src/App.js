import './App.css';
import CountryDetails from './components/countryDetails';
import { Route, Switch } from 'react-router';
import  AddActivities  from './components/addActivities';
import LandingPage from './components/landingPage';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
          
      <Switch>
        <Route path='/add'>
          <AddActivities />
        </Route>
        <Route path='/id'>
          <CountryDetails />
        </Route>
        <Route path='/home'>
          <Home />
        </Route>
        <Route exact path='/' >
          <LandingPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
