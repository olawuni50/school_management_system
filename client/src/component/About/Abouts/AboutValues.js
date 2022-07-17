import React from 'react'
import {Container, Button, Typography, Paper} from "@mui/material"
import {makeStyles} from "@mui/styles"
import {createTheme} from "@mui/material/styles"

const theme = createTheme()

const useStyles = makeStyles({
    paper:{
        display:"flex",
        justifyContent:'space-between',
        alignItems:"center",
        [theme.breakpoints.down("sm")]:{
            flexDirection:"column"
        },

    }
})

const AboutValues = () => {
    const classes = useStyles()
    return (
        <div>
            <Container maxWidth="lg">
            <Button variant="outlined" style={{marginBottom:"1rem"}}>Our Values</Button>
            
            <div className={classes.paper}>
            <Paper elevetion={6} style={{marginBottom:"2rem", marginRight:"2rem", padding:"1rem"}}>
                <Typography variant="h6" style={{fontWeight:"bold"}}>Authencity</Typography>
                <Typography variant="body1">We are authentic with our approach in making you
                happy, we build long lasting solution for your business to thrive in today's world</Typography>
            </Paper>

            <Paper elevetion={6} style={{marginBottom:"2rem", marginRight:"2rem", padding:"1rem"}}>
                <Typography variant="h6" style={{fontWeight:"bold"}}>Togetherness</Typography>
                <Typography variant="body1">Our togetherness approach makes us the number one in this field
                our team collaborate with yours to bring bespoke applications to your customers</Typography>
            </Paper>

            <Paper elevetion={6} style={{marginBottom:"2rem", marginRight:"2rem", padding:"1rem"}}>
                <Typography variant="h6" style={{fontWeight:"bold"}}>Global</Typography>
                <Typography variant="body1">We make business go global, we optimize your business on search
                engines like google, we create advert campaign for your business</Typography>
            </Paper>
            </div>

            <div className={classes.paper}>
            <Paper elevetion={6} style={{marginBottom:"2rem", marginRight:"2rem", padding:"1rem"}}>
                <Typography variant="h6" style={{fontWeight:"bold"}}>Transparency</Typography>
                <Typography variant="body1">Our transparency approach to your business need is top notch,
                we bring your customer closer to your  </Typography>
            </Paper>

            <Paper elevetion={6} style={{marginBottom:"2rem", marginRight:"2rem", padding:"1rem"}}>
                <Typography variant="h6" style={{fontWeight:"bold"}}>Inspiration</Typography>
                <Typography variant="body1">We are always inspired by your great goal, and we help you actualize
                it.</Typography>
            </Paper>

            <Paper elevetion={6} style={{marginBottom:"2rem", marginRight:"2rem", padding:"1rem"}}>
                <Typography variant="h6" style={{fontWeight:"bold"}}>Service</Typography>
                <Typography variant="body1">We are authentic with our approach in making you
                happy</Typography>
            </Paper>
            </div>
            

            </Container>
            
        </div>
    )
}

export default AboutValues
