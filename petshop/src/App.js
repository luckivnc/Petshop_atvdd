import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import BanhoTosa from './pages/BanhoTosa';
import HotelResort from './pages/HotelResort';
import Adestramento from './pages/Adestramento';
import Contato from './pages/Contato';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/banho-e-tosa' element={<BanhoTosa />}/>
        <Route path='/hotel-resort' element={<HotelResort />} />
        <Route path='/adestramento' element={<Adestramento />} />
        <Route path='/contato' element={<Contato />}/>
      </Routes>
    </Router>

  );
}

export default App;
