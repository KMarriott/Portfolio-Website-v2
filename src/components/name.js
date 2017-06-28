import React, { Component } from 'react';


class Name extends Component {
  render(){
    return(
      <div>
      <div className="name" onClick = {(e) => this.props.handleClick(e, "home")}>
      <div className="blink">Khem Marriott</div>
      </div>


      </div>
    )
  }
}


export default Name;
