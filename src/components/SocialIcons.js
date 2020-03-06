import React from 'react';

import { Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faFacebook,
    faTwitter,
    faTwitch,
    faInstagram,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import '../css/socialicons.css';

function SocialIcons(){

    return(
        <Nav className="fa-pull-right">
         <Nav.Item data-aos="fade-left" data-aos-duration="3000" className="socialIcons">
            <Nav.Link href="#">
              <FontAwesomeIcon icon={faFacebook} />
            </Nav.Link>
          </Nav.Item>

          <Nav.Item data-aos="fade-right" data-aos-duration="3000" className="socialIcons">
            <Nav.Link href="#">
              <FontAwesomeIcon icon={faTwitter} />
            </Nav.Link>
          </Nav.Item>

          <Nav.Item data-aos="fade-left" data-aos-duration="3000" className="socialIcons">
            <Nav.Link href="#">
              <FontAwesomeIcon icon={faTwitch} />
            </Nav.Link>
          </Nav.Item>

          <Nav.Item data-aos="fade-right" data-aos-duration="3000" className="socialIcons">
            <Nav.Link href="#">
              <FontAwesomeIcon icon={faInstagram} />
            </Nav.Link>
          </Nav.Item>

          <Nav.Item data-aos="fade-left" data-aos-duration="3000" className="socialIcons">
            <Nav.Link href="#">
              <FontAwesomeIcon icon={faLinkedin} />
            </Nav.Link>
          </Nav.Item>
        </Nav>
    );
}

export default SocialIcons;