import React from "react"
import {Container, Typography, Divider, TextField, Button, Box} from "@mui/material"
import {PhoneEnabled, Email, LocationOn} from '@mui/icons-material';
import {makeStyles} from "@mui/styles"
import {createTheme} from "@mui/material/styles"

const theme = createTheme()

const useStyles = makeStyles({
    myContact:{
        display:"flex",
        justifyContent:"space-between",
        [theme.breakpoints.down('sm')]:{
            flexDirection:"column"
        }
    },
    divider1:{
        [theme.breakpoints.down('xs')]:{
            display:"none",
            
        }
    },


})

const MyContact = ()=>{
    const classes = useStyles()
    return(
        <>
        <Container maxWidth="lg">
            <Typography variant="h5" style={{marginTop:"2rem"}}>Contact Info</Typography>
            <Divider />

    <div className={classes.myContact} >        
        <div style={{marginTop:"15px"}}>

            <div style={{marginBottom:"2rem"}}>
            <Typography variant="h6"><PhoneEnabled /> Phone</Typography>
            <Typography variant="body1">08161882454, 08118320256</Typography>
            </div>

            <div style={{marginBottom:"2rem"}}>
            <Typography variant="h6"><Email /> Email</Typography>
            <Typography variant="body1">olawuni50@gmail.com</Typography>
            </div>

            <div style={{marginBottom:"2rem"}}>
            <Typography variant="h6"><LocationOn /> Address</Typography>
            <Typography variant="body1">San Francisco, Califonia</Typography>
            </div>
        </div>

            <Divider orientation="vertical" flexItem className={classes.divider1} style={{color:'#1f2471'}}>
                Calcg
                </Divider>
            
             
            <Box component="form" sx={{'& > :not(style)': { m: 1, width: '35ch' },}} noValidate autoComplete="off" >
            <div style={{display:"flex", flexDirection:"column"}}>
            <TextField label="Name" variant="outlined" style={{marginBottom:"10px"}}/>
            <TextField label="Email" variant="outlined" style={{marginBottom:"10px"}}/>
            <TextField label="Message" multiline rows={4} style={{marginBottom:"10px"}}/>
            <Button variant="contained" size="small"style={{marginBottom:"10px"}}>Send Message</Button>
            </div>
            </Box>
            </div>
           
            
        </Container>
        
        </>
    )
}

export default MyContact