import axios from "axios"

const API = axios.create({baseURL: 'https://calcg.herokuapp.com/'})
// const API = axios.create({baseURL: 'http://localhost:5000'})

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')){
        req.headers.Authorization= `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }
    return req
})

export const fetchGrades = () => API.get('/grades');
export const fetchStudentBySearch = (searchQuery) => API.get(`grades/search?searchQuery=${searchQuery.search || 'none'}`)
 export const createGrade = (newGrade) => API.post('/grades', newGrade)
 export const updateGrade = (id, updatedGrade) => API.patch(`/grades/${id}`, updatedGrade)
 export const deleteGrade = (id) => API.delete(`/grades/${id}`);

 export const signIn = (formData) => API.post('/user/signin', formData)
 export const signUp = (formData) => API.post('/user/signup', formData)
 
