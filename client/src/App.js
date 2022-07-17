import './App.css';
import React, {useState, useEffect} from "react"
import Home from './component/Home';
import Auth from './component/Auths/Auth';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import {useDispatch} from "react-redux"
import Footer  from './component/FooterSection/Footer';
import DashBoard from './component/MyDashboard/DashBoard'
import GradeList from "./component/MyDashboard/Grade/GradeList"
import Profile from "./component/MyDashboard/Profile"
import Service from "./component/Services/Service"
import Contact from "./component/Contacts/Contact"
import About from "./component/About/About"
import Market from "./component/MarketPlace/Market"
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom"
import AddForm from './component/MyDashboard/AddFormDash/AddForm';
import {getGrades} from "./actions/grades"


const theme = createTheme({
  typography: {
    fontFamily: [
      'Alegreya Sans',
      'sans-serif'
    ].join(','),
    textTransform:"none"
  },
  button:{
    textTransform:"none"
  }
})



function App() {
  const [currentId, setCurrentId] = useState(null)
  const dispatch = useDispatch()

  const user = JSON.parse(localStorage.getItem('profile'))


  useEffect (() =>{
        dispatch(getGrades())
  }, [currentId, dispatch])


  return (
<ThemeProvider theme={theme}>

<Router>

    <div>
   <Routes>    

     <Route path="/" exact element= {<Home/>}/>
     <Route path="/service" exact element={<Service />} />
     <Route path="/about" exact element={<About />} />
     <Route path="/contact" exact element={<Contact />} />
     <Route path="/marketplace" exact element ={<Market />} />
    
  
     <Route path="/auth" exact element= {<Auth />}/>
     
     
      <Route path="/dashboard" exact element={<DashBoard/>}>
        <Route path="add-subject" element={<AddForm currentId={currentId} setCurrentId={setCurrentId} />}/>
        <Route path="result" exact element={<GradeList setCurrentId={setCurrentId} />} />
        <Route path="grades/search" exact element={<GradeList setCurrentId={setCurrentId} />} />
        <Route path="profile" exact element={<Profile /> } />
        </Route>
     
      </Routes>
      <Footer/>
    </div>

    </Router>

    </ThemeProvider>
    
  );
}

export default App;
