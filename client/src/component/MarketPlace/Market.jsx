import React from "react"
import NavBars from '../Navbar/NavBars'
import HeroMarket from "./HeromarketPlace/HeroMarket"
import MarketContent from "./MarketContent"


const Market =()=>{
    return(
        <div>
            <NavBars />
            <HeroMarket />
            <MarketContent />

        </div>
    )
}

export default Market