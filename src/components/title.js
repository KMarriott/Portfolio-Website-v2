import React, { Component } from 'react';



class Title extends Component {
  render(){
    return(
      <div className="flex-center">
      <div>

      <div className="typewriter title">{this.props.title}!</div>
      </div>
      </div>
    )
  }
}


export default Title;
