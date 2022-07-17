import React from "react"
import {Container, Typography, Paper, Button} from "@mui/material"
import {Image2 }from "../AboutStyles"
import img1 from "../../Images/p1.jpg"
import img2 from "../../Images/p21.jpg"
import img3 from "../../Images/p31.jpg"
import img4 from "../../Images/p41.jpg"
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";
import {makeStyles} from "@mui/styles"
import {createTheme} from "@mui/material/styles"

const theme = createTheme()

const useStyles = makeStyles({
    staff:{
        display:"flex",
         justifyContent:"space-between",
          alignItems:"center",
           marginBottom:"2rem",
           [theme.breakpoints.down('sm')]:{
               flexDirection:"column"
           }
    }
})


const AboutStaff = () =>{
    const classes = useStyles()

    return(
        <div style={{backgroundColor:"#e1e1f0"}}>
        <Container maxWidth="lg">
            <Button variant="outlined" size='large' style={{marginTop:"2rem", marginBottom:"2rem"}} >Our Team</Button>
            {/* <Typography variant="button" style={{fontWeight:"bold"}}>Meet Our Core Staff</Typography> */}

            <div className={classes.staff}>
            <Paper elevation={6} style={{border: "2px solid #fff", marginBottom:"1rem", marginBottom:"1rem", borderRadius:"71% 88% 10% 10% / 0% 52% 2% 1%",}}>
            <Image2 src={img1} alt="CEO/Founder" />

            <div style={{textAlign:"center", fontWeight:"bold"}}>
            <Typography variant="h6" style={{fontWeight:"bold"}}>Luke Bryant</Typography>
            <Typography variant="button" style={{fontWeight:"bold"}}>CEO/Founder</Typography>
            </div>

            <div style={{display:"flex", justifyContent:"space-evenly", marginBottom:"1rem", marginTop:"1rem"}}>
            <Facebook />
            <Twitter />
            <Instagram />
            <LinkedIn/>
            </div>
            
            </Paper>

            <Paper elevation={6} style={{border: "2px solid #fff", marginBottom:"1rem", borderRadius:"71% 88% 10% 10% / 0% 52% 2% 1%",}}>
            <Image2 src={img2} alt="Human Resource Manager" />

            <div style={{textAlign:"center", fontWeight:"bold"}}>
            <Typography variant="h6" style={{fontWeight:"bold"}}>Jessica Bryan</Typography>
            <Typography variant="button" style={{fontWeight:"bold"}}>Human Resource Manager</Typography>
            </div>

            <div style={{display:"flex", justifyContent:"space-evenly", marginBottom:"1rem", marginTop:"1rem"}}>
            <Facebook />
            <Twitter />
            <Instagram />
            <LinkedIn/>
            </div>
            
            </Paper>
            <Paper elevation={6} style={{border: "2px solid #fff", marginBottom:"1rem", borderRadius:"71% 88% 10% 10% / 0% 52% 2% 1%",}}>
            <Image2 src={img3} alt="Graphic Designer" />

            <div style={{textAlign:"center", fontWeight:"bold"}}>
            <Typography variant="h6" style={{fontWeight:"bold"}}>Rebecca Leo</Typography>
            <Typography variant="button" style={{fontWeight:"bold"}}>Graphic Designer</Typography>
            </div>

            <div style={{display:"flex", justifyContent:"space-evenly", marginBottom:"1rem", marginTop:"1rem"}}>
            <Facebook />
            <Twitter />
            <Instagram />
            <LinkedIn/>
            </div>
            
            </Paper>

            <Paper elevation={6} style={{border: "2px solid #fff", marginBottom:"1rem", borderRadius:"71% 88% 10% 10% / 0% 52% 2% 1%",}}>
            <Image2 src={img4} alt="Web Developer" />

            <div style={{textAlign:"center", fontWeight:"bold"}}>
            <Typography variant="h6" style={{fontWeight:"bold"}}>James Cleo</Typography>
            <Typography variant="button" style={{fontWeight:"bold"}}>Web Developer</Typography>
            </div>

            <div style={{display:"flex", justifyContent:"space-evenly", marginBottom:"1rem", marginTop:"1rem"}}>
            <Facebook />
            <Twitter />
            <Instagram />
            <LinkedIn/>
            </div>
            
            </Paper>

            
            </div>
        </Container>
        </div>
    )
}

export default AboutStaff