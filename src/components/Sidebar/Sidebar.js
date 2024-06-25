// Sidebar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Categories</h2>
      <ul>
        <li><Link to="/sports">Sports</Link></li>
        <li><Link to="/politics">Politics</Link></li>
        <li><Link to="/business">Business</Link></li>
        <li><Link to="/technology">Technology</Link></li>
        <li><Link to="/entertainment">Entertainment</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
