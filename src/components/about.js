import React, { Component } from 'react';


class About extends Component {
  render(){
    return(


      <div className="test">
      <div className="flex-column about-body">

      {
      // <div> 22 / New York / Some type of Nerd </div>
      //
      //
      // <div>Skills</div>
      //
      // <div>
      // Javascript (ES6) - Node.js, React, Express, Handlebars, Mocha Chai,jQuery
      // Ruby - Ruby on Rails, Sinatra
      // Phyton - Django
      // Javascript
      // </div>
    }

    <div className="crop">
        <img src={require("../unnamed.jpg")}/>
    </div>

            <div>
            I am a 22 year old young man, living in New York and working as a Web Developer. I have a history or working at large and small companies. My number one priority is completing projects professionally, efficiently and effectively.

            <br/><br/>For some of my history: I was born in New York, but grew up in Los Angeles, California. A curious but introverted boy, I spent most of my free time during my developmental years in online communities growing really familiar with online culture. In other words, I am a total geek.

            <br/><br/>At 16 years of age I returned to New York to study Biology on a scholarship to Pace University. I wasn’t interested in pursuing a medical career like most other Biology majors. I chose a biology because throughout high school I loved science particularly the scientific method and the theory of evolution.

            <br/><br/>By the time I reached my senior year I had attended several conferences and spent 2 months in the Dominican Republic working on a research project. I realized that my attraction to biological science could not compare to my love for computer science. I took a few CS courses before I graduated. After graduation I attended an intensive Software Testing course at Per Scholas.
            Thanks to that course I enjoyed great success my first year in the career. I managed to get a job at Doran Jones as a Software tester. I was sent to Toronto to do testing on TD Bank’s implementation of Apple Pay in Canada. It was a really fun and exciting experience. Unfortunately that contract came to an end and it was time for me to move onto new things. I found work with the Y Combinator startup Squire assisting with preparing and writing automated test scripts for their admin systems. Working at a high powered, super energetic, rising star start-up affirmed my decision to choose technology over biology.

            <br/><br/>Once the Squire project was completed I decided to take a Web Development Immersive course at General Assembly. At GA I learned a lot in regards to coding best practices. It was a truly fulfilling experience and I am happy to be able to say I am an alumni.

            <br/><br/>This finally brings me to where I am now. I am a recent graduate of General Assembly looking to give a steady hand to someone who might just need it. I am seeking a junior position as either a full stack or back end focused engineer.
            </div>


      </div>
      </div>



    )
  }
}


export default About;
