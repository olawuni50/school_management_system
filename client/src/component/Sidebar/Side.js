import React from "react"
import {Container, Typography} from "@mui/material"
import {makeStyles} from "@mui/styles"
import {createTheme} from "@mui/material/styles"
import Clear from "@mui/icons-material/Clear"

const theme = createTheme()

const useStyles = makeStyles({
    container:{
        position:"fixed",
        zIndex:"999",
        width:"80%",
        height: "80%",
        backgroundColor:"#05386b",
        display:"grid",
        alignItems:"center",
        left:"0",
        transition: "0.3s ease-in-out",
        opacity: `${({isOpen}) => (isOpen ? '100%': "0")}`,
        top: `${({isOpen}) => (isOpen ? '0' : '-100%')}`
    },

 
        menu:{
            display:"grid",
            gridTemplateColumns:"1fr",
            gridTemplateRows:"repeat(6, 80px)",
            textAlign:"center",
            [theme.breakpoints.down("sm")]:{
                gridTemplateRows:"repeat(6, 60px)",
            }
        },

        clear:{
            position:"absolute",
            top: "1.2rem",
            right: "1.5rem",
            background:"transparent",
            fontSize: "2rem",
            cursor:"pointer",
            outline: "none",
            color:"#fff"
        }

})


const Side = ({isOpen, toggle}) =>{
    const classes = useStyles()
    
    return(
       <Container isOpen={isOpen} onClick={toggle} className={classes.container}>

                <div className={classes.clear} onClick={toggle}>
               <Clear  />
               </div>

                <div className={classes.menu}>
            <Typography className={classes.typo} onClick={toggle} variant="button">Home</Typography>
            <Typography className={classes.typo} onClick={toggle} variant="button" >Services</Typography>
            <Typography className={classes.typo} onClick={toggle} variant="button" >About</Typography>
            <Typography className={classes.typo} onClick={toggle} variant="button" >Contact</Typography>
            </div>
       </Container>
    )
}

export default Side



