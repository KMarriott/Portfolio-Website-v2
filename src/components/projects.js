import React, { Component } from 'react';
import RPG_Game from './RPG_Game.js';
import VPet from './VPet.js';

class Projects extends Component {

  constructor(){
    super();

    this.state = {
      RPG_click: false,
      VPet_click: false,
      VPet_API_click: false
    }

    this.handleClick = function(e, type) {
      let new_state = this.state;

      new_state["RPG_click"] = false
      new_state["VPet_click"] = false
      new_state["VPet_API_click"] = false


      new_state[type+"_click"] = !this.state[type+"_click"]

      this.setState(new_state);


    }
  }



  render(){
    return(
      <div className="center-text flex-center flex-column">
{
      // <br/><br/>Worked for:
      // <br/>DJ
      // <br/>TD Bank
      // <br/>Squire
      // <br/>Per Scholas
      // <br/>General Assembly
}


      <div className="project-box-container">

      <div className="project-description">
      <div className="project-box" onClick = {(e) => this.handleClick(e, "RPG")}>RPG Game</div>
      <div className="project-box" onClick = {(e) => this.handleClick(e, "VPet")}>Virtual Pet</div>
      {

      // <div className="project-box" onClick = {(e) => this.handleClick(e, "VPet_API")}>Virtual Pet API/CRUD</div>
    }
      </div>

{ this.state.RPG_click ? <RPG_Game/>: ""}
{ this.state.VPet_click ? <VPet/>: ""}
{

  // <br/><br/>My Virtual Pet CRUD + API
  // <br/>To build ontop of the Virtual Pet app, I decided I wanted to create a backend to modify the different monsters you can get.
  // First I built a simple API to allow for users and to hold the data for the creatures that can be made.
  // Then I built a CRUD app so that it can be modified easily.
  //
  // The API was built using rails and the CRUD app was built using react using the rails react gem so to keep things simplified.

}


      </div>







      </div>


    )
  }
}


export default Projects;
