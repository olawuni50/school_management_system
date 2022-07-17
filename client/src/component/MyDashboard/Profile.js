import React from 'react'
import {Container, Typography} from "@mui/material"

const Profile = () =>{
    const user = JSON.parse(localStorage.getItem("profile"))

    return(
        <Container>
            <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", marginTop:"3rem"}}>
            <Typography variant="button">Name: </Typography>
            <Typography variant="body1">{user?.result?.name} </Typography>
            </div>


            <div style={{display:"grid", gridTemplateColumns:"1fr 1fr"}}>
            <Typography variant="button">Email:</Typography>
            <Typography variant="body1">{user?.result?.email} </Typography>
            </div>

            <div style={{display:"grid", gridTemplateColumns:"1fr 1fr"}}>
            <Typography variant="button">Country:</Typography>
            <Typography variant="body1">{user?.result?.country} </Typography>
            </div>
            
            <div style={{display:"grid", gridTemplateColumns:"1fr 1fr"}}>
            <Typography variant="button">Phone Number:</Typography>
            <Typography variant="body1">{user?.result?.phoneNumber} </Typography>
            </div>
            <div style={{display:"grid", gridTemplateColumns:"1fr 1fr"}}>
            <Typography variant="button">School:</Typography>
            <Typography variant="body1">{user?.result?.school} </Typography>
            </div>

        </Container>
    )
}

export default Profile