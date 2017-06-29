import React, { Component } from 'react';

class Buttons extends Component {

  render(){
    return(
      <div >
      <div className="info-button " onClick = {(e) => this.props.handleClick(e, "about")}>About</div>
      <div className="info-button " onClick = {(e) => this.props.handleClick(e, "project")}>Projects</div>
      <div className="info-button " onClick = {(e) => this.props.handleClick(e, "contact")}>Contact</div>
      </div>
    )
  }
}


export default Buttons;
