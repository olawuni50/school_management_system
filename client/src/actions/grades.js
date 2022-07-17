import {CREATE, FETCH_ALL, UPDATE, DELETE,FETCH_BY_SEARCH } from "../constants/actionTypes"

import * as api from '../api';

// Action creators
export const getGrades = () => async (dispatch) => {
    try{
        const {data} = await api.fetchGrades()
        console.log(data)

        dispatch({
            type: FETCH_ALL,
            payload: data
        })
    } catch(err){
        console.log(err)
    }
}

export const getStudentBySearch = (searchQuery) => async (dispatch) =>{
    try{
        const {data: {data}} = await api.fetchStudentBySearch(searchQuery)

        dispatch({type: FETCH_BY_SEARCH, payload: data})
        
    } catch(error){
        console.log(error)
    }
}
export const createGrade = (grade) => async (dispatch) =>{
    const config = {
        headers:{
            'Content-Type': 'application/json'
        }
    }
    try{
        const res = await api.createGrade(grade, config);

        dispatch({
            type:CREATE,
            payload: res.data.data
        })
    } catch(err){
        console.log(err)
    }
}

export const updateGrade = (id, grade) => async(dispatch) =>{
    try {
        const res = await api.updateGrade(id, grade)

        dispatch({
            type: UPDATE,
            payload: res.data
        })
    } catch (error) {
        console.log(error)        
    }
}

export const deleteGrade = (id) => async(dispatch) =>{
    try {
        await api.deleteGrade(id);

        dispatch({
            type: DELETE,
            payload:id
        })
    } catch(error){
        console.log(error)
    }
}