import logo from './logo.svg';
import './App.css';
import Main from './componets/Main';
import Results from './container/Results';
import Search from './container/Search'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contact from './componets/Contact';
import NavBar from './componets/NavBar';


function App() {
  return (
    <div className="App">
      <Router>
     <NavBar />
      <Switch>
      <Route exact path='/main' component={Main} />;
      <Route path='/search' component={Search} />;
      <Route path='/results' component={Results} />;
      <Route path='/contact' component={Contact} />;
    <Route path='*'  render={() =>{ return <div> <h1> 404 Not found</h1></div>}}/>
    </Switch >
    </Router>
    </div>
  );
}

export default App;
