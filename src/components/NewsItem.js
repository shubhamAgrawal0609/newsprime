import React, { Component } from 'react'

export class NewsItem extends Component { 
  render() { 
    let {title,description,imageurl,newsUrl,author ,date,Source }=this.props;
    return (
      <div className='my-3'>
        <div className="card" >
        <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'70%' , zIndex:'1'}}> {Source}</span>
        <img src={imageurl?imageurl:"https://www.cartoq.com/wp-content/uploads/2023/05/Hyundai-Exter-bookings-commence-featured.jpg"} className="card-img-top" alt="..."/>
        <div  className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-body-secondary">By {!author?"unknown":author} on  {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl}  target="_blank" className="btn  btn-sm btn-dark">Read More</a>
        </div>
</div>
      </div>
    ) 
  }
}

export default NewsItem
