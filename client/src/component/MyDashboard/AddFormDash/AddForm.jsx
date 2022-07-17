import React, {useState, useEffect} from 'react'
import {Typography, Button, TextField, FormLabel, FormControlLabel, RadioGroup,
    InputLabel, MenuItem, Select, Radio, Box, FormControl, Tab, Paper, Divider} from "@mui/material"
// import {TabContext, TabList, TabPanel} from '@mui/lab'
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import {useNavigate} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import FileBase from "react-file-base64"
import {createGrade, updateGrade} from "../../../actions/grades"
import Input from "./Input"
import {Calculate, Clear} from '@mui/icons-material';
import {useStyles} from "./FormStyles"



const initialState = ({math:"", eng:"", phy:"", chem:"", bio:"",
agric:"", econ:"", studentName:"", session:"2021/2022", acct:"", commerce:"", lit:"",
crs:"", comp:"", civic:"", yor:"", gov:"", term:"First", selectedFile:"", stuClass:"SS One",
test1:"", test2:"", exam:"", engTest1:"", engTest2:"", engExam:"", phyTest1:"", phyTest2:"", phyExam:"", 
chemTest1:"", chemTest2:"", chemExam:"", bioTest1:"", bioTest2:"", bioExam:"", ecoTest1:"", ecoTest2:"", ecoExam:" ",
compTest1:"", compTest2:"", compExam:"", furTest1:"",
furTest2:"", furExam:""})



