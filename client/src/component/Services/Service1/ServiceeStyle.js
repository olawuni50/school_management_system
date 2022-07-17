import React from "react"
import {makeStyles} from "@mui/styles"
import {createTheme} from "@mui/material/styles"

const theme = createTheme()

export const useStyles = makeStyles({
    head:{
        display:"flex",
         justifyContent:"space-between",
          alignItems:"center",
          marginBottom:"2.5rem",
          [theme.breakpoints.down('sm')]:{
              flexDirection:"column"
          }
    },   
    
    top:{
        width:"90%",
        marginRight:"2.5rem",
        [theme.breakpoints.down("sm")]:{
            width:"100%",
            marginRight:"1px"
        }

    },

    content:{
        display:"flex",
        justifyContent:"space-evenly",
        alignItems:"center",
        [theme.breakpoints.down("sm")]:{
            flexDirection:"column"
        }
    },

    paper:{
        padding:theme.spacing(2),
        margin: theme.spacing(2),
        width: "100%",
        "&:hover":{
            backgroundColor: "#896eff1a",
        }
    },

    icons:{
        padding:"8px", 
        borderRadius:"50%",        
         color:"#fff", 
         backgroundColor:"#ffa808",
         marginLeft:theme.spacing(10),
         marginBottom:theme.spacing(2),
          boxShadow: "3px 3px 4px rgba(1, 0, 0, 0.2)",
    },

    number:{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        backgroundColor:"#1f2471",
        color:"#fff",
        marginTop:theme.spacing(5),        
    },

    number1:{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        // paddingTop:theme.spacing(4),
        paddingBottom:theme.spacing(5),
        [theme.breakpoints.down("sm")]:{
            flexDirection:"column"
        }
    },

    contact:{
        marginTop:"2rem", 
        marginBottom:"2rem", 
        display:"flex", 
        justifyContent:"space-between",
         alignItems:"center",
         [theme.breakpoints.down("sm")]:{
             flexDirection:"column"
         }
    }

})