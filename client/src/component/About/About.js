import React from 'react'
import NavBars from '../Navbar/NavBars'
import HeroAbout from './Hero/HeroAbout'
import About1 from "./Abouts/About1"
import About2 from "./Abouts/About2"
import AboutValues from "./Abouts/AboutValues"
import AboutStaff from "./Abouts/AboutStaff"
import AboutValue2 from "./Abouts/AboutValue2"

const About = () => {
    return (
        <div>
            <NavBars />
            <HeroAbout />
            <About1 />
            <About2 />
            <AboutValues />
            <AboutStaff />
            <AboutValue2 />
            
        </div>
    )
}

export default About
