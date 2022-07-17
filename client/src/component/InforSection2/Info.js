import React from 'react'
import {Container, Typography, Button} from "@mui/material"
import img from "../../Images/prof.svg"
import { useStyles } from "./InfoStyles"
import {Image} from "./InfoStyles"


const Info2 = () => {
    const classes = useStyles()
    return (
        <div  className={classes.container}>

        <Container maxWidth="lg">
            <div  className={classes.paper}>

            <Image src={img} alt="human" data-aos="fade-left"/>
     
            <div data-aos="fade-right">
                <Typography variant="h6" style={{marginBottom: "1rem", color:"#896eff", fontWeight:"bold"}}>
                Automate your School Work with CalcG. Try it out today. 
                </Typography>

            <Typography variant="body1" style={{lineHeight:"2", textAlign:"justify", color:"#896eff", marginBottom:"1rem"}}>
                We are you major plug when it comes to academic matters, our exclusive 
                designs, helps, teachers, schools and school management fast track there learning
                process. CalcG is the best school management system for your school it helps you focus more on
                teaching and efficiently calculate and manage all your students data with ease.
               
            </Typography>
            <Typography variant="h5" style={{color:"#1f2471", fontWeight:"bold"}}>___Calcg Team___</Typography>
            </div>

           
            </div>

    </Container>
    </div>
    )
}

export default Info2
