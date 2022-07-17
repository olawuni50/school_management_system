import React from "react";
import styled from "styled-components"
import {makeStyles} from "@mui/styles"
import {createTheme} from "@mui/material/styles"

const theme = createTheme()

export const useStyles = makeStyles({
    container:{
        display:"flex",
        justifyContent:"space-evenly",
        marginBottom:theme.spacing(5),
        marginTop:theme.spacing(5),
        [theme.breakpoints.down('sm')]:{
            flexDirection:"column"
        }
    },

    text:{
        marginLeft:"2.5rem", 
        width:"70%",
        [theme.breakpoints.down('sm')]:{
            width:"100%",
            marginTop:theme.spacing(5),
            marginLeft:"1px"
        }
    },

    text2:{
        width:"70%",
        [theme.breakpoints.down("sm")]:{
            width:"auto"
        }
    },

    aboutContainer:{
        backgroundColor:'#896eff',

    },
    images:{
        display:"grid",
        gridTemplateColumns:"1fr 1fr",
        [theme.breakpoints.down('sm')]:{
            gridTemplateColumns:"1fr"
        }
    },
    head:{
        flexDirection:"column",
        fontWeight:"bold", 
        marginBottom: "1rem", 
        textAlign:"center", 
    }

})

export const Image = styled.img`
width:250px;
height:250px;
border-radius: 50%
`

export const Image2 = styled.img`
border-radius:71% 88% 10% 10% / 0% 52% 2% 1%;
width:250px;
height:250px;
`