import React from 'react';
import './App.scss';
import { Routes, Route, HashRouter} from 'react-router-dom'
import Home from './pages/Home'

// import Placeholder from './pages/Placeholder'
// import Placeholder2 from './pages/Placeholder2'

function App() {
  return (
    <React.StrictMode>
      <HashRouter>
          <Routes>
            <Route index element={<Home />} />
            {/* <Route path='placeholder' element={<Placeholder />} />
            <Route path='placeholder2' element={<Placeholder2 />} /> */}
          </Routes>
      </HashRouter>
    </React.StrictMode>
  );
} 

export default App;

