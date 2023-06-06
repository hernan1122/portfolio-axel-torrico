import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../Home'
import { MyJobs } from '../components/MyJobs'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/jobs" element={<MyJobs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
