import React, { Component } from 'react';
import Contacts from './contacts'
class Home extends Component {
  render(){
    return(
      <div className="flex-column welcome-body fade-in">

        <div>
        Welcome!
        </div>
        <div>
        <br/>
        I am an independent Web & Software Developer based in New York, New York.
        </div>
        <div>
        <br/>
        I work primarily with React, Node.js, and Ruby on Rails.
        </div>
        <div>
        <br/>
        If you are interested in learning more about me and my work check out my <a>About Me</a> or <a>Projects</a>.
        <br/>
        <br/>I'm always happy to help.

        </div>
        <br/>
        <Contacts/>

        </div>
    )
  }
}


export default Home;
