import React from 'react'
import {Grid, TextField} from "@mui/material"
import { makeStyles} from "@mui/styles"
import {createTheme } from '@mui/material/styles'

const theme = createTheme()

const useStyles = makeStyles({

    text: {
        marginBottom:theme.spacing(2),
        
    }
})


const Input = ({name, label, handleChange, autoFocus, value}) => {

    const classes = useStyles()

    return (

       <Grid item xs={12}>
           
            <div  className={classes.text}>
           <TextField name={name} onChange={handleChange} value={value} required
              variant="outlined" label={label} autoFocus={autoFocus} type="number" />
           </div>


       </Grid>
    )
}

export default Input
