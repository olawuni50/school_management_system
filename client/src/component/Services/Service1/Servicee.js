import React from "react"
import {Link} from "react-router-dom"
import {Container, Typography, Paper, Button, Divider} from "@mui/material"
import {useStyles} from "./ServiceeStyle"
import {CalculateOutlined,PlaylistAddCheckOutlined,AttachMoneyOutlined, 
AccountTreeOutlined} from "@mui/icons-material"



const Servicee = () =>{
    const classes = useStyles()
    return(
        <Container maxWidth="lg">
        <Typography variant="h5" style={{color:"#896eff", marginTop:"1rem", paddingBottom:"10px"}}
        >Web Development  </Typography>
        
        <div className={classes.head}>
        <Typography variant="body1" className={classes.head1}>Our services cut across all web solutions, like web development,
        web design, graphics design, API design, consultations 
        and we help manage existing websites</Typography>
       
        </div>

            <Divider />
            <div className={classes.content}>
         <Paper elevation={3} className={classes.paper}>
                <CalculateOutlined className={classes.icons} style={{fontSize:"4rem"}} />
            <Typography variant="h6" align="center" className={classes.title} style={{fontWeight:"bold"}}>Web Development</Typography>            
            <Typography variant="body1" className={classes.body}>Calculate student's score with ease in 1minute, and get chart  </Typography>
             {/* <Button style={{width:"100%"}} variant="contained" className={classes.button} component={Link} to="/add-subject"> Calculate</Button> */}
            </Paper>


            <Paper elevation={3}  className={classes.paper}>
                <PlaylistAddCheckOutlined className={classes.icons} style={{fontSize:"4rem", backgroundColor:"#ff586e"}}/>
            <Typography variant="h6" align="center" className={classes.title} style={{fontWeight:"bold"}}>Web Solution</Typography>
            <Typography variant="body1" className={classes.body}>Our fast application system helps you check your student result in second</Typography>
            {/* <Button style={{width:"100%"}} variant="contained" className={classes.button}> Check </Button> */}
            </Paper>


            <Paper elevation={3}  className={classes.paper}>
                <AttachMoneyOutlined className={classes.icons} style={{fontSize:"4rem", backgroundColor:"#029e76"}}/>
            <Typography variant="h6" align="center" className={classes.title} style={{fontWeight:"bold"}}>Company Branding</Typography>
            <Typography variant="body1" className={classes.body}>Student can easily pay school fees without going to the bank</Typography>
            {/* <Button style={{width:"100%"}} variant="contained" className={classes.button}> Make Payment </Button> */}
            </Paper>


            <Paper elevation={3}  className={classes.paper}>
                <AccountTreeOutlined className={classes.icons} style={{fontSize:"4rem"}}/>
            <Typography variant="h6" align="center" className={classes.title} style={{fontWeight:"bold"}}>SEO & Marketing</Typography>
            <Typography variant="body1" className={classes.body}>Check out other product we make to make life easy for human being</Typography>
            {/* <Button style={{width:"100%"}} variant="contained" className={classes.button}>Other Projects </Button> */}
            </Paper>

            <Paper elevation={3}  className={classes.paper}>
                <PlaylistAddCheckOutlined className={classes.icons} style={{fontSize:"4rem", backgroundColor:"#ff586e"}}/>
            <Typography variant="h6" align="center" className={classes.title} style={{fontWeight:"bold"}}>24X7 Support</Typography>
            <Typography variant="body1" className={classes.body}>Our fast application system helps you check your student result in second</Typography>
            {/* <Button style={{width:"100%"}} variant="contained" className={classes.button}> Check </Button> */}
            </Paper>
            </div>

              
            <Divider />

            
        
        </Container>

    )
}

export default Servicee
