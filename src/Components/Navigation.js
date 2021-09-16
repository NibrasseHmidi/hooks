import React, { useState } from 'react'
import {  Button, Container, Form, Modal, Nav, Navbar } from 'react-bootstrap'
import StarRatingComponent from 'react-star-rating-component';

import PersonIcon from '@material-ui/icons/Person';
import SearchIcon from '@material-ui/icons/Search';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';



const Navigation = ({handleSearch ,handleSearchrate,handleAddMovie}) => {

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handelstar=(newstar)=>{
    handleSearchrate(newstar)
  }


  const [newMovie, setNewMovie] = useState({
        id: "",
        title: "",
        description: "",
        posterURL: "",
        rate: 0
    })

     const mySubmitHandler = (e) => {
        e.preventDefault();
        handleAddMovie(newMovie)
        setNewMovie({
            id: "",
            title: "",
            description: "",
            posterURL: "",
            rate: ""
        })
        handleClose()
    }

    const handleChange = (e) => {
        setNewMovie({
            ...newMovie,
            [e.target.name]: e.target.value
        })
    }
    return (
       
         <>
  <Navbar style={{backgroundColor:"black",height:110}}   variant="dark"  >
 

  
    <Container  >

    

  
  
      
      <Navbar.Brand >  
   
    
    {/*search */}



 

 <div className="css-add"> 
  <button onClick={handleShow}><AddCircleOutlineIcon style={{color:"white" ,fontSize:20}}/>
</button>  
       <p style={{padding:10}}>إضافة</p>  </div>
  

    <SearchIcon style={{ fontSize:35}} />  
    <input type="text"    placeholder="Search" onChange={handleSearch}/> 
    
  
   <div className="css-star"> 
       <StarRatingComponent onStarClick={handelstar}
          name="rate1" 
          starCount={5}
        
         
        />  </div>
   
      
    
    </Navbar.Brand>
    
      <Navbar.Brand  style={{ fontSize:15,marginRight:0 }} >  
الأفلام


 </Navbar.Brand>
 <Navbar.Brand   style={{ fontSize:15 , marginRight:15}}  > المسرحيات</Navbar.Brand>
  
  
      
    <Navbar.Brand href="#"  style={{ fontSize:15 ,marginRight:15 ,}} >  
المسلسلات

 </Navbar.Brand>

  <Navbar.Brand href="#"  style={{ fontSize:15 ,marginRight:10}}  >  الرئيسية </Navbar.Brand>
       <Nav>
       <img src="https://pbs.twimg.com/profile_images/928234856231735296/I8gXgkC6_400x400.jpg" alt="" />
    
    </Nav>
    
    </Container>
  </Navbar>
 

{/*add button*/ }




<Modal  show={show} onHide={handleClose} animation={false} >
                <Modal.Header style={{ backgroundColor: '#008eb6' }} >
                    <Modal.Title  style={{ color: 'white' }}> فيلم جديد </Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ backgroundColor: '#193245' }}>
                    <Form onSubmit={mySubmitHandler} >
                        
                        <Form.Control type="text" name="title" placeholder="Title"  required onChange={handleChange}/>
                        <Form.Control type="text" name="description" placeholder="Description" required onChange={handleChange}/>
                        <Form.Control type="text" name="posterURL" placeholder="PosterURL" required onChange={handleChange}/>

                        <Form.Control type="number" name="rate" placeholder="Rate" onChange={handleChange} required />
                   
                    </Form>
                </Modal.Body>
                <Modal.Footer style={{ backgroundColor: '#008eb6' }}>
                    <Button style={{width:150}} variant="warning" type='submit' onClick={mySubmitHandler}>Save Changes</Button>
                    <Button  style={{width:70}} variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>



  </>   
     
    )
}

export default Navigation
