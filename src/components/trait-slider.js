import React, { Component } from 'react';


class Traits extends Component {
	constructor(){
		super();

		this.state={
			count: 0,
			language_count: 0,
			time: 0,
			traits: [
      "New York Based",
			"Web Developer",
			"Software Tester",
			"Scientist",
			"Writer",
			"Geek",
			"Mobile Application Tester",
			"API Tester",
			"API Developer",
			"Gamer",
			"Web Application Tester",
			"Motivated",
			"Honest",
			"Creative",
			"Team player",
			"Diverse",
			"Not a chemist",
			"Knowledge Seeker",
			"Dedicated",
			"True",
			"Back-end developer",
			"Not the Usual",
			"Thoughtful",
			"Problem Solver",
			"Hard Working",
			"Context Driven",
			"Biologist",
			"Nerdy",
			"Automation API Tester",
			"Hard worker",
			"Emotionally Wise",
			"Self learner",
			"Analytical",
			"Patient",
			"Mobile Application Tester",
			"Kind",
      "Smart",
			"Loyal"
			],
			languages: [
			"Javascript ES6",
			"Node.js",
			"React",
			"Express",
			"Linux",
			"HTML5 + CSS",
			"Phyton",
			"Ruby",
			"On Rails",
			"Java",
			"Junit",
			"Selenium",
			"Mocha",
			"Chai",
			"jQuery",
			"Mustache",
			"Django",
			"Discord",
			"Google Apps",
			"Slack",
			"Skype",
			"Trello",
			"Sublime Text",
			"JIRA",
			"Photoshop"
			]
		}



	}


	timer() {
		this.setState({
			count: this.state.count+1
		})

		if(this.state.count>this.state.traits.length-1)(

			this.setState({
				count: 0
			})
			)
	}


language_timer() {

	let value = this.state.language_count+1
	if(this.state.language_count>=this.state.languages.length-1){
		value = 0
	}

	this.setState({
		language_count: value

	})

}


componentDidMount() {

	this.intervalId = setInterval(this.timer.bind(this), 3000);
}
componentWillUnmount(){
	clearInterval(this.intervalId);
}



render() {
	let traits = this.state.traits

		let show_traits= []


		let listtraits =[
		<div key={traits[this.state.count]}
		className="typewriter trait-item">
		{traits[this.state.count]}
		</div>]


		return <div className="flex-center">
		{listtraits}
		</div>

	}

}


export default Traits
