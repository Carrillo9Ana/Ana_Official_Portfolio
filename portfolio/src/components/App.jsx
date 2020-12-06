import React, { Component } from "react";

import { Portfolio } from "./Portfolio/Portfolio.js";

import { about } from "../constants/About.js";
import { skills } from "../constants/Skills.js";
import { projects } from "../constants/Projects.js";
import { contact } from "../constants/Contact.js";

import NavBar from "./Navigation/NavBar.jsx";
import SelfIntro from "./Carousel/Carousel.js";

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
      contact: null,
    };
  }

  componentDidMount() {
    this.setState({
      about,
      skills,
      projects,
      contact,
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
        <NavBar />
        <SelfIntro />
        <Portfolio
          handleSectionClick={this.handleSectionClick}
          selectedSection={this.state.selectedSection}
          selectedHeading={this.state.selectedHeading}
          selectedQuote={this.state.selectedQuote}
          about={this.state.about}
          skills={this.state.skills}
          projects={this.state.projects}
          contact={this.state.contact}
        />{" "}
      </div>
    );
  }
}

export default App;
