import React from 'react'
import NavDash from './NavDash'
import {Grid} from '@mui/material'
import LeftDash from './LeftDash'
import HomeDash from './HomeDash'
import Paginations from './Paginations'
import {Outlet} from "react-router-dom"
import {makeStyles} from '@mui/styles'
import {createTheme} from "@mui/material/styles"

const theme = createTheme()

const useStyles = makeStyles({
    left:{
        [theme.breakpoints.down("sm")]:{
            display:"none"
        }
    }
})



const DashBoard = () => {
    const classes = useStyles()


    return (
        <div>
            <NavDash/>
            <Grid container spacing={2}>
                <Grid item sm={3} xs={2} className={classes.left}>
                    <LeftDash  />
                    </Grid>

                    <Grid item sm={9} xs={12}>
                        <HomeDash />
                        {/* <Paginations /> */}
                        <Outlet/>
                        </Grid>
                     
            </Grid>
            
        </div>
    )
}

export default DashBoard
