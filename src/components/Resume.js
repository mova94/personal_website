import React from "react";

import '../css/contentSections.css';

import { Container, Row, Col } from 'react-bootstrap';
import Header from './Header.js';

function Resume() {
  return (
    <div className="sections">
      <Container className="flex-rows">
          <Row>
            <Col>
              <Header pos="right">
                <h2>Resume</h2>
              </Header>
            </Col>
          </Row>      
          <Row>
            <Col>
              <h1>In revision stage</h1>
              <p>Visit my LinkedIn page to see old resume</p>
            </Col>
          </Row>
        </Container>
    </div>
  );
}

export default Resume;
