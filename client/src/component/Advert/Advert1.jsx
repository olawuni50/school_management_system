import React from "react"
import {Typography, Container} from "@mui/material"
import styled from "styled-components"
import img from "../../Images/book.svg"
import {makeStyles} from "@mui/styles"
import {createTheme} from "@mui/material/styles"

const theme = createTheme()

const useStyles = makeStyles({
    advert:{
        display:"flex",
        justifyContent:"space-between",
        [theme.breakpoints.down("sm")]:{
            flexDirection:"column",
            marginTop:"12rem"
        }
    }

})


const Image = styled.img`   
width: 40%;
margin-right:2rem;

@media screen and (max-width: 768px){
    width: auto;
    margin-bottom:1.5rem;
    margin-top:1rem;
}
`


const Advert = () =>{
    const classes = useStyles()

    return(
        <>
        <Container maxWidth="lg">

        <div className={classes.advert}>
        <Typography variant="h5" style={{textAlign:"justify", color:"#896eff"}}>We are a choosen generation, a royal priesthood, We train and educate your 
        your ward with our world class facilities</Typography>

        <Image src={img} alt="student"/>
        </div>

        </Container>
        
        </>

    )
}

export default Advert