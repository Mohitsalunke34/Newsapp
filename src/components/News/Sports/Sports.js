import React, { Component } from 'react';
import { Route, Link, Routes } from 'react-router-dom';
import Cricket from './Cricket';
import Football from './Football';
import Baseball from './Baseball';
import LiveScores from './LiveScores/LiveScores';
import './Sports.css';

export default class Sports extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
    };
  }

  async componentDidMount() {
    if (window.location.pathname === "/sports") {
      this.setState({ loading: true });
      let url = "https://newsapi.org/v2/everything?q=sports&apiKey=a8a9970364134cdf92e9dfc3d9bfc4ec";
      let response = await fetch(url);
      let data = await response.json();
      this.setState({ articles: data.articles, loading: false });
    }
  }

  render() {
    return (
      <div className='sports-container'>
        <div className="sports-background"></div>
        <h2 className='sports-title'>Sports News</h2>
        <nav>
          <ul>
            <li><Link to="/sports">General</Link></li>
            <li><Link to="/sports/cricket">Cricket</Link></li>
            <li><Link to="/sports/football">Football</Link></li>
            <li><Link to="/sports/baseball">Baseball</Link></li>
            <li><Link to="/sports/LiveScores">LiveScores</Link></li>
          </ul>
        </nav>
        <div className="sports-section sports-bg">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  {this.state.loading && <h3>Loading...</h3>}
                  <div className='row'>
                    {this.state.articles.map((article) => (
                      <div className="col-md-4" key={article.url}>
                        <div className='news-item'>
                          <img src={article.urlToImage} alt={article.title} />
                          <h3>{article.title}</h3>
                          <p>{article.description}</p>
                          <a href={article.url} target="_blank" rel="noopener noreferrer" className="btn-secondary">Read More</a>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              }
            />
            <Route path="cricket" element={<Cricket />} />
            <Route path="football" element={<Football />} />
            <Route path="baseball" element={<Baseball />} />
            <Route path="LiveScores" element={<LiveScores />} />
          </Routes>
        </div>
        
      </div>
    );
  }
}
