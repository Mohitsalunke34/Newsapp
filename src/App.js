import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import News from './components/News/News';
import Sports from './components/News/Sports/Sports';
import Politics from './components/News/Politics';
import Business from './components/News/Business';
import Technology from './components/News/Technology';
import Entertainment from './components/News/Entertainment';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Sidebar from './components/Sidebar/Sidebar';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<News />} />
            <Route path="/sports/*" element={<Sports />} />
            <Route path="/politics" element={<Politics />} />
            <Route path="/business" element={<Business />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/entertainment" element={<Entertainment />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
