import './App.css';
import CountryDetails from './components/countryDetails';
import { Route, Switch } from 'react-router';
import  AddActivities  from './components/addActivities';
import LandingPage from './components/landingPage';
import Home from './components/Home';
import { useEffect } from "react"
import { useDispatch, } from "react-redux"
import { fetchActivity, fetchCountry } from './store/action';


function App() {
  let dispatch = useDispatch()

  useEffect (() => {
    dispatch(fetchCountry(), fetchActivity())
}, [dispatch])

  return (
    <div className="App">
          
      <Switch>
        <Route path='/add'>
          <AddActivities />
        </Route>
        <Route path='/id/:id'>
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
