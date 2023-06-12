import React, { Component } from 'react';
import '../pexels.css'
import { Row, Col } from 'react-bootstrap';

export default class PexelsImg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: []
    };
  }

  
  componentDidMount() {
    const apiKey = 'lprxOfsVplbt7ilnXzwE8VVURZQ2GZ70uJSmJ2WzcaACEOuO892xhb83';

    fetch('https://api.pexels.com/v1/curated?page=2', {
      method: 'GET',
      headers: {
        'Authorization': apiKey
      }
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ photos: data.photos });
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  render() {
    const { photos } = this.state;

    return (
      <Row className="pexels gap-4 justify-content-center align-items-center mt-5 mb-5">
        {photos.map(element => (
          <Col md={3}>
            <img className='img-fluid' key={element.id} src={element.src.original} alt="" />
          </Col>
        ))}
      </Row>
    );
  }
}
