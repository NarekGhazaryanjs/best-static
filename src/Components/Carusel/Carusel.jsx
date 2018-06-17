import React, { Component } from 'react';
import {
  Carousel,
} from 'react-bootstrap';
import "./Carusel.css";

class Slider extends Component {
  render() {
    return (
      <Carousel className="Carusel_content">
        <Carousel.Item>
          <h3>
          Believe in yourself, listen to your gut, and do what you love.<br/>
           --Dylan Lauren--
          </h3>
        </Carousel.Item>
        <Carousel.Item>
          <h3>
          Don't let fear or insecurity stop you from trying new things. 
          Believe in yourself. Do what you love. And most importantly, 
          be kind to others, even if you don't like them.<br/>
            --Stacy London--
          </h3>
        </Carousel.Item>
        <Carousel.Item>
          <h3>
          Believe in yourself, and the rest will fall into place. 
          Have faith in your own abilities, work hard, and there is nothing you cannot accomplish. <br/>
          --Brad Henry--

          </h3>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default Slider;