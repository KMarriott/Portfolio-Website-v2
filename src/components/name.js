import React, { Component } from 'react';

// <div className="name" onClick = {
//   //(e) => this.props.handleClick(e, "home")
// }>

class Name extends Component {
  render(){
    return(


      <div className="name">



      <div className="blink">Khem Marriott </div>

      <div className="hamburger-container fade-in" onClick={this.props.hamburgerClick.bind(this)}>
      <div className="hamburger-line"> </div>
      <div className="hamburger-line"> </div>
      <div className="hamburger-line"> </div>

      </div>

      </div>
    )
  }
}


export default Name;
