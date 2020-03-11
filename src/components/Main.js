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
        <Container fluid={true}>
          <Row>
            <Col xs={12} sm={12} md={4} lg={4}>
              <Sidebar />
            </Col>
            <Col xs={12} sm={12} md={8} lg={8}>
              <Content />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Main;
