import React, { Component } from 'react';
import logo from './logo.svg';

import './App.css';
import './components/general.css';

import Name from './components/name.js';
import Home from './components/home.js';
import Buttons from './components/buttons.js';
import Bottom from './components/bottom.js';
import Title from './components/title.js';
import Text from './components/text.js';





class App extends Component {
  constructor(){
    super();

    this.state = {
      default: true,
      about_click: false,
      project_click: false,
      contact_click: false
    }

    this.handleClick = function(e, type) {
      let new_state = this.state;

      new_state["default"] = false
      new_state["about_click"] = false
      new_state["project_click"] = false
      new_state["contact_click"] = false



      new_state[type+"_click"] = !new_state[type+"_click"]
      console.log(new_state[type+"_click"])
      console.log(new_state)
      this.setState(new_state);
    }
  }



  render() {
    console.log(this.state)
    return (
      <div className="flex-column">

      <Name/>
      {
      <Buttons handleClick={this.handleClick.bind(this)} state={this.state}/>
      // <Home/>
      }

      {this.state.default ? <Text title={"Welcome"}/> : ""}
      {this.state.about_click ? <Text title={"About"}/> : ""}
      {this.state.project_click ? <Text title={"Projects"}/> : ""}
      {this.state.contact_click ? <Text title={"Contact"}/> : ""}



      <Bottom/>

      </div>
    );
  }
}

export default App;
