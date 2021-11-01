import React from 'react';
import { Carousel } from 'react-bootstrap';
import cover1 from '../../photos/cover1.jpg';
import cover2 from '../../photos/cover2.jpg';
import cover3 from '../../photos/cover3.jpg';
import './Banner.css';


const Banner = () => {
    return (
        <div className="bg-warning">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={cover1}
                        alt="First slide"
                        
                    />
                    {/* <div className="background-one">
                        <h1>Where you Want To Go?</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, nihil.</p>
                    </div> */}
                   
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={cover2}
                        alt="Second slide"
                    />

                   
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={cover3}
                        alt="Third slide"
                    />

                    
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;