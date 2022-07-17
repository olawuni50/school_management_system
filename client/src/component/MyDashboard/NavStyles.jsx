import { makeStyles} from "@mui/styles"
import {createTheme } from '@mui/material/styles'

const theme = createTheme()

export const useStyles = makeStyles({
    typo:{
        textDecoration:"none",
        [theme.breakpoints.down("sm")]:{
            display:"none"
        },
    },

    icon:{
        [theme.breakpoints.up('sm')]:{
            display:"none"
        }
    },

    search:{
        display:"flex",
        alignItems:"center",
        backgroundColor: "#f1f2f6",
        borderRadius:"10px",
        width:"30%",
        justifyContent:"center",
        marginLeft:theme.spacing(10),
        [theme.breakpoints.down("sm")]:{
            width:"50%",
            marginLeft:theme.spacing(4)
        }

    },
    toolbar:{
        display:"flex",
        justifyContent: "space-between",
        // alignItems:"center",
        backgroundColor: "#e1e1f0",
       
    },

    welcome:{
        backgroundColor:"#896eff",
        padding:theme.spacing(1),
        color:"#fff",
    },

    input:{
        paddingLeft:"1rem"
    },

    myMenu:{
        color:"#333",
        // fontSize:"2rem",
        [theme.breakpoints.up("sm")]:{
            display:"none",
        },
    },

    mySearch:{
        [theme.breakpoints.down("sm")]:{
            display:"none",
        }
    },

    log:{
        [theme.breakpoints.up("sm")]:{
            display:"none"
        }
    },

    head:{
        textDecoration:"none",
        fontWeight:"bolder",
        [theme.breakpoints.down('sm')]:{
            display:"none"
        }
    }

})