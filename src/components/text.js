import React, { Component } from 'react';
import Title from './title.js';
import Traits from './trait-slider.js';
import About from './about.js';
import Projects from './projects.js';
import Contacts from './contacts.js';

class Text extends Component {
  constructor(){
    super();
  }

  componentWillMount(){
    this.setState(this.props.state)
  }

  render(){

    var body = ""
    if(this.props.title==="Welcome"){
    }
    else if(this.props.title==="About"){
      body = <About/>
    }
    else if(this.props.title==="Projects"){
        body = <Projects/>
    }
    else if(this.props.title==="Contact"){
        body = <Contacts/>
    }


    return(
      <div className="flex-center flex-column text">

      <div className="flex-center">



      <div>
      <Title title={this.props.title}/>
      </div>
      </div>
      {(this.props.title==="Welcome") ? <img className="lion flex-center" src={require("../lion_icon.svg")}/>
      : ""}


      <div className="flex-center">

      {body}

      </div>
      <div>
      </div>
      </div>

    )
  }
}


export default Text;
