import React from 'react'

import '../css/content.css';

import { Carousel } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
function Content() {
    return (
        <Container>
            <Row>
                <Col>
                    <h1>SOMETHING HERE EVENTUALLY</h1>
                </Col>
                <Col>
                    <div className="content" 
                data-aos="fade-down"
                data-aos-duration="3000">

                    <Carousel>
                        <Carousel.Item>
                        <img
                            className="d-block w-100 h-100"
                            src="https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2017/04/1493235373large_react_apps_A-01.png"
                            alt="React"
                        />
                            <Carousel.Caption>
                                <h3>Javascript</h3>
                                <p>React, Angular, Node</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        
                        <Carousel.Item>
                        <img
                            className="d-block w-100 h-100"
                            src="https://miro.medium.com/max/990/1*SgDJheMsi779kthQFZtYBg.jpeg"
                            alt="Python"
                        />
                            <Carousel.Caption>
                            
                                <h3>OOP, Web Crawler, Flask</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>

                    </div>
                </Col>
            </Row>
            
        </Container>
        
    );
}

export default Content;