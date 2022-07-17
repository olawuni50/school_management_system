import React from 'react'
import {Container, Typography, Button, Divider} from "@mui/material"
import {useStyles} from "./ServiceeStyle"
import {Link} from "react-router-dom"
import styled from 'styled-components'
import img from "../../Images/contact.svg"

const Image = styled.img`
width: 40%;
margin-right:2rem;

@media screen and (max-width: 768px){
    width: 100%;
     margin-bottom:1.5rem;
    margin-top:1rem;
}
`


const Service2 = () =>{
    const classes = useStyles()
    return(
        <>
        <Container  maxWidth="xl" className={classes.number}>
            <Container maxWidth="lg">

              <div className={classes.number1}>
              <div className={classes.top}>
            <Typography variant="h3" style={{marginTop:"1.5rem"}}>1.</Typography>
            <Typography variant="h4">Discovery</Typography>
            <Typography variant="body1">We help you discover your business need and provide
            suitable design for you, we track your progress using state of the art software</Typography>

            <Typography variant="h3" style={{marginTop:"1.5rem"}}>2.</Typography>
            <Typography variant="h4">Planning</Typography>
            <Typography variant="body1">Our planning strategies is base on current trend in the world
            we help you plan your business ideas and recreate them. Our team are always ready for 
            you</Typography>
            </div>

            <div>
            <Typography variant="h3" style={{marginTop:"1.5rem"}}>3.</Typography>
            <Typography variant="h4">Execute</Typography>
            <Typography variant="body1">After planning have been done, our expert help you execute your project
            based on your discoveries and plans</Typography>

            <Typography variant="h3" style={{marginTop:"1.5rem"}}>4.</Typography>
            <Typography variant="h4">Deliver</Typography>
            <Typography variant="body1">We deliver your project at the speculated time without wasting time
            we can help you grow your business through technology. We are available 24x7</Typography>
            </div>
            </div>
           </Container>
           </Container>

           <Divider/>

            <Container maxWidth="lg" >
              <div className={classes.contact}>

              <div>
           <Typography variant="h6">Grow your Businesss and Build Your website or Software with us</Typography>
            <Button variant="contained" size="small" component={Link} to='/contact' style={{textTransform:"none"}}>Contact us</Button>
            </div>
            <Image src={img} alt="contact" />

            </div>
            </Container>
            </>
    )
}

export default Service2