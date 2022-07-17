import React from 'react'
import { makeStyles} from "@mui/styles"
import {createTheme } from '@mui/material/styles'
import {Container, Typography} from "@mui/material"

const theme = createTheme()

const useStyles = makeStyles({
    container:{
        backgroundColor:"#896eff",
        marginTop:theme.spacing(8),
        color:"#fff"
    },          

})

const HomeDash = () => {
    const classes = useStyles()

    const user = JSON.parse(localStorage.getItem("profile"))


    return (
        <div className={classes.container}>
        <Container maxWidth="lg">
            <Typography variant="h6">Dashboard </Typography>
            <Typography variant="body1" style={{textTransform:"none"}}>CalcG helps tutors and simplify working process...</Typography>
        </Container>
        </div>

    )
}

export default HomeDash
