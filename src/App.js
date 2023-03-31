import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
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
        <Route path='/' element={<Navigate to='/boot-shop' />} />
        <Route path="/boot-shop" element={<Home />} />
        <Route path="/boot-shop/signin" element={<Signin />} />
        <Route path="/boot-shop/register" element={<Register />} />
        <Route path="/boot-shop/desktop-laptop" element={<DesktopLaptop />} />
        <Route path="/boot-shop/phone-tablet" element={<PhoneTablet />} />
        <Route path="/boot-shop/supplies-accessories" element={<SuppliesAccessories />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
