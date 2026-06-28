import React from 'react';
import { Carousel, Row, Col, Image } from 'react-bootstrap';

function Home() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/slide1.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/slide2.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/slide3.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      
      <Row className="mt-4 justify-content-center text-center">
        <Col xs={4} md={2}><Image src="/images/menu-01.jpg" roundedCircle fluid className="mb-3 shadow-sm border border-2 border-white" style={{maxHeight: '100px', objectFit: 'cover'}} /></Col>
        <Col xs={4} md={2}><Image src="/images/menu-02.jpg" roundedCircle fluid className="mb-3 shadow-sm border border-2 border-white" style={{maxHeight: '100px', objectFit: 'cover'}} /></Col>
        <Col xs={4} md={2}><Image src="/images/menu-03.jpg" roundedCircle fluid className="mb-3 shadow-sm border border-2 border-white" style={{maxHeight: '100px', objectFit: 'cover'}} /></Col>
        <Col xs={4} md={2}><Image src="/images/menu-04.jpg" roundedCircle fluid className="mb-3 shadow-sm border border-2 border-white" style={{maxHeight: '100px', objectFit: 'cover'}} /></Col>
        <Col xs={4} md={2}><Image src="/images/menu-05.jpg" roundedCircle fluid className="mb-3 shadow-sm border border-2 border-white" style={{maxHeight: '100px', objectFit: 'cover'}} /></Col>
        <Col xs={4} md={2}><Image src="/images/menu-06.jpg" roundedCircle fluid className="mb-3 shadow-sm border border-2 border-white" style={{maxHeight: '100px', objectFit: 'cover'}} /></Col>
      </Row>

      <h4 className="mt-2 text-danger">This is Home Page</h4>
    </div>
  );
}

export default Home;
