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
        <Route path='/' element={<Navigate to='/bootshop' />} />
        <Route path="/bootshop" element={<Home />} />
        <Route path="/bootshop/signin" element={<Signin />} />
        <Route path="/bootshop/register" element={<Register />} />
        <Route path="/bootshop/desktop-laptop" element={<DesktopLaptop />} />
        <Route path="/bootshop/phone-tablet" element={<PhoneTablet />} />
        <Route path="/bootshop/supplies-accessories" element={<SuppliesAccessories />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
