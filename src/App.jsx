import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Policy from './pages/Policy';
import Support from './pages/Support';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navigate to='/policy' />} />
        <Route path='/policy' element={<Policy />} />
        <Route path='/support' element={<Support />} />
      </Routes>
    </Router>
  );
}
