import React, { Component } from 'react';

import Traits from './trait-slider.js';


class Title extends Component {
  render(){
    return(
      <div className="flex-center">
      <div>

      <div className="title">
      {
        (this.props.title == "Welcome") ? <Traits/>
      :<div className="typewriter title-page" >{this.props.title}</div>
    }
      </div>
      </div>
      </div>
    )
  }
}


export default Title;
