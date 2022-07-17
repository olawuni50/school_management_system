import {makeStyles} from "@mui/styles"
import {createTheme} from "@mui/material/styles"
import img from "../Images/ae.jpg"

const theme = createTheme()

export const useStyles = makeStyles({
    formm:{
        backgroundImage:`url(${img})`,
        backgroundPosition: 'center', 
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat',
        position:"relative"
    },
    container:{       
        padding:theme.spacing(2),
        background: "rgba(132, 146, 171, 0.23)",
        borderRadius: "16px",
        marginTop:"2rem",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(4px)",
        // -webkitBackdropFilter: "blur(4px)",
        border: "1px solid rgba(132, 146, 171, 0.34)",
        // position:"absolute"

    },
    
    head:{
        textAlign:"center"
    },

    form:{
        padding:theme.spacing(3),
        
    },
})