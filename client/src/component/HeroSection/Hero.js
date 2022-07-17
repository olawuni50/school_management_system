import React from "react"
import {Link} from "react-router-dom"
import {Button} from "@mui/material"
import {HeroContainer, HeroWrapper, HeroText, HeroHead, HeroHead2,
HeroP, HeroImage, Image} from "./HeroStyles"
import {makeStyles} from "@mui/styles"
import { createTheme } from '@mui/material/styles'
import img from "../../Images/1.png"
import {Facebook, Twitter, LinkedIn, Instagram} from "@mui/icons-material"
import TextTransition, { presets } from "react-text-transition";


const theme = createTheme()

const useStyles= makeStyles({ 
    container:{
            color:"#fff"
    },

    button:{
        [theme.breakpoints.down('sm')]:{
         marginLeft: theme.spacing(10)
        }
    },
    
})

const TEXTS = [
    "Smarter",
    "Faster",
    "Cleaner",
  ];

const Hero =()=>{
    const classes = useStyles()

    const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
   
    return(
        <div>
            <HeroContainer className={classes.container}>
           
                <HeroWrapper>
                    <HeroText data-aos="fade-left">
                        <HeroHead> WELCOME TO CALCG</HeroHead>
                        <div>
         <HeroHead2 style={{display:"flex", justifyContent:"space-between"}}>Work <span style={{color:"#896eff"}}>
             <TextTransition text={ TEXTS[index % TEXTS.length] } springConfig={ presets.gentle }/></span> With CalcG</HeroHead2>
         </div>
                        <HeroP>Digitalise your school with our complete school management system, we digitalise your work
                            so that you can focus on teaching
                        </HeroP>
                        <div style={{color: "#fff", marginBottom:"2rem", cursor:"pointer",
                         display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                            <Facebook style={{marginLeft:"1rem"}}/>
                            <Twitter />
                            <LinkedIn />
                            <Instagram style={{marginRight:"1rem"}}/>
                        </div>
                        <Button variant="contained" component={Link} to="/auth"
                         style={{marginLeft:"4rem", textTransform:"none"}}>Get Started</Button>
                    </HeroText>

                    <HeroImage data-aos="fade-right">
                        <Image src={img}/>
                    </HeroImage>
                </HeroWrapper>
                
            </HeroContainer>
        </div>
    )
}

export default Hero