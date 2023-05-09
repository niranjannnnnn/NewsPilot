import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description,imageUrl,newsUrl} = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{width: "18rem"}}>
            <img src={!imageUrl?"https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <a rel ="noreferrer" href={newsUrl} target="_blank" className="btn-sm btn-dark">Read More</a>
            </div>
</div>
        </div>
    )
  }
}

export default NewsItem