import React from 'react'
import { Button, Card, CardGroup, Col, Row } from 'react-bootstrap';
import ReactStars from 'react-star-rating-component';

const MovieCard = ({ movie }) => {
    return (

       <div className="card-div-item">

       <Card  style={{ width: '18rem' }}>
  <Card.Img variant="top" src={movie.posterURL} />
   <ReactStars className="start"
    count={5}
    
    
    activeColor="#ffd700"
     value={movie.rate}
  />
  <Card.Body>
    <Card.Title>{movie.title}</Card.Title>
    <Card.Text>
      {movie.description}
    </Card.Text>
    <Button variant="primary" style={{width:"100px"}}>شاهد</Button>
  </Card.Body>
</Card>

</div> 

       
    )
}

export default MovieCard
