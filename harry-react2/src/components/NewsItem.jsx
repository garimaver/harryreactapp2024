import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class NewsItem extends Component {
 
  render() {
    let {title , description, imageUrl, newsUrl, author, date, source} = this.props;
    return (
      <div className='my-3'>
     <div className="card" style={{"width": "18rem"}}>
  <img src={!imageUrl? "https://www.hindustantimes.com/ht-img/img/2024/06/03/1600x900/PM-Narendra-Modi-in-Delhi-on-Wednesday---Vipin-Kum_1716441540763_1717405884111.jpg" : imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}  <span class="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left: '90%', zIndex:'1'}}>
    {source}
  </span></h5>
    <p className="card-text">{description}</p>
    <p className='card-text'><small className='text-muted'>By {!author?"Unknown":author} on {new Date (date).toGMTString()}</small></p>
    <Link to={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read more</Link>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem
