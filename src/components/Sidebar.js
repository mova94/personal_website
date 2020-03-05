import React from 'react';

import '../css/sidebar.css';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
// import { Button } from 'react-bootstrap';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faTwitch, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Sidebar() {
    //WILL USE REACT-ROUTER OR AUTOMATION SCROLL 
    return(
        <div className= "Sidebar" 
        data-aos="fade-right" 
        data-aos-duration="1000">

            <Navbar bg="dark" variant="dark" expand="lg">
            
                <Nav className="flex-column">
                    <Nav.Item data-aos="fade-right" data-aos-duration="3000">
                        <Nav.Link href="#">About</Nav.Link>
                    </Nav.Item>
                    
                    <Nav.Item data-aos="fade-left" data-aos-duration="3000">
                        <Nav.Link href="#">Resume</Nav.Link>
                    </Nav.Item>
                    
                    <Nav.Item data-aos="fade-right" data-aos-duration="3000">
                        <Nav.Link href="#">Projects</Nav.Link>
                    </Nav.Item>

                    <Nav.Item data-aos="fade-left" data-aos-duration="3000">
                       <Nav.Link href='#'> <FontAwesomeIcon icon={faFacebook}/> </Nav.Link> 
                    </Nav.Item>
                    
                    <Nav.Item data-aos="fade-right" data-aos-duration="3000">
                       <Nav.Link href='#'> <FontAwesomeIcon icon={faTwitter}/> </Nav.Link> 
                    </Nav.Item>

                    <Nav.Item data-aos="fade-left" data-aos-duration="3000">
                       <Nav.Link href='#'> <FontAwesomeIcon icon={faTwitch}/> </Nav.Link> 
                    </Nav.Item>

                    <Nav.Item data-aos="fade-right" data-aos-duration="3000">
                       <Nav.Link href='#'> <FontAwesomeIcon icon={faInstagram}/> </Nav.Link> 
                    </Nav.Item>

                    <Nav.Item data-aos="fade-left" data-aos-duration="3000">
                       <Nav.Link href='#'> <FontAwesomeIcon icon={faLinkedin}/> </Nav.Link> 
                    </Nav.Item>
                </Nav>

            </Navbar>
        </div>
    );
}

export default Sidebar;