import React from "react"
import {useSelector} from "react-redux"
import GradeCard from "./GradeCard"
import {Grid, CircularProgress, Paper} from "@mui/material"
import {useNavigate, useLocation} from 'react-router-dom'
import Paginations from "../Paginations"

function useQuery(){
    return new URLSearchParams(useLocation().search)
  }

const GradeList = ({setCurrentId}) =>{
    // used to fetch data from redux
    const {grades} = useSelector((state) => state.grades)
    console.log(grades)
    const user = JSON.parse(localStorage.getItem("profile"))
    const navigate = useNavigate()
    const query = useQuery()
    const page = query.get('page') || 1
 

    return(
        !grades?.length ? <CircularProgress /> : (
            <Grid container alignItems="stretch" spacing={3}>
                
                    {
                        grades.map((grade) =>(
                            
                                <Grid key = {grade._id} item xs={12} sm={6}>
                                {(user?.result?.googleId === grade?.creator || user?.result?._id  === grade?.creator) && (
                                <GradeCard grade={grade} setCurrentId= {setCurrentId}  />     
                                    )}                         
                            </Grid>
                            

                        ))
                    }
                    
                        {/* <Paginations page={page} /> */}
                    
               
               
            </Grid>
        )
        // <>
        // <GradeCard/>
        // </>
    )
}

export default GradeList