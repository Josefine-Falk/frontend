import { Redirect, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/Forside"></Route>

        <Route exact path="/Dyrene"></Route>

        <Route exact path="/Kontakt"></Route>

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
