// Cricket.js

import React, { Component } from 'react';
import './Cricket.css';

export default class Cricket extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false
    };
  }

  async componentDidMount() {
    this.setState({ loading: true });
    let url = "https://newsapi.org/v2/everything?q=cricket&apiKey=a8a9970364134cdf92e9dfc3d9bfc4ec";
    let response = await fetch(url);
    let data = await response.json();
    this.setState({ articles: data.articles, loading: false });
  }

  render() {
    return (
      <div className='cricket-container'>
        <h2 className='cricket-title'>Cricket News</h2>
        {this.state.loading && <h3>Loading...</h3>}
        <div className='row'>
          {this.state.articles.map((article) => (
            <div className="col-md-4" key={article.url}>
              <div className='news-item'>
                <img src={article.urlToImage} alt={article.title} />
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                <a href={article.url} target="_blank" rel="noopener noreferrer">Read More</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
