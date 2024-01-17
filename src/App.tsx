import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';
import Create from './pages/Create';
import Home from './pages/Home';

function App() {
  return (
    <Router>
    <Switch>
      <Route exact path="/"> <Home/> </Route>
      <Route exact path="/create"> <Create/> </Route>
    </Switch>
  </Router>
  );
}

export default App;
