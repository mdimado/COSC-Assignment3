import React, { useState } from 'react';
import Header from './components/Header';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Login from './pages/Login';

const App = () => {
  const [username, setUsername] = useState('');

  return (
    <div>
      <div className="main">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop username={username} />} />
            <Route path="/login" element={<Login setUsername={setUsername} />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default App;
