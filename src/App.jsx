import { Redirect, Route, BrowserRouter as Router, Switch, useRouteMatch } from 'react-router-dom';
import './App.css';
import { Navigation } from './Components/Navigation/Navigation';
import { AnimalDetails } from './Sites/AnimalDetails/AnimalDetails';
import { AnimalList } from './Sites/AnimalList/AnimalList';
import { Frontpage } from './Sites/Frontpage/Frontpage';

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/Forside">
          <Navigation />
          <Frontpage />
        </Route>

        <Route exact path="/Dyrene">
          <Navigation />
          <AnimalList />
        </Route>

        <Route exact path={`/Dyrene/:animalId`}>
            <AnimalDetails />
        </Route>

        <Route exact path="/Kontakt">
          <Navigation />
        </Route>

        <Route exact path="/">
          <Redirect to="/Forside" />
        </Route>

        <Route path="/">
          <p>Denne side findes ikke</p>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
