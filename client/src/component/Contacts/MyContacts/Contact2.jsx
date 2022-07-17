import React from "react"
import {Container, Typography, Button, TextField} from "@mui/material"
import {makeStyles} from "@mui/styles"
import {createTheme} from "@mui/material/styles"
import img from "../../Images/subscribe.svg"
import styled from "styled-components"

const theme = createTheme()

const useStyles = makeStyles({
    // contact:{
    //     // backgroundImage:`url(${img})`,
    //     backgroundSize:"cover",
    //     height:"300px"
    // },

    container:{
        marginTop:"2rem"
    },

    contact:{
        display:"flex",
        justifyContent:"space-between",
        [theme.breakpoints.down('sm')]:{
            flexDirection:"column"
        }
    }

})


const Image = styled.img`
width: 30%;
margin-right:2rem;

@media screen and (max-width: 768px){
    width: auto;
    margin-bottom:1.5rem
}
`


const Contact2 = () =>{
    const classes = useStyles()

    return(
        <div style={{marginBottom:"2rem", marginTop:"3rem"}}>
        <Container maxWidth="lg" >

            <div className={classes.contact}>
            <div className={classes.container} style={{width:"100%"}}>
            <Typography variant="h5" style={{marginTop:"8rem"}}>Subscribe to our Newsletter</Typography>
            <TextField style={{marginTop:"10px"}} size="small" placeholder="Enter email" />
            <Button variant="contained" style={{marginTop:"10px", marginLeft:"1rem", padding:"5px 10px"}}>Subscribe</Button>
            </div>

            <Image src={img} alt="subscribe" style={{marginTop:"3rem" }} />
            </div>

        </Container>
        </div>

    )
}

export default Contact2