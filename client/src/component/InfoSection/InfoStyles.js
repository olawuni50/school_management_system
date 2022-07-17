import {makeStyles} from "@mui/styles"
import { createTheme } from '@mui/material/styles'
import styled from "styled-components"
import img1 from "../Images/svg-chart.svg"

const theme= createTheme()

 export const useStyles = makeStyles({
     container1:{
         backgroundColor:"faf8f21a"

     },
      container: {
        display:"flex",
        justifyContent:"space-evenly",
        alignItems:"center",
        marginBottom: theme.spacing(3),
        [theme.breakpoints.down('sm')]:{
            flexDirection:"column",
            maxWidth:" 350px"
        }
    },

    icons:{
        padding:"8px", 
        borderRadius:"50%",        
         color:"#fff", 
         backgroundColor:"#ffa808",
         marginLeft:theme.spacing(10),
         marginBottom:theme.spacing(2),
          boxShadow: "3px 3px 4px rgba(1, 0, 0, 0.2)"

    },

    paper:{
        padding:theme.spacing(2),
        margin: theme.spacing(2),
        width: "100%",
        "&:hover":{
            backgroundColor: "#896eff1a",
        }
    },

    top:{
        backgroundImage:`${img1}`
    },

    features:{
        textAlign:"center",
        // marginTop: theme.spacing(10),
        color:"#1f2471",
    },
    
    title:{
        textAlign:"center",
        width:"100%",
        color:"#1f2471",
        fontWeight:"bold",
        marginBottom:theme.spacing(1)

    },

    body:{
        textAlign:"center",
        padding: theme.spacing(0.5),
        color: "#896eff",
        paddingBottom:"1rem",
    },

    button:{
        marginTop: theme.spacing(1)
    }
})


