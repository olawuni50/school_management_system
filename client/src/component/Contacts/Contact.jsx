import React from "react"
import NavBars from '../Navbar/NavBars'
import HeroContacts from "./HeroContact/HeroContacts"
import MyContact from "./MyContacts/MyContact"
import Contact2 from "./MyContacts/Contact2"

const Contact = () =>{
    return(
        
        <>
        <NavBars />
        <HeroContacts />
        <MyContact />
        <Contact2 />
        </>

    )
}

export default Contact