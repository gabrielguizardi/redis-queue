import logo from './logo.svg';
import './App.css'; 
import 'tailwindcss/tailwind.css';
import Home from './pages/Home';
import Ticket from './pages/Ticket';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div class="box-border md:container md:mx-auto">
      <Router>
        <Switch>
          <Route path="/">
            <Home/>
          </Route>
          <Route path="/ticket">
            <Ticket />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
