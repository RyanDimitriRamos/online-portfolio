import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import ProfilePhoto from '../../assets/img/profile/profile.jpg'
import Button from "react-bootstrap/Button";

import "./about.style.css";

const About = () => {
    return(
        <div id='about'>
            <div className = "about">
                <h1 className ="pt-3 text-center font-details pb-3" >About Me</h1>
                <Container>
                <Row className="pt-3 pb-5 align-items-center">
                        {/*Profile photo column*/ }
                        <Col xs={12} md = {6}>
                            <Row>
                                <Image className="profile justify-content-center" alt="profile" src={ProfilePhoto} thumbnail fluid />
                            </Row>
                        </Col>
                        {/*About me coulumn */}
                        <Col xs={12} md={6}>
                            <Row className="align-items-center p-2 my-details rounded">
                                Hi there! My name is <strong>&nbsp;Dimitri Ramos!</strong>
                                <br/>I am passionate programmer and Southern California native.
                                <br/>When I am not programming I enjoy volunteering and helping others. I also enjoy spending my weekends relaxing with family and friends.
                                <br/>I will be graduating from California State Polytechnic University with a Bachelors degree in computer Science in the Spring of 2021.
                                <br/>I love learning about new technologies, and the problems they are solving.
                                <br/> <br/> <br/>
                            </Row>
                        <Col className="d-flex justify-content-center flex-wrap button-row">
                            <div>
                                <a href="#contact">
                                <Button className="m-2" variant="outline-primary">
                                    Let's Talk
                                </Button>
                                </a>
                            </div>
                            <div>
                                <a href="https://drive.google.com/file/d/179PE1kWWmhggUU2TCKGbcLbEob0OS3hs/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                <Button className="m-2" variant="outline-success">
                                    My Resume
                                </Button>
                                </a>
                            </div>
                            <div>
                                <a href="https://github.com/RyanDimitriRamos/" target="_blank" rel="noopener noreferrer">
                                <Button className="m-2" variant="outline-dark">
                                    GitHub
                                </Button>
                                </a>
                            </div>
                            <div>
                                <a href="https://www.linkedin.com/in/ryandimitriramos/" target="_blank" rel="noopener noreferrer">
                                <Button className="m-2" variant="outline-info">
                                    LinkedIn
                                </Button>
                                </a>
                            </div>
                            </Col>
                        </Col>
                    </Row>  
                </Container>
            </div>
        </div>
    )
}
export default About;