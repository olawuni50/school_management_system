import React from 'react'
import { HeroContainer, HeroWrapper, HeroText, HeroHead } from './HeroStyles'
import {Link} from "react-router-dom"
import {Typography} from "@mui/material"

const HeroAbout = () => {
    return (
        <HeroContainer>
        <HeroWrapper>
            <HeroText>
                <HeroHead style={{marginTop:"10rem"}}>About Us</HeroHead>
                {/* <div style={{display:"flex", marginTop:"15rem", textDecoration:"none"}}>
                <Typography variant="button" component={Link} to="/">Home/</Typography>
                <Typography variant="button">About</Typography>
                </div> */}
                
            </HeroText>
        </HeroWrapper>
    </HeroContainer>
    )
}

export default HeroAbout
