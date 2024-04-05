import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Card from './components/Card';
 import Navbar from './components/Navbar';
import { Router } from '@mui/icons-material';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      
      <Navbar/>
      <Routes>
        <Route path='/' element={<Card/>} /> 
        <Route path='/cart' element={<Cart/>} /> 
         </Routes>
      </BrowserRouter>
      
     </div>
  );
}

export default App;
