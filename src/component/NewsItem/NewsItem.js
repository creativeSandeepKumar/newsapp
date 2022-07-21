import React from 'react';
import "./NewsItem.css";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <>
    <section className='newsItem-section'>
      <span className="newsItem-badge">
        {source}
      </span>
        <img src={ !imageUrl ? "https://ommcom.s3.ap-south-1.amazonaws.com/wp-content/uploads/2022/05/31161047/ba5097c838fd08d7d24aaf2c924b8d92-e1653993656498.jpg" : imageUrl} alt="images" width="100%" />
        <div className="newsItem-padding">
        <h5 className="newsItem-title">{title}</h5>
        <p className="newsItem-description">
          {description}...
        </p>
        <p className="newsItem-author">
          <small> By {!author ? "Unknown" : author} on {" "} {new Date(date).toGMTString()}  </small>
        </p>
        <a href={newsUrl} target="_blank" rel="noreferrer">Read More</a>
        </div>
        {/* source, image title, description, author, date, ReadMoreLink */}
    </section>
   
    </>
   
  )
}

export default NewsItem