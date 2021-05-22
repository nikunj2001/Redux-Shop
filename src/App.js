import './App.css';
import {BrowserRouter  as Router,Route} from 'react-router-dom'
import Nav from './components/Nav';
import Home from './components/Home';
import Cart from './components/Cart';
function App() {
  return (
    <Router>
    <Nav/>
    <Route path='/' exact component={Home} />
    <Route path='/cart' exact component={Cart} />
    </Router>
  );
}

export default App;
