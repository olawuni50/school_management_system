import React from "react"
import {Container, Typography, Button} from "@mui/material"
import {Image} from "../AboutStyles"
import img from "../../Images/a2.jpg"
import {useStyles} from '../AboutStyles'
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";



const About1 =()=>{
    const classes = useStyles()

    return(
        <Container maxWidth="lg">
            <div  className={classes.container}>
            <Image src={img} alt="About us" />

            <div className={classes.text}>
            <Button variant="outlined" style={{marginBottom:"10px"}}>ABOUT US</Button>
            <Typography variant="h6" style={{marginBottom:"8px", fontWeight:"bold"}}>We are Increasing Business Success with Technology</Typography>
           
            <Typography variant="body1">Over 5 years working in IT services developing software applicatons
            and mobile apps for clients all over the world. We denounce with righteous indination and dislie menwho are so
            benguiled and demoralized b he chars of pleasure of the moment, so blinded by desire, that they cannot 
            forsee pain and troule that are bound to ensue, and equal blame belongs to those wo fail in ther duty through weakness
             of which is the same as saying</Typography>

             <div style={{display:"flex", justifyContent:"space-between", marginTop:"1rem",color:"#896eff"}}>
                 <Facebook  />
                 <Twitter />
                 <Instagram />
                 <LinkedIn />
                 </div>
             </div>
             

                </div>
        </Container>

    )
}

export default About1