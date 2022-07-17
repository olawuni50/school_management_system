import React from "react"
import {Container, Button, Typography} from "@mui/material"
import {Image, useStyles} from '../AboutStyles'
import img from "../../Images/a3.jpg"




const About2 = () =>{
  const classes = useStyles()
  return(
    <div style={{backgroundColor:"#896eff", color:"#fff"}}>

    <Container maxWidth="lg">
      <div className={classes.container}>
     <div style={{padding: "1rem"}} data-aos="fade-right">
      <Button variant="outlined" style={{marginTop:"1rem", color:"#fff"}}>Our Approach</Button>
      <Typography variant="h6" style={{fontWeight:"bold", marginTop:"10px"}} >Result Oriented</Typography>
      <Typography variant="body1" className={classes.text2}>Our works and clients always speak for us, we are result oriented company, that takes priority
      in deliverying bespoke application for your business to make it grow</Typography>
      <Button variant="contained" style={{marginTop:"10px", marginBottom:"2rem"}}>Join Us Today</Button>       
       </div>      

        <div style={{marginTop:"2rem"}} data-aos="fade-left">
        <Image src={img} alt="result oriented" />
        </div>
        
        </div>
     


    
    </Container>
    </div>

  )
}

export default About2























// import React from "react";
// import { Container, Button, Typography } from "@mui/material";
// import { Image } from "../AboutStyles";
// import img1 from "../../Images/a3.jpg";
// import img2 from "../../Images/bs3.jpg";
// import img3 from "../../Images/bs2.jpg";
// import img4 from "../../Images/bs7.jpg";
// import { useStyles } from "../AboutStyles";
// import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

// const About2 = () => {
//   const classes = useStyles();
//   return (
//     <div className={classes.aboutContainer}>
//       <Container maxWidth="lg">

//         {/* <div className={classes.head}> */}
// <Button variant="outlined" style={{textAlign: "center", color:"#fff" }}>
// Our Team
// </Button>

// <Typography variant="button" style={{fontWeight:"bold", textTransform:"none"}} >
// Meet With IT Experts
// </Typography>
// {/* </div>// */}

// <div className={classes.images}>
// <div>
//   <Image src={img1} alt="CEO" />
//   <Typography
//     variant="button"
//     style={{ fontWeight: "bold", color: "#fff" }}
//   >
//     Corey Anderson
//   </Typography>
//   <Typography variant="button" style={{marginBottom:"3rem"}}>CEO/Founder</Typography>
//   <div className={classes.icon}>
//     <Facebook />
//     <Twitter />
//     <LinkedIn />
//     <Instagram />
//   </div>
// </div>
// <Image src={img2} alt="Software Developer" />
// <Image src={img3} alt="Product Designer" />
// <Image src={img4} alt="Back End developer" />
// </div>
        
          
//       </Container>
//     </div>
//   );
// };
// export default About2;


