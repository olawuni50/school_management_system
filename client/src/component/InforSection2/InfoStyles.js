import {makeStyles} from "@mui/styles"
import { createTheme } from '@mui/material/styles'
import styled from "styled-components"

const theme= createTheme()

export const useStyles = makeStyles({
    container:{
        // backgroundColor: " #e1e1f0",
        color: "#fff",
        height:"500px"
    },
    
    paper:{
            display:"flex",
            justifyContent: "space-between",
            padding:theme.spacing(5),
            [theme.breakpoints.down("sm")]:{
                flexDirection:"column"
            }
    }
})

export const Image = styled.img`
width: 40%;
margin-right:2rem;

@media screen and (max-width: 768px){
    width: auto;
    margin-bottom:1.5rem
}
`