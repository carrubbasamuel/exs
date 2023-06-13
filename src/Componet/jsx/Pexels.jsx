import React, { useState, useEffect } from 'react';
import '../pexels.css'
import { Row, Col } from 'react-bootstrap';

export default function PexelsImg() {
  const apiKey = 'lprxOfsVplbt7ilnXzwE8VVURZQ2GZ70uJSmJ2WzcaACEOuO892xhb83';

  let saveimg = localStorage.getItem('img');
  const [photos, setPhotos] = useState(saveimg ? JSON.parse(saveimg) : []);

  useEffect(() => {
    try {
      fetch('https://api.pexels.com/v1/curated?page=2', {
        method: 'GET',
        headers: {
          'Authorization': apiKey
        }
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          const photosData = data.photos;
          localStorage.setItem('img', JSON.stringify(photosData));
          setPhotos(photosData);
        })
        .catch(error => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
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
