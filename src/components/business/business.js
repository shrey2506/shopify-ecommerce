import React from 'react';
import './business.css';





export class Business extends React.Component {
  render() {
    return (
      <div className="Blog">
        <div className="image-container">
          <a href={this.props.business.url}><img src={this.props.business.imageUrl} alt="image" /></a>
        </div>


        
        <div className="content">
          <div className="title">
            <p>8 Fun Things To Do in the Rain</p>
          </div>
          <br />

          <div className="digest">
            <p>April showers may bring May flowers, but they can also give grandchildren
            a case of cabin fever. Don't let a damp forecast rain on your parade.
            </p>
          </div>


        </div>
      </div>

    )
  }
}


