import React from "react";

import "../css/content.css";


import { Container, Row, Col } from "react-bootstrap";

import About from "./About.js";
import Resume from "./Resume.js";
import Projects from "./Projects.js";
import SkillCarousel from './SkillCarousel.js';

function Content() {
  return (
    <Container fluid="true">
      <Row>
        <Col>
          <div
            className="content"
            id="home"
            data-aos="fade-down"
            data-aos-duration="3000"
          >
           <SkillCarousel/>
          </div>
        </Col>
      </Row>

      <Row 
        id="about" 
        className="contentSection"
        data-aos="flip-down"
        data-aos-duration="3000">
        <Col>
          <About />
        </Col>
      </Row>

      <Row 
        id="resume" 
        className="contentSection"
        data-aos="zoom-in-left"
        data-aos-duration="3000">
        <Col>
          <Resume />
        </Col>
      </Row>

      <Row 
        id="projects" 
        className="contentSection"
        data-aos="flip-up"
        data-aos-duration="3000">
        <Col>
          <Projects />
        </Col>
      </Row>
    </Container>
  );
}

export default Content;
