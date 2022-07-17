import {makeStyles} from "@mui/styles"
import {createTheme} from "@mui/material/styles"

const theme = createTheme()

export const useStyles = makeStyles({
    paper:{
        padding:"1px 2rem 2rem 2rem",
        width: "60%",
        margin:theme.spacing(4),
        [theme.breakpoints.down("sm")]:{
            width: "100%",
            margin:theme.spacing(1)
        }
    },
    form:{
        marginBottom: theme.spacing(2)
    },
    input:{
        display:"grid",
        gridTemplateColumns:"1fr",
        gridGap:"2",
        width: "100%",
        [theme.breakpoints.down("sm")]:{
           width: "90%"
        },
        gridGap:"10px",
        marginTop:theme.spacing(2)
    },
    head:{
        marginTop:theme.spacing(3),
        display:"grid",
        gridTemplateColumns:"1fr 1fr",
        width: "100%",
        [theme.breakpoints.down("sm")]:{
            width: "auto",
            padding:theme.spacing(2),
         },
        gridGap:"10px",
    },

    select:{
        display:"grid",
        gridTemplateColumns:"1fr 1fr"
    },

    subject:{
        display:"flex",
        justifyContent:"space-evenly"
    }
   
})
