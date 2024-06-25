import React, { Component } from 'react';
import NewsItem from '../../NewsItem/NewsItem';

export default class Baseball extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false
    };
  }

  async componentDidMount() {
    this.setState({ loading: true });
    let url = "https://newsapi.org/v2/everything?q=baseball&apiKey=a8a9970364134cdf92e9dfc3d9bfc4ec";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, loading: false });
  }

  render() {
    return (
      <div className='sports-section'>
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
