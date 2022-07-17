import React from "react";
import { styled } from "@mui/material/styles";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Typography, Button, Card, CardMedia } from "@mui/material";
import {TableContainer, Paper,TableHead,TableRow,Table,TableBody, Stack, Pagination, Divider} from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import Delete from "@mui/icons-material/Delete";
import Edit from "@mui/icons-material/Edit";
import { makeStyles } from "@mui/styles";
import { createTheme } from "@mui/material/styles";
import { deleteGrade } from "../../../actions/grades";

const theme = createTheme();

const useStyles = makeStyles({
  card: {
    display: "flex",
    justifyContent: "space-between",
    padding: theme.spacing(1),
  },
  media: {
    width: "30%",
    height: "30%",
  },
  
  result:{
    display: "grid",
    gridTemplateColumns:"1fr 1fr 1fr 1fr",
    paddingTop:"10px",
  },
  green:{
    color:"green"
  },
  red:{
    color:'red'
  },

  button:{
    display:"flex",
    justifyContent:"space-between",
    margin:"1rem",
    width:"100%"
  }
});

const GradeCard = ({ grade, setCurrentId }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = JSON.parse(localStorage.getItem("profile"));

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  const handleEdit = () => {
    setCurrentId(grade._id);
    navigate("/dashboard/add-subject");
  };

  // Grade Calculations
  // const obtainable = [
  //   grade.math,
  //   grade.eng,
  //   grade.phy,
  //   grade.bio,
  //   grade.chem,
  //   grade.econ,
  //   grade.agric,
  //   grade.acct, grade.commerce, grade.lit, grade.crs, grade.comp, grade.civic, grade.yor, grade.gov
  // ].length;
  // const totalObtainable = obtainable * 100;

  const totalMath = parseInt(grade.test1) + parseInt(grade.test2) + parseInt(grade.exam)
  const totalMathPercent = ((totalMath/30) * 100).toFixed(0)
  
  const totalEng = parseInt(grade.engTest1) + parseInt(grade.engTest2) + parseInt(grade.engExam)
  const totalEngPercent = ((totalEng/30)* 100).toFixed(0)

  const totalPhy = parseInt(grade.phyTest1) + parseInt(grade.phyTest2) + parseInt(grade.phyExam)
  const totalPhyPercent = ((totalPhy/30) * 100).toFixed(0)

  const totalChem = parseInt(grade.chemTest1) + parseInt(grade.chemTest2) + parseInt(grade.chemExam)
  const totalChemPercent = ((totalChem/30) * 100).toFixed(0)

  const totalBio = parseInt(grade.bioTest1) + parseInt(grade.bioTest2) + parseInt(grade.bioExam)
  const totalBioPercent = ((totalBio/30) * 100).toFixed(0)

  const totalEco = parseInt(grade.ecoTest1) + parseInt(grade.ecoTest2) + parseInt(grade.ecoExam)
  const totalEcoPercent = ((totalEco/30) * 100).toFixed(0)

  const totalComp = parseInt(grade.compTest1) + parseInt(grade.compTest2) + parseInt(grade.compExam)
  const totalComPercent = ((totalComp/30) * 100).toFixed(0)

  const totalFur = parseInt(grade.furTest1) + parseInt(grade.furTest2) + parseInt(grade.furExam)
  const totalFurPercent = ((totalFur/30) * 100).toFixed(0)

  const totalSubject = [totalMathPercent, totalEngPercent, totalPhyPercent, totalChemPercent, totalBioPercent, totalEcoPercent, totalComPercent, 
    totalFurPercent].length


  const grandTotalScore = parseInt(totalMathPercent) + parseInt(totalEngPercent) + parseInt(totalPhyPercent) + parseInt(totalBioPercent) + parseInt(totalEcoPercent) 
  + parseInt(totalComPercent) + parseInt(totalChemPercent) + parseInt(totalFurPercent)
  const averageScore = (grandTotalScore/totalSubject).toFixed(1)



  // const obtain =
  //   parseInt(grade.math) +
  //   parseInt(grade.phy) +
  //   parseInt(grade.bio) +
  //   parseInt(grade.chem) +
  //   parseInt(grade.econ) +
  //   parseInt(grade.agric) +
  //   parseInt(grade.eng) + parseInt(grade.crs) + parseInt(grade.comp) + parseInt(grade.civic) + parseInt(grade.yor) +
  //   parseInt(grade.acct) + parseInt(grade.commerce) + parseInt(grade.lit) + parseInt(grade.gov)

  // const average = ((obtain / totalObtainable) * 100).toFixed(2);

  return (
    <>
          <div>
        <Card raised elevation={6} className={classes.card}>
        <div>
          
          <Typography variant="body1">
            
            <span style={{ fontWeight: "bold" }}>Teacher: </span>
            {grade.name}
          </Typography>

          <Typography variant="body1">
            <span style={{ fontWeight: "bold" }}>Student: </span>
            {grade.studentName}
          </Typography>

          <Typography variant="body1">
            <span style={{ fontWeight: "bold" }}> Term: </span>
            {grade.term}
          </Typography>

          <Typography variant="body1">
            <span style={{ fontWeight: "bold" }}> Session: </span>
            {grade.session}
          </Typography>

          <Typography variant="body1">
            <span style={{ fontWeight: "bold" }}> Class: </span>
            {grade.stuClass}
          </Typography>

          <Divider style={{marginTop:"1.5rem"}} />

         
          
              <div>
            
            <Typography variant="body1">
              <span style={{ fontWeight: "bold",paddingRight:"10px" }}> Grand Total Score:</span>{grandTotalScore}
              </Typography> 

              <Typography variant="body1"> </Typography>            
              
            {/* <Typography variant="body1">
              <span style={{ fontWeight: "bold",paddingRight:"10px" }}> Obtained </span>              
            </Typography> */}
              
            <Typography variant="body1">
              <span style={{ fontWeight: "bold",paddingRight:"10px" }}> Average Score:</span> {averageScore}%
            </Typography>

            {/* <Typography variant="body1">
              <span style={{ fontWeight: "bold",paddingRight:"10px" }}> Remarks: </span> 
            </Typography>             */}

              <div>
              
           
            </div>
            {/* <Typography variant="body1"> {average} </Typography>
            <Typography variant="body1"> 
            {average > 50 ? "Pass" :"Fail"} </Typography> */}
            </div>

            <Divider style={{paddingBottom:"1rem"}} />

            <Typography variant="body1" style={{textAlign:"center"}}>
            <span style={{ fontWeight: "bold" }}> Principal's Comment: </span>
           {/* {averageScore <= 100 && averageScore >=80 ? `An outstanding performance. ${grade.studentName} should sustain this performance`:
            averageScore <= 79 && averageScore >= 75 ? `A very impressive performance. ${grade.studentName} must continue to study hard`: 
            averageScore <=74 && averageScore >=70 ? `An impressive performance. ${grade.studentName} can be outstanding with a little more effort.`:
            averageScore <=69 && averageScore >= 65 ? `A commendable performance. ${grade.studentName} can still improve on this performance`:
            averageScore <=64 && averageScore >=60 ? `An outstanding performance. ${grade.studentName} should sustain this performance`:
            averageScore <=59 && averageScore >= 55 ? `An average performance. ${grade.studentName} should pay attention to details in daily work`:
            averageScore <=54 && averageScore >=45 ? `A below average performance. ${grade.studentName} should learn to actively engage in working carefully and conscientiously for better performance.`:
            averageScore <=44 && averageScore >=0 ? `A far below average performance. ${grade.studentName} should improve learning habits to gain fundamentals needed for better performance.`:
            `Very poor result. ${grade.studentName} should always read during prep time`}  */}

            {averageScore <= 100 && averageScore >=80 ? `An outstanding performance. You should sustain this performance`:
            averageScore <= 79 && averageScore >= 75 ? `A very impressive performance.  You must continue to study hard`: 
            averageScore <=74 && averageScore >=70 ? `An impressive performance.  You can be outstanding with a little more effort.`:
            averageScore <=69 && averageScore >= 65 ? `A commendable performance. You can still improve on this performance`:
            averageScore <=64 && averageScore >=60 ? `An outstanding performance.  You should sustain this performance`:
            averageScore <=59 && averageScore >= 55 ? `An average performance.  You should pay attention to details in daily work`:
            averageScore <=54 && averageScore >=45 ? `A below average performance.  You should learn to actively engage in working carefully and conscientiously for better performance.`:
            averageScore <=44 && averageScore >=0 ? `A far below average performance. You should improve learning habits to gain fundamentals needed for better performance.`:
            `A commendable performance. You can still improve on this performance`}
          </Typography>
        </div>
     

        <div>
          <CardMedia
            sx={{ width: 145, height: 140, borderRadius:5}}
            alt="Student's Picture here"
            component="img"
            image={grade.selectedFile}
          />
        </div>
      </Card>

      <Typography variant="body1" italics>
        Posted: {moment(grade.createdAt).fromNow()}
      </Typography>
      <TableContainer component={Paper}>
        <Table fullwidth aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Courses</StyledTableCell>
              {/* <StyledTableCell align="right">Score</StyledTableCell>
              <StyledTableCell align="right">Grade</StyledTableCell>
              <StyledTableCell align="right">Comment</StyledTableCell> */}
              <StyledTableCell>CA1</StyledTableCell>
              <StyledTableCell>CA2</StyledTableCell>
              <StyledTableCell>Exam</StyledTableCell>
              <StyledTableCell>Total(30Mks) </StyledTableCell>
              <StyledTableCell>Total(100%) </StyledTableCell>
              <StyledTableCell>Grade</StyledTableCell>
              {/* <StyledTableCell>Comment</StyledTableCell> */}
              
            </TableRow>
          </TableHead>

          <TableBody>
            <StyledTableRow key={grade.name}>
              <StyledTableCell component="th" scope="row">
                Mathematics
              </StyledTableCell>
              {/* <StyledTableCell align="right">{grade.math}</StyledTableCell> */}
              <StyledTableCell align="right">{grade.test1}</StyledTableCell>
              <StyledTableCell align="right">{grade.test2}</StyledTableCell>
              <StyledTableCell align="right">{grade.exam}</StyledTableCell>
              <StyledTableCell align="right">{totalMath}</StyledTableCell>
              <StyledTableCell align="right">{totalMathPercent}</StyledTableCell>
              <StyledTableCell align="right">
                {totalMathPercent <= 100 && totalMathPercent >= 80
                  ? "A1"
                  : totalMathPercent <= 79.9 && totalMathPercent >= 75
                  ? "B2"
                  : totalMathPercent <= 74.9 && totalMathPercent >= 70
                  ? "B3"
                  : totalMathPercent <= 69.9 && totalMathPercent >= 65.0
                  ? "C4"
                  : totalMathPercent <= 64.9 && totalMathPercent >= 60.0
                  ? "C5"
                  : totalMathPercent <= 59.9 && totalMathPercent >= 55.0
                  ? "C6"
                  : totalMathPercent <= 54.9 && totalMathPercent >= 50.0
                  ? "D7"
                  : totalMathPercent <= 49.9 && totalMathPercent >= 45.0
                  ? "E8"
                  : totalMathPercent <= 44.9 && totalMathPercent >= 0
                  ? "F9":
                  "No Grade"}
              </StyledTableCell>
            </StyledTableRow>

            <StyledTableRow key={grade.name}>
              <StyledTableCell component="th" scope="row">
                English
              </StyledTableCell>
              <StyledTableCell align="right">{grade.engTest1}</StyledTableCell>
              <StyledTableCell align="right">{grade.engTest2}</StyledTableCell>
              <StyledTableCell align="right">{grade.engExam}</StyledTableCell>
              <StyledTableCell align="right">{totalEng}</StyledTableCell>
              <StyledTableCell align="right">{totalEngPercent}</StyledTableCell>
              <StyledTableCell align="right">
              {totalEngPercent <= 100 && totalEngPercent >= 80
                  ? "A1"
                  : totalEngPercent <= 79.9 && totalEngPercent >= 75
                  ? "B2"
                  : totalEngPercent <= 74.9 && totalEngPercent >= 70
                  ? "B3"
                  : totalEngPercent <= 69.9 && totalEngPercent >= 65.0
                  ? "C4"
                  : totalEngPercent <= 64.9 && totalEngPercent >= 60.0
                  ? "C5"
                  : totalEngPercent <= 59.9 && totalEngPercent >= 55.0
                  ? "C6"
                  : totalEngPercent <= 54.9 && totalEngPercent >= 50.0
                  ? "D7"
                  : totalEngPercent <= 49.9 && totalEngPercent >= 45.0
                  ? "E8"
                  : totalEngPercent <= 44.9 && totalEngPercent >= 0
                  ? "F9":
                  "No Grade"}
              </StyledTableCell>

              
            </StyledTableRow>

            <StyledTableRow key={grade.name}>
              <StyledTableCell component="th" scope="row">
                Physics
              </StyledTableCell>
              <StyledTableCell align="right">{grade.phyTest1}</StyledTableCell>
              <StyledTableCell align="right">{grade.phyTest2}</StyledTableCell>
              <StyledTableCell align="right">{grade.phyExam}</StyledTableCell>
              <StyledTableCell align="right">{totalPhy}</StyledTableCell>
              <StyledTableCell align="right">{totalPhyPercent}</StyledTableCell>
              <StyledTableCell align="right">
              {totalPhyPercent <= 100 && totalPhyPercent >= 80
                  ? "A1"
                  : totalPhyPercent <= 79.9 && totalPhyPercent >= 75
                  ? "B2"
                  : totalPhyPercent <= 74.9 && totalPhyPercent >= 70
                  ? "B3"
                  : totalPhyPercent <= 69.9 && totalPhyPercent >= 65.0
                  ? "C4"
                  : totalPhyPercent <= 64.9 && totalPhyPercent >= 60.0
                  ? "C5"
                  : totalPhyPercent <= 59.9 && totalPhyPercent >= 55.0
                  ? "C6"
                  : totalPhyPercent <= 54.9 && totalPhyPercent >= 50.0
                  ? "D7"
                  : totalPhyPercent <= 49.9 && totalPhyPercent >= 45.0
                  ? "E8"
                  : totalPhyPercent <= 44.9 && totalPhyPercent >= 0
                  ? "F9":
                  "No Grade"}
              </StyledTableCell>

             </StyledTableRow>


            <StyledTableRow key={grade.name}>
              <StyledTableCell component="th" scope="row">
                Chemistry
              </StyledTableCell>
              <StyledTableCell align="right">{grade.chemTest1}</StyledTableCell>
              <StyledTableCell align="right">{grade.chemTest2}</StyledTableCell>
              <StyledTableCell align="right">{grade.chemExam}</StyledTableCell>
              <StyledTableCell align="right">{totalChem}</StyledTableCell>
              <StyledTableCell align="right">{totalChemPercent}</StyledTableCell>
              <StyledTableCell align="right">
              {totalChemPercent <= 100 && totalChemPercent >= 80
                  ? "A1"
                  : totalChemPercent <= 79.9 && totalChemPercent >= 75
                  ? "B2"
                  : totalChemPercent <= 74.9 && totalChemPercent >= 70
                  ? "B3"
                  : totalChemPercent <= 69.9 && totalChemPercent >= 65.0
                  ? "C4"
                  : totalChemPercent <= 64.9 && totalChemPercent >= 60.0
                  ? "C5"
                  : totalChemPercent <= 59.9 && totalChemPercent >= 55.0
                  ? "C6"
                  : totalChemPercent <= 54.9 && totalChemPercent >= 50.0
                  ? "D7"
                  : totalChemPercent <= 49.9 && totalChemPercent >= 45.0
                  ? "E8"
                  : totalChemPercent <= 44.9 && totalChemPercent >= 0
                  ? "F9":
                  "No Grade"}
              </StyledTableCell>

             </StyledTableRow>


            <StyledTableRow key={grade.name}>
              <StyledTableCell component="th" scope="row">
                Biology
              </StyledTableCell>
              <StyledTableCell align="right">{grade.bioTest1}</StyledTableCell>
              <StyledTableCell align="right">{grade.bioTest2}</StyledTableCell>
              <StyledTableCell align="right">{grade.bioExam}</StyledTableCell>
              <StyledTableCell align="right">{totalBio}</StyledTableCell>
              <StyledTableCell align="right">{totalBioPercent}</StyledTableCell>
              <StyledTableCell align="right">
              {totalBioPercent <= 100 && totalBioPercent >= 80
                  ? "A1"
                  : totalBioPercent <= 79.9 && totalBioPercent >= 75
                  ? "B2"
                  : totalBioPercent <= 74.9 && totalBioPercent >= 70
                  ? "B3"
                  : totalBioPercent <= 69.9 && totalBioPercent >= 65.0
                  ? "C4"
                  : totalBioPercent <= 64.9 && totalBioPercent >= 60.0
                  ? "C5"
                  : totalBioPercent <= 59.9 && totalBioPercent >= 55.0
                  ? "C6"
                  : totalBioPercent <= 54.9 && totalBioPercent >= 50.0
                  ? "D7"
                  : totalBioPercent <= 49.9 && totalBioPercent >= 45.0
                  ? "E8"
                  : totalBioPercent <= 44.9 && totalBioPercent >= 0
                  ? "F9":
                  "No Grade"}
              </StyledTableCell>

             </StyledTableRow>


            <StyledTableRow key={grade.name}>
              <StyledTableCell component="th" scope="row">
               Economics
              </StyledTableCell>
              <StyledTableCell align="right">{grade.ecoTest1}</StyledTableCell>
              <StyledTableCell align="right">{grade.ecoTest2}</StyledTableCell>
              <StyledTableCell align="right">{grade.ecoExam}</StyledTableCell>
              <StyledTableCell align="right">{totalEco}</StyledTableCell>
              <StyledTableCell align="right">{totalEcoPercent}</StyledTableCell>
              <StyledTableCell align="right">
              {totalEcoPercent <= 100 && totalEcoPercent >= 80
                  ? "A1"
                  : totalEcoPercent <= 79.9 && totalEcoPercent >= 75
                  ? "B2"
                  : totalEcoPercent <= 74.9 && totalEcoPercent >= 70
                  ? "B3"
                  : totalEcoPercent <= 69.9 && totalEcoPercent >= 65.0
                  ? "C4"
                  : totalEcoPercent <= 64.9 && totalEcoPercent >= 60.0
                  ? "C5"
                  : totalEcoPercent <= 59.9 && totalEcoPercent >= 55.0
                  ? "C6"
                  : totalEcoPercent <= 54.9 && totalEcoPercent >= 50.0
                  ? "D7"
                  : totalEcoPercent <= 49.9 && totalEcoPercent >= 45.0
                  ? "E8"
                  : totalEcoPercent <= 44.9 && totalEcoPercent >= 0
                  ? "F9":
                  "No Grade"}
              </StyledTableCell>

             </StyledTableRow>


            <StyledTableRow key={grade.name}>
              <StyledTableCell component="th" scope="row">
               Computer Studies
              </StyledTableCell>
              <StyledTableCell align="right">{grade.compTest1}</StyledTableCell>
              <StyledTableCell align="right">{grade.compTest2}</StyledTableCell>
              <StyledTableCell align="right">{grade.compExam}</StyledTableCell>
              <StyledTableCell align="right">{totalComp}</StyledTableCell>
              <StyledTableCell align="right">{totalComPercent}</StyledTableCell>
              <StyledTableCell align="right">
              {totalComPercent <= 100 && totalComPercent >= 80
                  ? "A1"
                  : totalComPercent <= 79.9 && totalComPercent >= 75
                  ? "B2"
                  : totalComPercent <= 74.9 && totalComPercent >= 70
                  ? "B3"
                  : totalComPercent <= 69.9 && totalComPercent >= 65.0
                  ? "C4"
                  : totalComPercent <= 64.9 && totalComPercent >= 60.0
                  ? "C5"
                  : totalComPercent <= 59.9 && totalComPercent >= 55.0
                  ? "C6"
                  : totalComPercent <= 54.9 && totalComPercent >= 50.0
                  ? "D7"
                  : totalComPercent <= 49.9 && totalComPercent >= 45.0
                  ? "E8"
                  : totalComPercent <= 44.9 && totalComPercent >= 0
                  ? "F9":
                  "No Grade"}
              </StyledTableCell>

             </StyledTableRow>


            <StyledTableRow key={grade.name}>
              <StyledTableCell component="th" scope="row">
               Further Mathematics
              </StyledTableCell>
              <StyledTableCell align="right">{grade.furTest1}</StyledTableCell>
              <StyledTableCell align="right">{grade.furTest2}</StyledTableCell>
              <StyledTableCell align="right">{grade.furExam}</StyledTableCell>
              <StyledTableCell align="right">{totalFur}</StyledTableCell>
              <StyledTableCell align="right">{totalFurPercent}</StyledTableCell>
              <StyledTableCell align="right">
              {totalFurPercent <= 100 && totalFurPercent >= 80
                  ? "A1"
                  : totalFurPercent <= 79.9 && totalFurPercent >= 75
                  ? "B2"
                  : totalFurPercent <= 74.9 && totalFurPercent >= 70
                  ? "B3"
                  : totalFurPercent <= 69.9 && totalFurPercent >= 65.0
                  ? "C4"
                  : totalFurPercent <= 64.9 && totalFurPercent >= 60.0
                  ? "C5"
                  : totalFurPercent <= 59.9 && totalFurPercent >= 55.0
                  ? "C6"
                  : totalFurPercent <= 54.9 && totalFurPercent >= 50.0
                  ? "D7"
                  : totalFurPercent <= 49.9 && totalFurPercent >= 45.0
                  ? "E8"
                  : totalFurPercent <= 44.9 && totalFurPercent >= 0
                  ? "F9":
                  "No Grade"}
              </StyledTableCell>

             </StyledTableRow>

            {/* <StyledTableRow key={grade.name}>
              <StyledTableCell component="th" scope="row">
                Chemistry
              </StyledTableCell>
              <StyledTableCell align="right">{grade.chem}</StyledTableCell>
              <StyledTableCell align="right">
                {grade.chem <= 100 && grade.chem >= 75
                  ? "A"
                  : grade.chem <= 74 && grade.chem >= 60
                  ? "B"
                  : grade.chem <= 59 && grade.chem >= 50
                  ? "C"
                  : grade.chem <= 49 && grade.chem >= 40
                  ? "D"
                  : "F"}
              </StyledTableCell>

              <StyledTableCell align="left">
                {grade.chem <= 100 && grade.chem >= 75
                  ? "Excellent"
                  : grade.chem <= 74 && grade.chem >= 60
                  ? "V.Good"
                  : grade.chem <= 59 && grade.chem >= 50
                  ? "Good"
                  : grade.chem <= 49 && grade.chem >= 40
                  ? "Pass"
                  : grade.chem > 100
                  ? "Undefined"
                  : "Fail"}
              </StyledTableCell>
            </StyledTableRow>

            <StyledTableRow key={grade.name}>
              <StyledTableCell component="th" scope="row">
                Biology
              </StyledTableCell>
              <StyledTableCell align="right">{grade.bio}</StyledTableCell>
              <StyledTableCell align="right">
                {grade.bio <= 100 && grade.bio >= 75
                  ? "A"
                  : grade.bio <= 74 && grade.bio >= 60
                  ? "B"
                  : grade.bio <= 59 && grade.bio >= 50
                  ? "C"
                  : grade.bio <= 49 && grade.bio >= 40
                  ? "D"
                  : "F"}
              </StyledTableCell>

              <StyledTableCell align="left">
                {grade.bio <= 100 && grade.bio >= 75
                  ? "Excellent"
                  : grade.bio <= 74 && grade.bio >= 60
                  ? "V.Good"
                  : grade.bio <= 59 && grade.bio >= 50
                  ? "Good"
                  : grade.bio <= 49 && grade.bio >= 40
                  ? "Pass"
                  : grade.bio > 100
                  ? "Undefined"
                  : "Fail"}
              </StyledTableCell>
            </StyledTableRow>

            <StyledTableRow key={grade.name}>
              <StyledTableCell component="th" scope="row">
                Agriculture
              </StyledTableCell>
              <StyledTableCell align="right">{grade.agric}</StyledTableCell>
              <StyledTableCell align="right">
                {grade.agric <= 100 && grade.agric >= 75
                  ? "A"
                  : grade.agric <= 74 && grade.agric >= 60
                  ? "B"
                  : grade.agric <= 59 && grade.agric >= 50
                  ? "C"
                  : grade.agric <= 49 && grade.agric >= 40
                  ? "D"
                  : "F"}
              </StyledTableCell>

              <StyledTableCell align="left">
                {grade.agric <= 100 && grade.agric >= 75
                  ? "Excellent"
                  : grade.agric <= 74 && grade.agric >= 60
                  ? "V.Good"
                  : grade.agric <= 59 && grade.agric >= 50
                  ? "Good"
                  : grade.agric <= 49 && grade.agric >= 40
                  ? "Pass"
                  : grade.agric > 100
                  ? "Undefined"
                  : "Fail"}
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow key={grade.name}>
              <StyledTableCell component="th" scope="row">
                Account
              </StyledTableCell>
              <StyledTableCell align="right">{grade.acct}</StyledTableCell>
              <StyledTableCell align="right">
                {grade.acct <= 100 && grade.acct >= 75
                  ? "A"
                  : grade.acct <= 74 && grade.acct >= 60
                  ? "B"
                  : grade.acct <= 59 && grade.acct >= 50
                  ? "C"
                  : grade.acct <= 49 && grade.acct >= 40
                  ? "D"
                  : "F"}
              </StyledTableCell>

              <StyledTableCell align="left">
                {grade.acct <= 100 && grade.acct >= 75
                  ? "Excellent"
                  : grade.acct <= 74 && grade.acct >= 60
                  ? "V.Good"
                  : grade.acct <= 59 && grade.acct >= 50
                  ? "Good"
                  : grade.acct <= 49 && grade.acct >= 40
                  ? "Pass"
                  : grade.acct > 100
                  ? "Undefined"
                  : "Fail"}
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow key={grade.name}>
              <StyledTableCell component="th" scope="row">
                Commerce
              </StyledTableCell>
              <StyledTableCell align="right">{grade.commerce}</StyledTableCell>
              <StyledTableCell align="right">
                {grade.commerce <= 100 && grade.commerce >= 75
                  ? "A"
                  : grade.commerce <= 74 && grade.commerce >= 60
                  ? "B"
                  : grade.commerce <= 59 && grade.commerce >= 50
                  ? "C"
                  : grade.commerce <= 49 && grade.commerce >= 40
                  ? "D"
                  : "F"}
              </StyledTableCell>

              <StyledTableCell align="left">
                {grade.commerce <= 100 && grade.commerce >= 75
                  ? "Excellent"
                  : grade.commerce <= 74 && grade.commerce >= 60
                  ? "V.Good"
                  : grade.commerce <= 59 && grade.commerce >= 50
                  ? "Good"
                  : grade.commerce <= 49 && grade.commerce >= 40
                  ? "Pass"
                  : grade.commerce > 100
                  ? "Undefined"
                  : "Fail"}
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow key={grade.name}>
              <StyledTableCell component="th" scope="row">
               Literature
              </StyledTableCell>
              <StyledTableCell align="right">{grade.lit}</StyledTableCell>
              <StyledTableCell align="right">
                {grade.lit <= 100 && grade.lit >= 75
                  ? "A"
                  : grade.lit <= 74 && grade.lit >= 60
                  ? "B"
                  : grade.lit <= 59 && grade.lit >= 50
                  ? "C"
                  : grade.lit <= 49 && grade.lit >= 40
                  ? "D"
                  : "F"}
              </StyledTableCell>

              <StyledTableCell align="left">
                {grade.lit <= 100 && grade.lit >= 75
                  ? "Excellent"
                  : grade.lit <= 74 && grade.lit >= 60
                  ? "V.Good"
                  : grade.lit <= 59 && grade.lit >= 50
                  ? "Good"
                  : grade.lit <= 49 && grade.lit >= 40
                  ? "Pass"
                  : grade.lit > 100
                  ? "Undefined"
                  : "Fail"}
              </StyledTableCell>
            </StyledTableRow>

            <StyledTableRow key={grade.name}>
              <StyledTableCell component="th" scope="row">
                CRS
              </StyledTableCell>
              <StyledTableCell align="right">{grade.crs}</StyledTableCell>
              <StyledTableCell align="right">
                {grade.crs <= 100 && grade.crs >= 75
                  ? "A"
                  : grade.crs <= 74 && grade.crs >= 60
                  ? "B"
                  : grade.crs <= 59 && grade.crs >= 50
                  ? "C"
                  : grade.crs <= 49 && grade.crs >= 40
                  ? "D"
                  : "F"}
              </StyledTableCell>

              <StyledTableCell align="left">
                {grade.crs <= 100 && grade.crs >= 75
                  ? "Excellent"
                  : grade.crs <= 74 && grade.crs >= 60
                  ? "V.Good"
                  : grade.crs <= 59 && grade.crs >= 50
                  ? "Good"
                  : grade.crs <= 49 && grade.crs >= 40
                  ? "Pass"
                  : grade.crs > 100
                  ? "Undefined"
                  : "Fail"}
              </StyledTableCell>
            </StyledTableRow>

            <StyledTableRow key={grade.name}>
              <StyledTableCell component="th" scope="row">
                Government
              </StyledTableCell>
              <StyledTableCell align="right">{grade.gov}</StyledTableCell>
              <StyledTableCell align="right">
                {grade.gov <= 100 && grade.gov >= 75
                  ? "A"
                  : grade.gov <= 74 && grade.gov >= 60
                  ? "B"
                  : grade.gov <= 59 && grade.gov >= 50
                  ? "C"
                  : grade.gov <= 49 && grade.gov >= 40
                  ? "D"
                  : "F"}
              </StyledTableCell>

              <StyledTableCell align="left">
                {grade.gov <= 100 && grade.gov >= 75
                  ? "Excellent"
                  : grade.gov <= 74 && grade.gov >= 60
                  ? "V.Good"
                  : grade.gov <= 59 && grade.gov >= 50
                  ? "Good"
                  : grade.gov <= 49 && grade.gov >= 40
                  ? "Pass"
                  : grade.gov > 100
                  ? "Undefined"
                  : "Fail"}
              </StyledTableCell>
            </StyledTableRow>

            <StyledTableRow key={grade.name}>
              <StyledTableCell component="th" scope="row">
                Civic
              </StyledTableCell>
              <StyledTableCell align="right">{grade.civic}</StyledTableCell>
              <StyledTableCell align="right">
                {grade.civic <= 100 && grade.civic >= 75
                  ? "A"
                  : grade.civic <= 74 && grade.civic >= 60
                  ? "B"
                  : grade.civic <= 59 && grade.civic >= 50
                  ? "C"
                  : grade.civic <= 49 && grade.civic >= 40
                  ? "D"
                  : "F"}
              </StyledTableCell>

              <StyledTableCell align="left">
                {grade.civic <= 100 && grade.civic >= 75
                  ? "Excellent"
                  : grade.civic <= 74 && grade.civic >= 60
                  ? "V.Good"
                  : grade.civic <= 59 && grade.civic >= 50
                  ? "Good"
                  : grade.civic <= 49 && grade.civic >= 40
                  ? "Pass"
                  : grade.civic > 100
                  ? "Undefined"
                  : "Fail"}
              </StyledTableCell>
            </StyledTableRow>

            <StyledTableRow key={grade.name}>
              <StyledTableCell component="th" scope="row">
                Yoruba
              </StyledTableCell>
              <StyledTableCell align="right">{grade.yor}</StyledTableCell>
              <StyledTableCell align="right">
                {grade.yor <= 100 && grade.yor >= 75
                  ? "A"
                  : grade.yor <= 74 && grade.yor >= 60
                  ? "B"
                  : grade.yor <= 59 && grade.yor >= 50
                  ? "C"
                  : grade.yor <= 49 && grade.yor >= 40
                  ? "D"
                  : "F"}
              </StyledTableCell>

              <StyledTableCell align="left">
                {grade.yor <= 100 && grade.yor >= 75
                  ? "Excellent"
                  : grade.yor <= 74 && grade.yor >= 60
                  ? "V.Good"
                  : grade.yor <= 59 && grade.yor >= 50
                  ? "Good"
                  : grade.yor <= 49 && grade.yor >= 40
                  ? "Pass"
                  : grade.yor > 100
                  ? "Undefined"
                  : "Fail"}
              </StyledTableCell>
            </StyledTableRow>

            <StyledTableRow key={grade.name}>
              <StyledTableCell component="th" scope="row">
                Economics
              </StyledTableCell>
              <StyledTableCell align="right">{grade.econ}</StyledTableCell>
              <StyledTableCell align="right">
                {grade.econ <= 100 && grade.econ >= 75
                  ? "A"
                  : grade.econ <= 74 && grade.econ >= 60
                  ? "B"
                  : grade.econ <= 59 && grade.econ >= 50
                  ? "C"
                  : grade.econ <= 49 && grade.econ >= 40
                  ? "D"
                  : "F"}
              </StyledTableCell>

              <StyledTableCell align="left">
                {grade.econ <= 100 && grade.econ >= 75
                  ? "Excellent"
                  : grade.econ <= 74 && grade.econ >= 60
                  ? "V.Good"
                  : grade.econ <= 59 && grade.econ >= 50
                  ? "Good"
                  : grade.econ <= 49 && grade.econ >= 40
                  ? "Pass"
                  : grade.econ > 100
                  ? "Undefined"
                  : "Fail"}
              </StyledTableCell>
            </StyledTableRow> */}
          </TableBody>

          <div className={classes.button}>
            <Button
              variant="contained"
              // startIcon={<Delete />}
              color="secondary"
              // size="small"
              style={{ marginRight: "3rem" }}
              onClick={() =>
                window.confirm(
                  `Are your sure you want to delete ${grade.studentName}?`
                ) && dispatch(deleteGrade(grade._id))
              }
            >
              Delete
            </Button>

            <Button
              variant="contained"
              // startIcon={<Edit />}
              color="primary"
              size="small"
              type="submit"
              onClick={handleEdit}
            >
              Edit
            </Button>
          </div>
        </Table>
      </TableContainer>
      </div>     
   </>
  );
};

export default GradeCard;
