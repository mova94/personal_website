import React from 'react';

import '../css/sidebar.css';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
// import { Button } from 'react-bootstrap';

function Sidebar() {
    //WILL USE REACT-ROUTER OR AUTOMATION SCROLL 
    return(
        <div className= "Sidebar">
            <Navbar bg="dark" expand="lg">
                <Nav className="flex-column">
                    <Nav.Item>
                        <Nav.Link href="#">About</Nav.Link>
                    </Nav.Item>
                    
                    <Nav.Item>
                        <Nav.Link href="#">Resume</Nav.Link>
                    </Nav.Item>
                    
                    <Nav.Item>
                        <Nav.Link href="#">Projects</Nav.Link>
                    </Nav.Item>
                </Nav>

            </Navbar>
        </div>
    );
}

export default Sidebar;