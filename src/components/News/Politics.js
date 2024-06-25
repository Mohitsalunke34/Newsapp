import React, { Component } from 'react';
import NewsItem from '../NewsItem/NewsItem';
import './Politics.css'; // Import the CSS file for styling

export default class Politics extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false
    };
  }

  async componentDidMount() {
    this.setState({ loading: true });
    let url = "https://newsapi.org/v2/top-headlines?country=us&category=politics&apiKey=a8a9970364134cdf92e9dfc3d9bfc4ec";
    let data = await fetch(url);
    let parsedData = await data.json();

    // Remove duplicates based on article URLs
    let uniqueArticles = this.removeDuplicates(parsedData.articles, 'url');

    this.setState({ articles: uniqueArticles, loading: false });
  }

  // Function to remove duplicates from an array of objects based on a key
  removeDuplicates = (array, key) => {
    return array.filter((item, index, self) =>
      index === self.findIndex((t) => (
        t[key] === item[key]
      ))
    );
  }

  render() {
    return (
      <div className='politics-container'>
        <div className="politics-bg"></div>
        <h2 className='politics-title'>Politics News</h2>
        {this.state.loading && <h3>Loading...</h3>}
        <div className='row'>
          {this.state.articles.map((article) => (
            <div className="col-md-4" key={article.url}>
              <NewsItem
                title={article.title ? article.title : ""}
                description={article.description ? article.description : ""}
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
