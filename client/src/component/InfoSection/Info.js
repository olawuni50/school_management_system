import React from "react"
import {Container, Typography, Paper, Button} from "@mui/material"
import { useStyles } from "./InfoStyles"
import {CalculateOutlined,PlaylistAddCheckOutlined,AttachMoneyOutlined, 
AccountTreeOutlined} from "@mui/icons-material"


const Info = () =>{

    const classes = useStyles()

    return(
        <div className={classes.container1}>
        <Container maxWidth="lg">
            <Typography variant="h5" className={classes.features} style={{fontWeight: "bold", marginTop:"5rem"}}>
                We Provide Awesome Service To You</Typography>

            <div className={classes.container}>

            <Paper elevation={3} className={classes.paper} data-aos="flip-up">
                <div className={classes.top}>
                <CalculateOutlined className={classes.icons} style={{fontSize:"4rem"}} />
                </div>
            <Typography variant="h6" align="center" className={classes.title} style={{fontWeight:"bold"}}>Grade Calculation</Typography>            
            <Typography variant="body1" className={classes.body}>Calculate student's score with ease in 1minute, and get chart  </Typography>

            </Paper>


            <Paper elevation={3}  className={classes.paper} data-aos="flip-down">
                <PlaylistAddCheckOutlined className={classes.icons} style={{fontSize:"4rem", backgroundColor:"#ff586e"}}/>
            <Typography variant="h6" align="center" className={classes.title} style={{fontWeight:"bold"}}>Check Result</Typography>
            <Typography variant="body1" className={classes.body}>Our fast application system helps you check your student result in second</Typography>
            
            </Paper>


            <Paper elevation={3}  className={classes.paper} data-aos="flip-up">
                <AttachMoneyOutlined className={classes.icons} style={{fontSize:"4rem", backgroundColor:"#029e76"}}/>
            <Typography variant="h6" align="center" className={classes.title} style={{fontWeight:"bold"}}>Payments</Typography>
            <Typography variant="body1" className={classes.body}>Student can easily pay school fees without going to the bank</Typography>
           
            </Paper>


            <Paper elevation={3}  className={classes.paper} data-aos="zoom-in">
                <AccountTreeOutlined className={classes.icons} style={{fontSize:"4rem"}}/>
            <Typography variant="h6" align="center" className={classes.title} style={{fontWeight:"bold"}}>Other Projects</Typography>
            <Typography variant="body1" className={classes.body}>Check out other product we make to make life easy for teachers</Typography>
          
            </Paper>

            </div>

        </Container>

        
        </div>
    )
}

export default Info