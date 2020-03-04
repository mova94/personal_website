import React from 'react';

import Sidebar from './Sidebar';
import Content from './Content';

import '../css/main.css'
import { Container, Col, Row } from 'react-bootstrap';
import AOS from 'aos';

class Main extends React.Component {
    componentDidMount() {
        AOS.init();
    };
    render(){
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
 
}

export default Main;
