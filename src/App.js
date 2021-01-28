import './App.css';
import AppNavbar from './components/app-navbar/app-navbar';
import AppCarousel from './components/app-carousel/app-carousel';
import TitleMessage from './components/title-message/title-message';
import About from './pages/about/about';
import Skills from './pages/skills/skills';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Fade from 'react-reveal/Fade';
import Slide from "react-reveal/Slide";
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App" style={{ position: "relative" }}>
        <AppNavbar />
        <AppCarousel />
        <TitleMessage />
        <Jumbotron fluid>
          <Container className="container-box rounded">
            <Fade duration={500}>
              <About />
            </Fade>
          </Container>
        </Jumbotron>
        <Container className="container-box rounded">
          <Slide bottom duration={500}>
            <hr />
            <Skills />
          </Slide>
        </Container>
      </div>
    );
  }
}
export default App;
