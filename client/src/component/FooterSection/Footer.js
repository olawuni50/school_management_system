// import React from 'react'
// import {Container, Typography} from "@mui/material"
// import {makeStyles} from "@mui/styles"
// import { createTheme } from '@mui/material/styles'
// import Business from '@mui/icons-material/Business';
// import Call from '@mui/icons-material/Call';
// import AccessTime from '@mui/icons-material/AccessTime';
// import Email from '@mui/icons-material/Email';

// const theme = createTheme()

// const useStyles = makeStyles({
//     all:{
//         background: "#5543d1",
//         color:"#fff",
//         height:"100%"
      
//     },

//     footer:{
//         display:"flex",
//         alignItems:"center",
//     },

//     icons:{
//         marginRight:theme.spacing(1),
//         backgroundColor:"#ffffff",
//         color:"#5543d1",
//         borderRadius: "50%",
//         padding:"5px"
    


//     },

//     container: {
//         display: "flex",
//         justifyContent: "space-evenly",
//         alignItems: "center",
//         [theme.breakpoints.down("sm")]:{
//             display:"grid",
//             gridTemplateColumns:"1fr 1fr"
//         }
//       }
// })



// export const Footer = () => {

//     const classes = useStyles()


//     return (
//         <div style={{ height: "300px"}} className={classes.all}>

//         <Container maxWidth="lg">

//             <div  className={classes.container}>

//             <div>
//             <Typography variant="h5" style={{marginTop:"2rem"}}>CalcG</Typography>
//             <Typography variant="h6">We make teaching easy</Typography>
//             </div>

//             <div style={{marginTop:"3rem"}}>
//                 <Typography variant="h6">Links</Typography>
//             <Typography variant="body1">Home</Typography>
//             <Typography variant="body1">About Us</Typography>
//             <Typography variant="body1">Services</Typography>
//             <Typography variant="body1">Sign UP</Typography>
//             </div>

//             <div style={{marginTop:"3rem"}}>

//                 <div className={classes.footer}>
//                     <Business className={classes.icons} style={{fontSize:"2rem"}} />
//             <Typography variant="body1">Address: Washington DC, USA</Typography>
//             </div>

//             <div className={classes.footer}>
//             <Call  className={classes.icons} style={{fontSize:"2rem"}} />
//             <Typography variant="body1">Phone Number: +2348118320256</Typography>
//             </div>

//             <div className={classes.footer}>
//                 <AccessTime  className={classes.icons} style={{fontSize:"2rem"}} />
//             <Typography variant="body1">Time: 24/7 service</Typography>
//             </div>

//             <div className={classes.footer}>
//                 <Email  className={classes.icons} style={{fontSize:"2rem"}} />
//             <Typography variant="body1">Email: Olawuni50@gmail.com</Typography>
//             </div>

//             </div>
            
//             </div>
            
//         </Container>
//         </div>
//     )
// }

// // import React from 'react'
// // import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
// // import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, 
// // FooterLinkItems, FooterLinkTitle, FooterLink, SocialIconLink, SocialIcons,
// // SocialLogo, SocialMedia, WebsiteRights, SocialMediaWrap} from "./FooterElements"
// // import {animateScroll as scroll} from "react-scroll";

// // const Footer = () => {
// //         const toggleHome =()=>{
// //             scroll.scrollToTop()
// //         }
// //         return (
// //             <FooterContainer>
// //                 <FooterWrap>
// //                     <FooterLinksContainer>
// //                         <FooterLinksWrapper>
// //                             <FooterLinkItems>
// //                                 <FooterLinkTitle>I<span style={{color:"crimson", fontStyle:"italic"}}>D</span>ev</FooterLinkTitle>
// //                                     <FooterLink>1234 your address here</FooterLink>
// //                                     <FooterLink>Opening Times</FooterLink>
// //                                     <FooterLink>Monday- Friday: 8am-4pm</FooterLink>
// //                                     <FooterLink>Saturday-Sunday:Closed</FooterLink>
                            
// //                             </FooterLinkItems>
                            
// //                         </FooterLinksWrapper>
    