const AddForm = ({currentId, setCurrentId}) => {
    const classes = useStyles()
    const [course, setCourse] = useState(initialState)
    const [value, setValue] = React.useState('1');

    const dispatch = useDispatch()
    const navigate = useNavigate()

    
    // Used to fetch data from redux
    const grade = useSelector((state) => currentId ? state.grades.grades.find((g) =>g._id === currentId): null)
    
    // Get users profile
    const user = JSON.parse(localStorage.getItem("profile"));


    // use to populate the value to the form
    useEffect (() =>{
        if (grade) setCourse(grade)

    },[grade])


  const handleChangee = (event, newValue) => {
    setValue(newValue);
  };    

    const handleChange = (e) =>{
        setCourse({...course, [e.target.name]: e.target.value});
    }
        

    const submit = (e)=>{
        e.preventDefault()
        
        if (currentId){
            dispatch(updateGrade(currentId, {...course, name: user?.result?.name}))             
        }else{
            dispatch(createGrade({...course, name: user?.result?.name})) 
        }  
        clear()               
        navigate('/dashboard/result')
    }


    const clear = () =>{
        setCurrentId(null)
        setCourse(initialState)
    }

   
    return (
       <>
       <Paper elevation={6} className={classes.paper}>
        <Typography variant="h5" style={{marginTop:"2rem", textAlign:"center"}} >{currentId ? "Edit Subject" : "Add Subject"} </Typography>
                <Divider/>
        
        <form style={{marginTop:"1rem"}} Validate onSubmit={submit} className={classes.form}>

            <FormLabel component="legend" >Choose Term</FormLabel>
            <RadioGroup row aria-label="term" name="row-radio-buttons-group" value={course.term}
                    onChange={(e) => setCourse({...course, term:e.target.value})} style={{marginBottom:"10px"}}>
                <FormControlLabel value="First" control={<Radio />}  label="First" />
                <FormControlLabel value="Second" control={<Radio />} label="Second" />
                <FormControlLabel value="Third" control={<Radio />} label="Third" />
            </RadioGroup>

            

            <div className={classes.select}>
            <Box>
                <FormControl  sx={{ minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-label">Session</InputLabel>
                    <Select labelId="demo-simple-select-label" id="demo-simple-select" value={course.session} label="Session"
                        onChange={(e) => setCourse({...course, session:e.target.value})} >
                        <MenuItem value={"2021/2022"}>2021/2022</MenuItem>
                        <MenuItem value={"2022/2023"}>2022/2023</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            

            <Box>
                <FormControl  sx={{ minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-label">Class</InputLabel>
                    <Select labelId="demo-simple-select-label" id="demo-simple-select" value={course.stuClass} label="Session"
                        onChange={(e) => setCourse({...course, stuClass:e.target.value})} >
                        <MenuItem value={"SS One"}>SS One</MenuItem>
                        <MenuItem value={"SS Two"}>SS Two</MenuItem>
                        <MenuItem value={"SS Three"}>SS Three</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            </div>


            <div style={{display:"flex", marginTop:"1.5rem"}}>
                <Typography variant="body1" style={{paddingRight:"5px"}}>Student's picture: </Typography>
                <FileBase type="file"  multiple={false} onDone={({base64}) =>setCourse({...course, selectedFile: base64})} style={{margin:"10px 0"}}/>
            </div>

            <Divider />

            
            <div className={classes.head}>
                {/* <TextField label="Creator" variant="outlined" name="creator" type="text"
                value={course.creator} onChange={(e) => setCourse({...course, creator:e.target.value})} style={{marginRight:"1rem"}} /> */}
    
                <TextField label="Name of Student" required variant="outlined" name="studentName" type="text"
                value={course.studentName} onChange={(e) => setCourse({...course, studentName:e.target.value})} />
            </div>
            <Divider />

            
                <Typography variant="h6" style={{textAlign:"center", marginTop:"1rem"}} >Enter Student's Score</Typography>


            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChangee} aria-label="lab API tabs example">
                            <Tab label="SS One" value="1" />
                            <Tab label="SS Two" value="2" />
                            <Tab label="SS Three" value="3" />
                        </TabList>
                    </Box>
                    <TabPanel value="1">SS One</TabPanel>
                    <TabPanel value="2">SS Two</TabPanel>
                    <TabPanel value="3">SS Three</TabPanel>
                </TabContext>
            </Box>


            <div className={classes.input}>
                {/* <Input name="eng" value={course.eng} handleChange={handleChange}  label="English" />    
                <Input name="math" value={course.math} handleChange={handleChange}  label="MatheMatics" />               
                <Input name="phy" value={course.phy} handleChange={handleChange}  label="Physics" />
                <Input name="chem" value={course.chem} handleChange={handleChange}  label="Chemistry" />
                <Input name="commerce" value={course.commerce} handleChange={handleChange}  label="Commerce" />
                <Input name="acct" value={course.acct} handleChange={handleChange}  label="Account" />
                <Input name="bio" value={course.bio} handleChange={handleChange}  label="Biology" />
                <Input name="lit" value={course.lit} handleChange={handleChange}  label="Literature" />
                <Input name="gov" value={course.govt} handleChange={handleChange}  label="Government" />
                <Input name="agric"  value={course.agric} handleChange={handleChange}  label="Agriculture" />
                <Input name="crs"  value={course.crs} handleChange={handleChange}  label="CRS" />
                <Input name="econ"  value={course.econ} handleChange={handleChange}  label="Economics" />
                <Input name="comp"  value={course.comp} handleChange={handleChange}  label="Computer" />
                <Input name="civic"  value={course.civic} handleChange={handleChange}  label="Civic" />
                <Input name="yor"  value={course.yor} handleChange={handleChange}  label="Yoruba" /> */}
                <div className={classes.subject}>
                <Typography variant="button" style={{fontWeight:"bold", marginRight:"1.2rem"}}>Mathematics:</Typography>
                <Input style={{marginRight:"2rem"}} name="test1" value={course.test1} handleChange={handleChange} label="CA 1"/>
                <Input name="test2" value={course.test2} handleChange={handleChange} label="CA 2"/>
                <Input name="exam" value={course.exam} handleChange={handleChange} label="Exam"/>
                </div>

                <div className={classes.subject}>
                <Typography variant="button" style={{fontWeight:"bold", marginRight:"1.2rem"}}>English: </Typography>
                <Input name="engTest1" value={course.engTest1} handleChange={handleChange} label="CA 1"/>
                <Input name="engTest2" value={course.engTest2} handleChange={handleChange} label="CA 2"/>
                <Input name="engExam" value={course.engExam} handleChange={handleChange} label="Exam"/>
                </div>


                <div className={classes.subject}>
                <Typography variant="button" style={{fontWeight:"bold", marginRight:"1.2rem"}}>Physics:</Typography>
                <Input name="phyTest1" value={course.phyTest1} handleChange={handleChange} label="CA 1"/>
                <Input name="phyTest2" value={course.phyTest2} handleChange={handleChange} label="CA 2"/>
                <Input name="phyExam" value={course.phyExam} handleChange={handleChange} label="Exam"/>
                </div>


                <div className={classes.subject}>
                <Typography variant="button" style={{fontWeight:"bold", marginRight:"1.2rem"}}>Chemistry:</Typography>
                <Input name="chemTest1" value={course.chemTest1} handleChange={handleChange} label="CA 1"/>
                <Input name="chemTest2" value={course.chemTest2} handleChange={handleChange} label="CA 2"/>
                <Input name="chemExam" value={course.chemExam} handleChange={handleChange} label="Exam"/>
                </div>


                <div className={classes.subject}>
                <Typography variant="button" style={{fontWeight:"bold", marginRight:"1.2rem"}}>Biology:</Typography>
                <Input name="bioTest1" value={course.bioTest1} handleChange={handleChange} label="CA 1"/>
                <Input name="bioTest2" value={course.bioTest2} handleChange={handleChange} label="CA 2"/>
                <Input name="bioExam" value={course.bioExam} handleChange={handleChange} label="Exam"/>
                </div>

                <div className={classes.subject}>
                <Typography variant="button" style={{fontWeight:"bold", marginRight:"1.2rem"}}>Economics: </Typography>
                <Input name="ecoTest1" value={course.ecoTest1} handleChange={handleChange} label="CA 1"/>
                <Input name="ecoTest2" value={course.ecoTest2} handleChange={handleChange} label="CA 2"/>
                <Input name="ecoExam" value={course.ecoExam} handleChange={handleChange} label="Exam"/>
                </div>


                <div className={classes.subject}>
                <Typography variant="button" style={{fontWeight:"bold", marginRight:"1.2rem"}}>Computer Studies:</Typography>
                <Input name="compTest1" value={course.compTest1} handleChange={handleChange} label="CA 1"/>
                <Input name="compTest2" value={course.compTest2} handleChange={handleChange} label="CA 2"/>
                <Input name="compExam" value={course.compExam} handleChange={handleChange} label="Exam"/>
                </div>

                <div className={classes.subject}>
                <Typography variant="button" style={{fontWeight:"bold", marginRight:"1.2rem"}}>Further Mathematics:</Typography>
                <Input name="furTest1" value={course.furTest1} handleChange={handleChange} label="CA 1"/>
                <Input name="furTest2" value={course.furTest2} handleChange={handleChange} label="CA 2"/>
                <Input name="furExam" value={course.furExam} handleChange={handleChange} label="Exam"/>
                </div>

                               
                
            </div>    
            
            <Button variant="contained" startIcon={<Calculate />} style={{marginRight:"2rem"}} 
                type="submit">{currentId ? "Update" : "Compute"}</Button>

            <Button variant="contained" startIcon={<Clear />} color="secondary" style={{maginLeft:"2rem"}} 
                onClick={clear}>Clear</Button> 

        </form>
        </Paper>
       
      </>
    )
}

export default AddForm


 
               