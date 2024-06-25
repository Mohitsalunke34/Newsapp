// News.js

import React, { Component } from 'react';
import NewsItem from '../NewsItem/NewsItem';
import './News.css';

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false
    };
  }

  async componentDidMount() {
    this.setState({ loading: true });
    let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=a8a9970364134cdf92e9dfc3d9bfc4ec";
    let response = await fetch(url);
    let data = await response.json();
    this.setState({ articles: data.articles, loading: false });
  }

  render() {
    return (
      <div className="news-container">
        <h2 className="news-title">Top Headlines</h2>
        {this.state.loading && <h3>Loading...</h3>}
        <div className="row">
          {this.state.articles.map((article) => (
            <div className="col-md-4" key={article.url}>
              <NewsItem
                title={article.title}
                description={article.description}
                imageUrl={article.urlToImage}
                newsUrl={article.url}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
