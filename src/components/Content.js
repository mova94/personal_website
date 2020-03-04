import React from 'react'

import '../css/content.css';

import { Carousel } from 'react-bootstrap';

function Content() {
    return (
        <div className="content" 
        data-aos="fade-down"
        data-aos-duration="3000">
            
            <Carousel>
                <Carousel.Item>
                    
                </Carousel.Item>
            </Carousel>

        </div>
    );
}

export default Content;