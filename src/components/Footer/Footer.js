import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <h5>News Channels</h5>
            <ul className="list-unstyled">
              <li><img src="/path/to/channel1-logo.png" alt="Channel 1 Logo" /></li>
              <li><img src="/path/to/channel2-logo.png" alt="Channel 2 Logo" /></li>
              {/* Add more logos as needed */}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
