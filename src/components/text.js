import React, { Component } from 'react';
import Title from './title.js';
import About from './about.js';
import Projects from './projects.js';
import Contacts from './contacts.js';
import Home from './home.js';


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
      body = <Home/>
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
      <div className="flex-column text welcome-body">

      <div className="flex-center">



      <div>
      <Title title={this.props.title}/>
      </div>
      </div>
{
      // <div className="all">
      // {
      //   (this.props.title==="Welcome") ?
      //   <img className="lion flex-center" src={require("../lion_icon.svg")}/>
      //   : ""}
      // </div>
}
      {body}


      </div>

    )
  }
}


export default Text;
