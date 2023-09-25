import React, { Component } from 'react'

export class NewsItem extends Component {
  // constructor(){
  //   super()
  //   console.log("This is a NewsItem Constructor.")
  // }
  render() {
    // this is the way to store all the props coming to its components....
    // Its called destructuring, and we can put out out from props whatever we want....
    let {title, description, imageUrl, newsUrl} = this.props
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
        <img src={imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl} target="_blank" rel="noreferrer"  className="btn btn-primary btn-sm">Read Full Article</a>
        </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
