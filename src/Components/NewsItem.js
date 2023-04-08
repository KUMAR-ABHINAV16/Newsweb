import React from 'react';
import './Newsitem.css';

const NewsItem =  ({title , description, url, urlToImage}) =>  {
  return (
    <div className="ne-app" >
       <div className="ne-item" style={{
              width: 500
       }}>
             <img className="ne-img" src={urlToImage} alt={urlToImage} />
             <h3 > <a  style={{ color: 'RGB(136, 176, 75)' }}   href={url}>{title}</a>   </h3>
             <p style={{ fontSize: '20' , margin: '20px'  }} >{description}</p>
       </div>
    </div>
  )
}

export default NewsItem






