import React, { Component } from "react";

export class NewsItem extends Component {
  // constructor(){
  //   super()
  //   console.log("This is a NewsItem Constructor.")
  // }
  render() {
    // this is the way to store all the props coming to its components....
    // Its called destructuring, and we can put out out from props whatever we want....
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div className={`mode-${this.props.mode}`} style={{border:`1px solid ${this.props.cardBorderColor}`, borderRadius:"5px"}}>
        <div className={`card mode-${this.props.mode}`} style={this.props.style}>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className={`card-body mode-${this.props.mode}`} style={this.props.style}>
            <h5 className={`card-title mode-${this.props.mode}`} style={this.props.style}>{title}</h5>
            <p className={`card-text mode-${this.props.mode}`} style={this.props.style}>{description}</p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm" > Read Full Article </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
