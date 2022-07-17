import React from 'react'
import { HeroContainer, HeroWrapper, HeroText, HeroHead } from './HeroStyles'



const HeroSection = () => {
    return (
        <HeroContainer>
            <HeroWrapper>
                <HeroText>
                    <HeroHead style={{marginTop:"10rem"}}>Services</HeroHead>
                    
                </HeroText>
            </HeroWrapper>
        </HeroContainer>
    )
}

export default HeroSection
