import React from "react";

import "../css/sidebar.css";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
// import { Button } from 'react-bootstrap';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

import SocialIcons from './SocialIcons';

function Sidebar() {
  //WILL USE REACT-ROUTER OR AUTOMATION SCROLL
  return (
    <div className="Sidebar" data-aos="fade-right" data-aos-duration="1000">
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        className="flex-column fixed-left"
      >
        <div className="selfImage">
          <img
            id="self"
            src="https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/p960x960/54061104_2142194252532537_5797422451860176896_o.jpg?_nc_cat=102&_nc_sid=7aed08&_nc_ohc=y_-QDTihRHAAX9j-ffk&_nc_ht=scontent-dfw5-2.xx&_nc_tp=6&oh=1238861af28e3d1fb7f2f4285f4d59e5&oe=5E835B7E"
            alt="me"
          />
        </div>
        
        <Navbar.Brand className="brand"> Nima Movasseghi </Navbar.Brand>
        <div>
          <FontAwesomeIcon icon={faGoogle} />
        </div>
        <div>
          <h6 className="emailId">nmovasseghi94@gmail.com</h6>
        </div>
        
        <Nav className="flex-column">
          <Nav.Item
            data-aos="fade-right"
            data-aos-duration="3000"
            className="director"
          >
            <Nav.Link href="#about">About</Nav.Link>
          </Nav.Item>

          <Nav.Item
            data-aos="fade-left"
            data-aos-duration="3000"
            className="director"
          >
            <Nav.Link href="#resume">Resume</Nav.Link>
          </Nav.Item>

          <Nav.Item
            data-aos="fade-right"
            data-aos-duration="3000"
            className="director"
          >
            <Nav.Link href="#projects">Projects</Nav.Link>
          </Nav.Item>
        </Nav>

        {/* ICONS */}
        <SocialIcons/>

      </Navbar>
    </div>
  );
}

export default Sidebar;
