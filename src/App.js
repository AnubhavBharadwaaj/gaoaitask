import './App.css';
import Home from './Containers/Home';
import { Checkout } from './Containers/Checkout';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/checkout' element={<Checkout />}></Route>
      </Routes>
    </Router>    
  );
}
export default App;
