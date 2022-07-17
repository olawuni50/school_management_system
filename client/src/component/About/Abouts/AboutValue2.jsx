import React from "react"
import {Link} from "react-router-dom"
import {Container, Typography, Button} from "@mui/material"
import {makeStyles} from '@mui/styles'
import {createTheme} from "@mui/material/styles"

const theme = createTheme()

const useStyles = makeStyles({
    value:{
        display:"flex", 
        justifyContent:"space-between", 
        alignItems:"center", 
        marginBottom:"2rem",
        [theme.breakpoints.down('sm')]:{
            flexDirection:"column"
        }

    }

})


const AboutValue2 =()=>{
    const classes = useStyles()
    return(
        <div>
        <Container maxWidth="lg">
            <div className={classes.value}>
            <Typography variant="h5" style={{color:"#896eff"}}>Ready to take your business to the next level?</Typography>
            <Button variant="contained" component={Link} to="/contact">Contact Us</Button>
            </div>
            </Container>
            </div>

    )
}

export default AboutValue2