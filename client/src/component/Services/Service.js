import React from 'react'
import NavBars from '../Navbar/NavBars'
import HeroSection from './HeroService/HeroSection'
import Servicee from "./Service1/Servicee"
import Service2 from "./Service1/Service2"

const Services = () => {
    return (
        <div>
            <NavBars/>
            <HeroSection/>
            <Servicee/>
            <Service2 />
        </div>
    )
}

export default Services
