import React, { Component } from 'react';

class Buttons extends Component {

  render(){
    return(
      <div className="flex-column fade-in button-container">
      <div key="1" className="info-button " onClick = {(e) => this.props.handleClick(e, "home")}>Home</div>
      <div key="2" className="info-button " onClick = {(e) => this.props.handleClick(e, "about")}>About</div>
      <div key="3" className="info-button " onClick = {(e) => this.props.handleClick(e, "project")}>Projects</div>
{
        // <div className="info-button " onClick = {(e) => this.props.handleClick(e, "contact")}>Contact</div>

}      </div>
    )
  }
}


export default Buttons;
