import React from 'react'
import { InfoContainer, InfoWrapper, InfoHead } from './InfoElement'
import {Paper, Typography} from "@mui/material"
import {CountUp} from "react-countup";
import VisibilitySensor from "react-visibility-sensor"
import {School, Mood, Person} from "@mui/icons-material"
import {makeStyles} from "@mui/styles"
import { createTheme } from '@mui/material/styles'

const theme = createTheme()


const useStyles = makeStyles({
    paper:{
    padding:"2rem", 
    marginTop:"5rem",
     marginBottom:"5rem",
     marginRight: "1.3rem",
     [theme.breakpoints.down("sm")]:{
         marginTop:"1rem",
         marginBottom: "15px"
     }
    },

    text:{
        textAlign:"center"
    }

})


const InfoRead = () => {
    const classes = useStyles()
   return (
        <InfoContainer> 
            <InfoWrapper>
                <Paper elevation={6} className={classes.paper}  data-aos="fade-right">

                    <School style={{fontSize:"4rem", display:"inline-block", width:"100%", color:"#ff586e"}} />

                    <Typography variant="h6" className={classes.text}>Number of Schools</Typography>

                    <InfoHead><CountUp end={1578} duration={5} redraw={true}>
                        {({countUpRef, start}) => (
                            <VisibilitySensor onChange={start} delayedCall>
                                <span ref={countUpRef}/>
                                </VisibilitySensor>
                        )}
                        </CountUp>+</InfoHead>
                    
                </Paper>

                <Paper elevation={6}  className={classes.paper} data-aos="fade-right">

                     <Mood style={{fontSize:"4rem", display:"inline-block", width:"100%" , color:"#029e76"}} />

                    <Typography variant="h6" className={classes.text} >Certified Clients</Typography>

                    <InfoHead><CountUp end={2980} duration={5} redraw={true}>
                        {({countUpRef, start}) => (
                            <VisibilitySensor onChange={start} delayedCall>
                                <span ref={countUpRef}/>
                                </VisibilitySensor>
                        )}
                        </CountUp>+</InfoHead>
                   
                </Paper>
                
                <Paper elevation={6}  className={classes.paper} data-aos="fade-right">

                    <Person style={{fontSize:"4rem", display:"inline-block", width:"100%", color:"#ffa808"}} />
                    <Typography variant="h6" className={classes.text} > Number of Students </Typography>

                   <InfoHead><CountUp end={8699} duration={5} redraw={true}>
                        {({countUpRef, start}) => (
                            <VisibilitySensor onChange={start} delayedCall>
                                <span ref={countUpRef}/>
                                </VisibilitySensor>
                        )}
                        </CountUp>+</InfoHead>
                    
                </Paper>
            </InfoWrapper>
            
        </InfoContainer>
    )
}

export default InfoRead
