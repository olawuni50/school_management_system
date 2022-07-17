import React, {useState} from "react"
import Hero from "./HeroSection/Hero"
import Info2 from "./InforSection2/Info"
import Info from "./InfoSection/Info"
import Advert1 from "./Advert/Advert1"
import Events from "./Event/Events"
// import InfoRead from "./InfoReading/InfoRead"
import NavBars from "./Navbar/NavBars"
import { makeStyles } from "@mui/styles"
import {createTheme} from "@mui/material/styles"

const theme = createTheme()

const useStyles = makeStyles({
    side:{
        [theme.breakpoints.up("sm")]:{
            display:"none"
        }
    }

})


const Home = () =>{
    const classes = useStyles()

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () =>{
        setIsOpen(!isOpen)
    }

    return (
        <div>

      
       <NavBars toggle={toggle} />
       <Hero/>
       <Info/>
     
       {/* <InfoRead /> */}
        <Info2/>  
        <Advert1 />   
        <Events />   
  
        </div>


    )
}

export default Home
