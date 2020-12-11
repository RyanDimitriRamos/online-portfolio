import './App.css';
import AppNavbar from "./components/app-navbar/app-navbar.component";
import AppCarousel from "./components/app-carousel/app-carousel.component";
import TitleMessage from "./components/title-message/title-message.component";
import About from './pages/about/about.component';
import Container from "react-bootstrap/Container";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Fade from "react-reveal/Fade"

import { BrowserRouter, Link, Route } from 'react-router-dom';
import React, { Component } from 'react';

class App extends Component {
  render(){
    return (
      <div className="App" style={{ position: "relative" }}>
         <AppNavbar/>
         <AppCarousel/>
         <TitleMessage/>
            <div>
            <Jumbotron fluid>
              <Container className="container-box rounded">
                <Fade duration={500}>
                  <About />
                </Fade>
              </Container>
              </Jumbotron>
            </div>
      </div>
      );
  }

}
export default App;
