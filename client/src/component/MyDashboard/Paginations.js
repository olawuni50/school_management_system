import React, {useEffect} from 'react'
import {Pagination, PaginationItem, Stack} from "@mui/material"
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {getGrades} from '../../actions/grades'

const Paginations = ({page}) =>{
    const dispatch = useDispatch()
    const {numberOfPages} = useSelector((state) => state.grades)

    useEffect(() => {
        if(page) dispatch(getGrades(page))
        
    }, [dispatch, page])

     
    return(
        
            <Pagination count={numberOfPages} color="primary" page={Number(page) || 1} renderItem ={(item) =>(
                <PaginationItem {...item} component={Link} to={`/grades?page=${item.page}`} />
            )} />
        

    )
}

export default Paginations