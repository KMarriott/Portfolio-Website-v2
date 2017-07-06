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
      home_click: true,
      about_click: false,
      project_click: false,
      contact_click: false,
      hamburger: true
    }


    this.hamburgerClick = function(){
      this.setState({hamburger: !this.state.hamburger})
      console.log("ok")
    }


        this.handleMouseOver = function(){
          this.setState({hamburger: true})
        }


    this.handleClick = function(e, type) {
      let new_state = this.state;

      new_state["home_click"] = false
      new_state["about_click"] = false
      new_state["project_click"] = false
      new_state["contact_click"] = false


      new_state[type+"_click"] = !new_state[type+"_click"]


      if(new_state["home_click"] === false &&
      new_state["project_click"] === false &&
      new_state["contact_click"] === false){
      new_state["default"] = true
    }

      this.setState(new_state);

    }
  }





  render() {
    console.log(this.state)
    return (

      <div className="flex-column main-body">
      <div >

      <Name handleClick={this.handleClick.bind(this)} hamburgerClick={this.hamburgerClick.bind(this)}/>
          </div>

      {this.state.home_click ? <Text title={"Welcome"} handleClick={this.handleClick.bind(this)} state={this.state}/> : ""}
      {this.state.about_click ? <Text title={"About"} handleClick={this.handleClick.bind(this)} state={this.state}/> : ""}
      {this.state.project_click ? <Text title={"Projects"} handleClick={this.handleClick.bind(this)} state={this.state}/> : ""}
      {this.state.contact_click ? <Text title={"Contact"} handleClick={this.handleClick.bind(this)} state={this.state}/> : ""}

      <div className="spacing"></div>

      <Bottom/>

      </div>
    );
  }
}

export default App;
