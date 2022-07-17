import {makeStyles} from "@mui/styles"
import { createTheme } from '@mui/material/styles'

const theme = createTheme()

export const useStyles = makeStyles({
      toolBar:{
        backgroundColor: "#e1e1f0"
      },

      menu:{
        display:"flex",
        justifyCotent:"space-between",
        placeSelf:"center"
      },

      menu1:{
        marginLeft:theme.spacing(40),
        placeItems:"center",
        color: "#1f2471",
        textDecoration:"none",
      cursor: "pointer", 
      transition: "all 300ms cubic-bezier(0.075, 0.82, 0.165, 1)",
      borderBottomWidth: "2px",
      borderLeftWidth: "2px",
      borderTopWidth: "2px",
      borderRightWidth: "2px",
      '&::before':{
        content:"",
        pointerEvents:"none",
        position:"abosolute",
        border: "0px solid transparent",
      },
      '&::after':{
        content:"",
        pointerEvents:"none",
        position:"abosolute",
        border: "0px solid transparent",
      },

      '&:hover::before':{
        borderColor:"#fff",
        transition:"borderColor 0s, width 0.3s, height 0.3s",
        width:"100%",
        height:"100%"
      },

      '&:hover::after':{
        borderColor:"#fff",
        transition:"borderColor 0s, width 0.3s, height 0.3s",
        width:"100%",
        height:"100%"
      },

      '&:hover::after':{
        transitionDelay: "0s, 0.3s, 0s"
      },      
                                     
      [theme.breakpoints.down("sm")]:{
        display:"none"
      },

      // tablet
    [theme.breakpoints.down('md')]:{
      marginLeft:theme.spacing(8)
    }
    },

    typo:{
      "&:hover":{
        bacgroundColor:"#e1e1f0",
        padding:"10px"
      },


    },

    button:{
      marginLeft:theme.spacing(30),
      display:"flex",
      [theme.breakpoints.down('sm')]:{
        marginLeft:theme.spacing(13)
      }
    },

    menuBar:{
      color:"#1f2471",
      // display:"flex",
    [theme.breakpoints.up("sm")]:{
      display:"none"
    }
    },

    logIn:{
      // marginLeft:theme.spacing(10),
      display:"flex",
      justifyContent:"space-between",
      [theme.breakpoints.down('sm')]:{
        marginLeft:theme.spacing(9)
      },

      [theme.breakpoints.up('md')]:{
        marginLeft:theme.spacing(30)
      },

     
    },

    buttonLogin:{
      marginLeft:"10px"
      
    }
 })

