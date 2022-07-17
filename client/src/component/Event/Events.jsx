import React from "react"
import {Container, Typography, Divider} from "@mui/material"
import img from "../../Images/ppp.jpg"
import img1 from "../../Images/pp (3).jpg"
import img2 from "../../Images/pu.jpg"
import styled from "styled-components"
import {makeStyles} from "@mui/styles"
import {createTheme} from "@mui/material/styles"

const theme = createTheme()

const useStyles = makeStyles({
    event:{
        display:"flex",
        justifyContent:"space-between",
        [theme.breakpoints.down("sm")]:{
            flexDirection:"column"
        }

    }
})

const Image = styled.img`
width: 20%;
margin-right:2rem;


@media screen and (max-width: 768px){
    width: auto;
    margin-bottom:1.5rem
    
`

const Event = () =>{
    const classes = useStyles()
    
    return(
        <>
        <Container maxWidth="lg">
            <Typography variant="h4" style={{marginTop:"2rem"}} data-aos="zoom-in-down">Event</Typography>
            <Typography variant="body1" style={{marginBottom:"5px"}} data-aos="zoom-in-down">Upcoming education events to feed your brain</Typography>

            <Divider style={{marginBottom:"3rem"}}/>

            <div className={classes.event} data-aos="fade-right">

            <div style={{color:"#ff586e"}}>
            <Typography variant="h2">11</Typography>
            <Typography variant="h6">February</Typography>
            </div>

            <Divider orientation="vertical" flexItem style={{marginLeft:"2rem"}} />


            <div>
            <Typography variant="h5" style={{marginLeft:"3rem"}} >Inter house Sport</Typography>
            <Typography variant="body1" style={{width:"90%", marginLeft:"2rem"}}>This event will take place at the school premises. All students must participate
            and interested parents are allowed to come and witness the occassion, we have five houses, blue, yellow, green
            and Red house, winner will be presented with award by the principal</Typography>
            </div>

            <Divider orientation="vertical" flexItem style={{marginRight:"2rem"}} />

            <Image src={img} alt="inter house sport"/>

            </div>

            <Divider style={{marginBottom:"3rem", marginTop:"3rem"}}/>

            <div className={classes.event} data-aos="fade-right">

            <div style={{color:"#ff586e"}}>
            <Typography variant="h2">20</Typography>
            <Typography variant="h6">March</Typography>
            </div>

            <Divider orientation="vertical" flexItem style={{marginLeft:"2rem"}} />


            <div>
            <Typography variant="h5" style={{marginLeft:"3rem"}} >Visiting Day</Typography>
            <Typography variant="body1" style={{width:"90%", marginLeft:"2rem"}}>This event will take place at the school premises. All students must participate
            and interested parents are allowed to come and visit there ward</Typography>
            </div>

            <Divider orientation="vertical" flexItem style={{marginRight:"2rem"}} />

            <Image src={img1} alt="inter house sport"/>

            </div>


            <Divider style={{marginBottom:"3rem", marginTop:"3rem"}}/>

            <div className={classes.event} style={{marginBottom:"2rem"}} data-aos="fade-right">

            <div style={{color:"#ff586e"}}>
            <Typography variant="h2">15</Typography>
            <Typography variant="h6">April</Typography>
            </div>

            <Divider orientation="vertical" flexItem style={{marginLeft:"2rem"}} />


            <div>
            <Typography variant="h5" style={{marginLeft:"3rem"}} >Parent and Teacher Meeting</Typography>
            <Typography variant="body1" style={{width:"90%", marginLeft:"2rem"}}>This event will take place at the school premises. All students must participate
            and all parents are enjoined to take part in this event, as issues concerning new school fees and there ward/wards
            will be discussed.</Typography>
            </div>

            <Divider orientation="vertical" flexItem style={{marginRight:"2rem"}} />

            <Image src={img2} alt="inter house sport"/>

            </div>



        </Container>
        </>
    )
}

export default Event