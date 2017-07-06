import React, { Component } from 'react';


class RPG_game extends Component {
  render(){
    return(
      <div className="project-text fade-in">

      <div className="project-item">

      <div className="project-border">


      <img  className="project-image" src={require("../RPGScreen.png")}/>
<br/>

<div className="project-desc-text">
<div className="visit-link">RPG Game!</div>


<br/>
      A simple turn based RPG style game built using <u>CSS Animations and jQuery</u>.
      <br/><br/>The goal of the game is to get through the waves of enemies in order to allow the children to get home.
      <br/><br/>
      It was an early project and is a bit funny to come back to, but I believe it is still a fun showcase of my familiarity with front end work using calcuations and ironically states outside of React.


      <br/><br/> <a href="https://github.com/KMarriott/DOGame">View it in Github.</a>
      <br/> <a href="https://kmarriott.github.io/DOGame/">View Live.</a>
      </div>
</div>



      </div>
      </div>
    )
  }
}


export default RPG_game;
