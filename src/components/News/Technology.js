import React, { Component } from 'react';
import NewsItem from '../NewsItem/NewsItem';

export default class Technology extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false
    };
  }

  async componentDidMount() {
    this.setState({ loading: true });
    let url = "https://newsapi.org/v2/top-headlines?country=us&category=Technology&apiKey=a8a9970364134cdf92e9dfc3d9bfc4ec";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, loading: false });
  }

  render() {
    return (
      <div className='container my-3'>
        <h2 className='news-title'>Technology News</h2>
        {this.state.loading && <h3>Loading...</h3>}
        <div className='row'>
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title : ""}
                  description={element.description ? element.description : ""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
