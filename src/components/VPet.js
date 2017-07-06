import React, { Component } from 'react';


class RPG_game extends Component {
  render(){
    return(
      <div className="project-text fade-in">

      <div className="project-item">

      <div className="project-border">


      <img  className="project-image" src={require("../VPetScreen.png")}/>
<br/>

<div className="project-desc-text">
<div className="visit-link">Your Virtual Pet</div>


<br/>

<br/>This is a project built solely in <u>React.</u>
<br/>The goal of this project was to recreate <a href="https://en.wikipedia.org/wiki/Digital_Monster_(virtual_pet)"> Digimon or Tamogachi style Virtual Pet Toy</a> with a few different rules.


<br/>This was my final project for General Assembly.

      <br/><br/> <a href="https://github.com/KMarriott/Pseudo-V-pet">View it in Github.</a>
      <br/> <a href="https://stormy-taiga-16081.herokuapp.com/">View Live.</a>
      </div>
</div>



      </div>
      </div>
    )
  }
}


export default RPG_game;
