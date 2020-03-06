import React from 'react';

import { Carousel } from "react-bootstrap";

function SkillCarousel(params) {
    return(
         <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2017/04/1493235373large_react_apps_A-01.png"
                  alt="React"
                />
                <Carousel.Caption>
                  <h1>Javascript</h1>
                  <h3>React, Angular, Node</h3>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://miro.medium.com/max/990/1*SgDJheMsi779kthQFZtYBg.jpeg"
                  alt="Python"
                />
                <Carousel.Caption>
                  <h3>OOP, Web Crawler, Django</h3>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
    );
}

export default SkillCarousel;