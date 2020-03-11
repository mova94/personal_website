import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Nav } from "react-bootstrap";

import {
  faFacebook,
  faTwitter,
  faTwitch,
  faInstagram,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

import "../css/socialicons.css";

function SocialIcons() {
  return (
    <Nav className="flex-row" >
      <Nav.Item
        data-aos="fade-left"
        data-aos-duration="3000"
        className="socialIcons"
      >
        <Nav.Link href="https://facebook.com/nima.movasseghi.3" target="_blank">
          <FontAwesomeIcon icon={faFacebook} />
        </Nav.Link>
      </Nav.Item>

      <Nav.Item
        data-aos="fade-right"
        data-aos-duration="3000"
        className="socialIcons"
      >
        <Nav.Link href="https://twitter.com/ssbm_Mova" target="_blank">
          <FontAwesomeIcon icon={faTwitter} />
        </Nav.Link>
      </Nav.Item>

      <Nav.Item
        data-aos="fade-left"
        data-aos-duration="3000"
        className="socialIcons"
      >
        <Nav.Link href="https://www.twitch.tv/mova_94" target="_blank">
          <FontAwesomeIcon icon={faTwitch} />
        </Nav.Link>
      </Nav.Item>

      <Nav.Item
        data-aos="fade-right"
        data-aos-duration="3000"
        className="socialIcons"
      >
        <Nav.Link href="https://www.instagram.com/mova_94_/" target="_blank">
          <FontAwesomeIcon icon={faInstagram} />
        </Nav.Link>
      </Nav.Item>

      <Nav.Item
        data-aos="fade-left"
        data-aos-duration="3000"
        className="socialIcons"
      >
        <Nav.Link href="https://www.linkedin.com/in/nmovasseghi94/" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} />
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default SocialIcons;
