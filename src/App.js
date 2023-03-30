import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Register from './pages/Register';
import DesktopLaptop from './pages/products/DesktopLaptop';
import PhoneTablet from './pages/products/PhoneTablet';
import SuppliesAccessories from './pages/products/SuppliesAccessories';
import NoMatch from './pages/NoMatch';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/desktop-laptop" element={<DesktopLaptop />} />
        <Route path="/phone-tablet" element={<PhoneTablet />} />
        <Route path="/supplies-accessories" element={<SuppliesAccessories />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
