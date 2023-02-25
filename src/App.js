import React from 'react';
import './App.css';
import { Routes, Route, HashRouter} from 'react-router-dom'

function App() {
  return (
    <React.StrictMode>
      <HashRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path='contact' element={<Placeholder />} />
            <Route path='projects' element={<Placeholder2 />} />
          </Routes>
      </HashRouter>
    </React.StrictMode>
  );
} 

export default App;

