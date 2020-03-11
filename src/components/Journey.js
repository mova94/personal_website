import React from "react";

import '../css/contentSections.css';

import { Container, Row, Col } from 'react-bootstrap';
import Header from './Header.js';

import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';

function Journey() {
  return (
    <div className="sections">
      <Container className="flex-rows">
          <Row>
            <Col>
              <Header pos="right">
                <h2>Journey</h2>
              </Header>
            </Col>
          </Row>      
          <Row>
            <Col>
              <Timeline 
              lineColor={'#ddd'}
              animate={true}>
                <TimelineItem
                  key="001"
                  dateText="08/2013 – 05/2017"
                  style={{ color: '#e86971' }}
                >
                  <h3>Diablo Valley College, AA Mathematics</h3>
                  <h4>Finding My Passion</h4>
                  <h5>Nursing</h5>
                </TimelineItem>
                <TimelineItem
                  key="002"
                  dateText="09/2017 – 12/2018"
                  style={{ color: '#e86971' }}
                >
                  <h3>CSU EB, B.S. Computer Science</h3>
                  <h4>Finding My Place</h4>
                  <h5>Web Development</h5>
                </TimelineItem>
              </Timeline>
            </Col>
          </Row>
        </Container>
    </div>
  );
}

export default Journey;
