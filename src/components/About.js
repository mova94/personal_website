import React from "react";

import Header from './Header.js';

import '../css/contentSections.css';
import { Container, Row, Col } from 'react-bootstrap';

import Me from '../images/me.jpg'

function About() {
  return (
    <div className="sections">
        <Container className="flex-rows">
          <Row>
            <Col>
              <Header>
                <h2>My Story</h2>
              </Header>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <img id="me" src={Me} alt="imgAbout"/> 
            </Col>
            <Col sm={12}>
              <p>
                Hello! My name is Nima and first off thank you for visiting my page! I am 25 years old and graduated from California State University, East Bay with B.S. in Computer Science. My main interest in the field is Web Development primarily front-end. I love being able to go from a complete blank white page to a full responsive page that can be enjoyed on any device. Frameworks that I have fun working with are ReactJS and Angular. They provide effective ways to handle components and state managment, which are the main reasons they peaked my interest when looking up frameworks when I first got into web dev. I am far from perfect, but I hope your journey through my page gives a positive impression of what I am capable of and my attention to detail!
              </p>
            </Col>
          </Row>
        </Container>
    </div>
  );
}

export default About;
