import React, {useState} from 'react';
import {Carousel,Container} from 'react-bootstrap';
import styled from 'styled-components';
import logo from "../src/img/tel.png";



export default function ControlledCarousel() {

    const [count, setCount] = useState(0);
  
    const handleSelect = (selectedIndex, event) => {
      setCount(selectedIndex);
    };
  
    return (
     <>
    <Title> top produits</Title>
    <CarouselWrapper>
      <Carousel activeIndex={count} onSelect={handleSelect}>
        <Carousel.Item >
          <img            
            className="d-block w-15"
            src={logo}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Samsung S7</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item >
          <img
            className="d-block w-15"
            src={logo}
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Samsung S7</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item >
          <img
            className="d-block w-15"
            src={logo}
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Samsung S7</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </CarouselWrapper>
    </>
    );
  }
  // Stylisation 
    
  const Title = styled.p` 
   color:#888;
   font-size: 2em;
   text-decoration:underline;
   padding:1.5em;
   text-transform: capitalize;
   &:hover {
    color: #0080ff;
  }    
  `
  const CarouselWrapper = styled.div`
   max-width:100%;
   margin:1em auto;
   background-color:#888;
`