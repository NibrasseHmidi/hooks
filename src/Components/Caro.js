import React from 'react'
import { Carousel } from 'react-bootstrap'

const Caro = () => {
    return (
        <div>
            <Carousel className="caro">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cdn1.webmanagercenter.com/tekiano/wp-content/uploads/2019/01/dachra-affiche-2.jpg "
      alt="First slide" height="550px" width="400px"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i1.wp.com/cinematunisien.com/wp-content/uploads/2019/07/TunisbyNuit_band2.jpg?resize=678%2C381"
      alt="Second slide" height="550px" width="200px"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://data.arab48.com/data/news/2019/10/05/Croped/20191005092810.jpg"
      alt="Third slide"  height="550px" width="100px"
    />

   
  </Carousel.Item>
</Carousel>
        </div>
    )
}

export default Caro
