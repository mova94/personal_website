import React from "react";

import '../css/contentSections.css';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './Header.js'

function Skills() {
  return (
    <div className="sections">
      <Container className="flex-rows">
          <Row>
            <Col>
              <Header pos="right">
                <h2>Skills</h2>
              </Header>
            </Col>
          </Row> 
          <Row>
            <Col sm={0}>
              {/* <img src="" alt="imgAbout"/> */} <h1>IMAGE OR MINI CAROUSEL</h1>
            </Col>
            <Col>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac auctor augue mauris augue. Magna ac placerat vestibulum lectus mauris ultrices eros. Eu feugiat pretium nibh ipsum. Phasellus vestibulum lorem sed risus ultricies tristique. Eu consequat ac felis donec et odio pellentesque. Viverra justo nec ultrices dui sapien. Lacinia quis vel eros donec ac. Nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi. Gravida in fermentum et sollicitudin ac orci phasellus. Varius sit amet mattis vulputate enim nulla aliquet porttitor lacus. Mattis rhoncus urna neque viverra justo nec ultrices dui sapien. Luctus accumsan tortor posuere ac ut consequat semper. Pellentesque eu tincidunt tortor aliquam. Consequat semper viverra nam libero justo laoreet sit amet. Pharetra magna ac placerat vestibulum lectus. Maecenas accumsan lacus vel facilisis volutpat. Id ornare arcu odio ut. Amet purus gravida quis blandit turpis. Vel turpis nunc eget lorem dolor sed viverra.
              </p>
            </Col>
          </Row>
        </Container>
    </div>
  );
}

export default Skills;
