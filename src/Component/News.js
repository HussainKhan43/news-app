import React from 'react';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import NoImage from '../images/no-images.jpg'

export const News = (props) => {

const {title, description, image, url, date, authorName} = props;

  return (
    <Col lg={3}>
              <Card className="news-card shadow" style={{ width: '18rem' }}>
                  <Card.Img variant="top" className='news-img' src={image ? image : NoImage} />
                  <Card.Body>
                    <Card.Title className='news-title'>{title}</Card.Title>
                    <Card.Text>
                    {description ? (description.length > 100 ? description.slice(0, 100) + '...' : description)
                      : 'No description available.'}                   
                    </Card.Text>
                    <div className='news-ref'>
                      <div className='publish-at'><h6>Publish At: </h6><small>{date}</small></div>
                      <div className='publish-at author'><h6>author: </h6><em><small>{authorName}</small></em></div>
                    </div>
                    <a href={url} target="_blank" rel="noopener noreferrer" className='btn btn-primary btn-sm mt-3'>
                      Learn More
                    </a>                  
                </Card.Body>
                </Card>
                </Col>
  )
}
