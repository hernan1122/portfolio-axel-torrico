import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../Home'
import { Preloader } from '../components/Preloader';

function App() {
  const [start, setStart] = useState(true)

  setTimeout(() => { setStart(false) }, 3000)

  return (
    <BrowserRouter>
      {start ? <Preloader /> :
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      }
    </BrowserRouter>
  );
}

export default App;
