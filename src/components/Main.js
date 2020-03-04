import React, {useState} from 'react';

import Sidebar from './Sidebar';
import Content from './Content';

import '../css/main.css'
import { Container, Col, Row } from 'react-bootstrap';

function Main() {
    return(
        <div className="Main">  
            <Container fluid="true">
                <Row>
                    <Col md={3}> <Sidebar/> </Col>
                    <Col md={9}> <Content/> </Col>                
                </Row>
            </Container>
        </div>
    );
}

export default Main;
