import React, { useState, useEffect } from 'react';
import '../pexels.css'
import { Row, Col } from 'react-bootstrap';

export default function PexelsImg() {
  
  const [photos, setPhotos] = useState([]);

  const apiKey = 'lprxOfsVplbt7ilnXzwE8VVURZQ2GZ70uJSmJ2WzcaACEOuO892xhb83';

//*useEffect è un componente che viene renderizzato quando il componente viene montato
  useEffect(() => {
    fetch('https://api.pexels.com/v1/curated?page=2', {
      method: 'GET',
      headers: {
        'Authorization': apiKey
      }
    })
      .then(response => response.json())
      .then(data => {
        setPhotos(data.photos);
      })
      .catch(error => {
        console.error('Error:', error);
      });
      //*clean up function
      return (
        setPhotos([])
      )
  }, []);

  return (
    <Row className="pexels gap-4 justify-content-center align-items-center mt-5 mb-5">
      {photos.map((element, index) => (
        <Col key={index} md={3}>
          <img className='img-fluid' src={element.src.original} alt="" />
        </Col>
      ))}
    </Row>
  );

}
