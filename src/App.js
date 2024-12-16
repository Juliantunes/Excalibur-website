import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EnterPage from './EnterPage';
import HomePage from './HomePage'; // Create this next

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EnterPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
