import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const newLists = [
  { id: 1, title: 'Woman bakes expletive-laden pies to get a rise out of her grandmother in annual tradition', description: '"What started as a means to get a rise out of my Grammy has snowballed into a weird family tradition," wrote Jess Lydon.', images: '/images/event-1.jpg' },
  { id: 2, title: 'Martha Stewart shows off her 30 pies after canceled Thanksgiving dinner plans', description: 'Queen of Thanksgiving Martha Stewart may not be hosting a turkey dinner this year but fret not, she will still be celebrating with literally 30 pies.', images: '/images/event-2.jpg' },
  { id: 3, title: 'Burger King is testing a new breakfast sandwich', description: 'This is a win for the flatbread fans.', images: '/images/event-3.jpg' },
  { id: 4, title: 'Popeyes permanently adds chicken wings to its menu', description: 'And you can get \'em in five different flavors.', images: '/images/event-4.jpg' }
];

function News() {
  return (
    <div>
      <h2 className="text-danger mb-4">News Category</h2>
      <Row xs={1} md={2} lg={4} className="g-4">
        {newLists.map((news) => (
          <Col key={news.id}>
            <Card className="h-100">
              <Card.Img variant="top" src={news.images} />
              <Card.Body>
                <Card.Title className="fs-6">{news.title}</Card.Title>
                <Card.Text className="text-muted small mb-3">{news.description}</Card.Text>
                <Link to={`/news/${news.id}`} className="small text-decoration-none">{news.title}</Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default News;
