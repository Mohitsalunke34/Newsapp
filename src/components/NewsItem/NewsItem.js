import React, { Component } from 'react';

const defaultImageUrl = "https://via.placeholder.com/150";

export default class NewsItem extends Component {
  render() {
    const { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{ width: "18rem" }}>
          <img 
            src={imageUrl} 
            onError={(e) => e.target.src = defaultImageUrl} 
            className="card-img-top" 
            alt="News"
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl} target='_blank' rel="noopener noreferrer" className="btn btn-sm btn-primary">Read more</a>
          </div>
        </div>
      </div>
    );
  }
}
