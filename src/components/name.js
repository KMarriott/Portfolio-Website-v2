import React, { Component } from 'react';


class Name extends Component {
  render(){
    return(
      <div>
      <div className="name" onClick = {(e) => this.props.handleClick(e, "home")}>
      <div className="blink">Khem Marriott <img className="w-lion flex-center" src={require("../lion_icon_w.svg")}/>
    </div>
        </div>


      </div>
    )
  }
}


export default Name;
