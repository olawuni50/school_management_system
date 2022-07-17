import {CREATE, FETCH_ALL, UPDATE, DELETE, FETCH_BY_SEARCH} from "../constants/actionTypes"

export default (state = [], action) =>{
    switch(action.type){
        case  FETCH_ALL:
            return {
                ...state,
                grades: action.payload.data,
                // currentPage: action.payload.currentPage,
                // numberOfPages: action.payload.numberOfPages,
            }

        case FETCH_BY_SEARCH:
            return {
                ...state, grades: action.payload
            }

        case CREATE:
            return {...state, grades: [...state.grades, action.payload]}
        
        case UPDATE:
            return {...state, grades:state.grades.map((grade) => grade._id === action.payload._id ? action.payload : grade)}

        case DELETE:
            return {...state, grades: state.grades.filter((grade) => grade._id !== action.payload)}

        default:
            return state
    }
}