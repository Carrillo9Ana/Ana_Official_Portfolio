import React, { Component } from "react";

import { Portfolio } from "./Portfolio/Portfolio.js";

import { about } from "./../constants/About.js";
import { skills } from "./../constants/Skills.js";
import { projects } from "./../constants/Projects.js";

import "./App.css";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedSection: "",
      selectedHeading: "",
      selectedQuote: "",
      about: null,
      skills: null,
      projects: null,
    };
  }

  componentDidMount() {
    this.setState({
      about,
      skills,
      projects,
      selectedHeading: about.heading,
      selectedQuote: about.quote,
      selectedSection: "about",
    });
  }

  handleSectionClick = (section) => {
    this.setState({
      selectedSection: section,
      selectedHeading: this.state[section].heading,
      selectedQuote: this.state[section].quote,
    });
  };

  render() {
    return (
      <div className="App">
        <Portfolio
          handleSectionClick={this.handleSectionClick}
          selectedSection={this.state.selectedSection}
          selectedHeading={this.state.selectedHeading}
          selectedQuote={this.state.selectedQuote}
          about={this.state.about}
          skills={this.state.skills}
          projects={this.state.projects}
        />
      </div>
    );
  }
}

export default App;