// //                         <FooterLinksWrapper>
// //                             <FooterLinkItems>
// //                                 <FooterLinkTitle>Quick Link</FooterLinkTitle>
// //                                     <FooterLink to="/">Home</FooterLink>
// //                                     <FooterLink to="/services">Services</FooterLink>
// //                                     <FooterLink to="/about">About</FooterLink>
// //                                     <FooterLink to="/contacts">Contact Us</FooterLink>
                                 
// //                             </FooterLinkItems>
// //                             </FooterLinksWrapper>
// //                             <FooterLinksWrapper>
                            
// //                         </FooterLinksWrapper>
// //                     </FooterLinksContainer>
               
// //                     <SocialMedia>
// //                         <SocialMediaWrap>
// //                             <SocialLogo to="/" onClick={toggleHome}>
// //                             I<span style={{color:"crimson", fontStyle:"italic"}}>D</span>ev
// //                             </SocialLogo>
                            
// //                             <SocialIcons>
// //                                 <SocialIconLink href="/" target="_blank" aria-label="Facebook">
// //                                     <FaFacebook/>
// //                                 </SocialIconLink>
// //                                 <SocialIconLink href="/" target="_blank" aria-label="Instagram">
// //                                     <FaInstagram/>
// //                                 </SocialIconLink>
// //                                 <SocialIconLink href="/" target="_blank" aria-label="Twitter">
// //                                     <FaTwitter/>
// //                                 </SocialIconLink>
// //                                 <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
// //                                     <FaLinkedin/>
// //                                 </SocialIconLink>
// //                             </SocialIcons>
// //                             <WebsiteRights>I<span style={{color:"crimson", fontStyle:"italic"}}>D</span>ev {new Date().getFullYear()} All rights reserved.</WebsiteRights>
// //                         </SocialMediaWrap>
// //                     </SocialMedia>
// //                 </FooterWrap>
// //             </FooterContainer>
// //     )
// // }

// // export default Footer

import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, 
FooterLinkItems, FooterLinkTitle, FooterLink, SocialIconLink, SocialIcons,
SocialLogo, SocialMedia, WebsiteRights, SocialMediaWrap, FooterP} from "./FooterElements"
import {animateScroll as scroll} from "react-scroll";
import {Typography, TextField, Button} from "@mui/material"
const Footer = () => {
        const toggleHome =()=>{
            scroll.scrollToTop()
        }
        return (
            <FooterContainer>  
                <FooterWrap>
                    <FooterLinksContainer>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle>CalcG</FooterLinkTitle>
                                     {/* <FooterLink to ="/">1234 your address here</FooterLink>
                                    <FooterLink to="/">Opening Times</FooterLink>
                                    <FooterLink to="/">Monday- Friday: 8am-4pm</FooterLink>
                                    <FooterLink to="/">Saturday-Sunday:Closed</FooterLink>  */}
                                    <FooterP>Digitalise your school with our complete school
                                         management system</FooterP>
                             
                            </FooterLinkItems>
                            
                        </FooterLinksWrapper>
    
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle>Quick Link</FooterLinkTitle>
                                    <FooterLink to="/">Home</FooterLink>
                                    <FooterLink to="/service">Services</FooterLink>
                                    <FooterLink to="/about">About</FooterLink>
                                    <FooterLink to="/contact">Contact Us</FooterLink>
                                    <FooterLink to="/marketplace">Market Place</FooterLink>
                                 
                            </FooterLinkItems>
                            </FooterLinksWrapper>
                            <FooterLinksWrapper>
                            
                        </FooterLinksWrapper>
                        
                    </FooterLinksContainer>
               
                    <SocialMedia>
                        <SocialMediaWrap>
                            <SocialLogo to="/" onClick={toggleHome}>CalcG </SocialLogo>
                            
                            <SocialIcons>
                                <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                    <FaFacebook/>
                                </SocialIconLink>
                                <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                                    <FaInstagram/>
                                </SocialIconLink>
                                <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                                    <FaTwitter/>
                                </SocialIconLink>
                                <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
                                    <FaLinkedin/>
                                </SocialIconLink>
                            </SocialIcons>
                            <WebsiteRights>CalcG {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        </SocialMediaWrap>
                    </SocialMedia>
                </FooterWrap>
            </FooterContainer>
    )
}

export default Footer
