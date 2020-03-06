import React from "react";

import Sidebar from "./Sidebar";
import Content from "./Content";

import "../css/main.css";
import { Container, Col, Row } from "react-bootstrap";
import AOS from "aos";

class Main extends React.Component {
  componentDidMount() {
    AOS.init();
  }
  render() {
    return (
      <div className="Main">
        <Container>
          <Row>
            <Col sm={12} md={3}>
              <Sidebar />
            </Col>
            <Col sm={12} md={9}>
              <Content />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Main;
