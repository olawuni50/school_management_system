import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Home, AddCircle, HistoryEdu, Logout } from "@mui/icons-material";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Person from "@mui/icons-material/Person";
import { makeStyles } from "@mui/styles";
import { createTheme } from "@mui/material/styles";


const theme = createTheme();

const useStyles = makeStyles({
  leftDash: {
    backgroundColor:"#896eff",
    color:"#fff",
    height: "100%",
    paddingTop:theme.spacing(5),
    paddingLeft:theme.spacing(2),
    // marginLeft:"15px",
    // marginTop:"5rem"
  },

  log: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    '&:hover':{
      background: "#47362B",
      padding:"8px",
      borderRadius:theme.spacing(2)
    }
  },

  left: {
    display: "flex",
    paddingBottom: theme.spacing(2),
    cursor: "pointer",
    fontWeight:"bold",
    
    '&:hover': {
      background: "#47362B",
      padding:"8px",
      borderRadius:theme.spacing(2)

    }
    
  },
  welcome:{
    display: "flex",
    paddingBottom: theme.spacing(2),
    cursor: "pointer",
    fontWeight:"bold",
  },

  typo: {
    paddingLeft: theme.spacing(1.5),
    textDecoration:"none",
    color:"#fff",
    fontWeight:"bolder"
  },
});

const LeftDash = () => {
  const classes = useStyles();
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  console.log(user);

  useEffect(() => {
    const token = user?.token;

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
    setUser(null);
  };

  return (
    <div className={classes.leftDash}>
      <div className={classes.welcome}>
        <Typography variant="h6" style={{marginTop:"3rem"}}>Welcome {user===user?.result?.googleId ? user.result.givenName : user?.result?.name} </Typography>
      </div>

      <div className={classes.left}>
        <Home />
        <Typography variant="button" className={classes.typo} component={Link} to="/" style={{fontSize:"1rem"}}>          
          Home
        </Typography>
      </div>

      <div className={classes.left}>
        <Person />
        <Typography variant="button" className={classes.typo} component={Link} to="profile" style={{fontSize:"1rem"}}>
          
          Profile
        </Typography>
      </div>

      <div className={classes.left}>
        <AddCircle />
        <Typography
          variant="button"
          className={classes.typo}
          to="add-subject"
          component={Link}
          style={{fontSize:"1rem"}}
        >

          Add Subject
        </Typography>
      </div>

      <div className={classes.left}>
        <HistoryEdu />
        <Typography
          variant="button"
          className={classes.typo}
          to="result"
          component={Link}
          style={{fontSize:"1rem"}}
        >
  
          Check Result
        </Typography>
      </div>

      <div className={classes.log}>
        <Logout />
        <Typography variant="button" className={classes.typo} onClick={logout} style={{fontSize:"1rem"}}
        style={{cursor:"pointer"}}>
     
          Log Out ({user=== user?.result?.googleId ? `${user.result.givenName}` :`${user?.result?.name}`})
        </Typography>
      </div>
    </div>
  );
};

export default LeftDash;
