import React, { useState } from "react";
import {
  Grid,
  Paper,
  Typography,
  Button,
  Container,
} from "@mui/material";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LockOutlined, Google } from "@mui/icons-material";
import { GoogleLogin } from "react-google-login";
import { useStyles } from "./AuthStyles";
import { Link } from "react-router-dom";
import Input from "./Input";
import { signin, signup } from "../../actions/auth";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  school: "",
  phoneNumber: "",
  country: "",
  region: "",
};

const Auth = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState(initialState);
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("profile"));

  // switching or toogling password on and off
  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);

  const submit = (e) => {
    e.preventDefault();

    if (isSignUp) {
      dispatch(signup(formData, navigate));
    } else {
      dispatch(signin(formData, navigate));
    }

    console.log(formData);
  };

  

  // Signing up and Sigining in
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //   switching or toggling between sign in and sign up
  const switchMode = () => {
    setIsSignUp((prevIsSignUP) => !prevIsSignUP);
    handleShowPassword(false);
  };

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({
        type: "AUTH",
        data: { result, token },
      });
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  const googleFailure = () => {
    console.log("Google sign in unsuccessful, try again later");
  };

  
    

  return (
    <div className={classes.formm} >
    <Container maxWidth="sm" >
      <div className={classes.container}>
        
        <Typography
          variant="h6"
          component={Link}
          to="/"
          style={{ textDecoration: "none", textAlign:"center" }}
        >
         Go back to home
        </Typography>

        <Typography variant="h5" className={classes.head}>
          {isSignUp ? "Sign up to join " : "Sign in to begin "}
        </Typography>

        <form onSubmit={submit} className={classes.form}>
          <Grid container spacing={2}>
            {isSignUp && (
              <>
                <Input
                  label="First Name"
                  handleChange={handleChange}
                  name="firstName"
                  autoFocus
                  half
                />

                <Input
                  label="Last Name"
                  handleChange={handleChange}
                  name="lastName"
                  autoFocus
                  half
                />
                
                <Input
              name="school"
              label="Name of School"
              handleChange={handleChange}
            />
                <Input
              name="country"
              label="Country"
              handleChange={handleChange}
            />
                <Input
              name="phoneNumber"
              label="Phone Number"
              type="tel"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              handleChange={handleChange}
            />
              </>
            )}
            <Input
              name="email"
              label="Email Address"
              handleChange={handleChange}
              type="email"
             
            />

            
            <Input
              label="Password"
              handleChange={handleChange}
              name="password"
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />

            {isSignUp && (
              <Input
                name="confirmPassword"
                label="Repeat Password"
                handleChange={handleChange}
                type="password"
              />
            )}
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            style={{ marginTop: "15px" }}
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </Button>

          <GoogleLogin
            clientId="992094443095-dsk7bu44bne63qho693lp6squ07tgvhm.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button
                fullWidth
                style={{ marginTop: "15px" }}
                onClick={renderProps.onClick}
                disableed={renderProps.disapbled}
                startIcon={<Google />}
                variant="contained"
              >
                Google Sign In
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy="single_host_origin"
          />

          <Grid container justify="flex-end">
            <Grid item position="center">
              <Button onClick={switchMode} style={{fontWeight:"bold", color:"red", fontSize:"16px"}}>
                {isSignUp
                  ? "Already have an account? Sign In"
                  : "Don't have an account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
          </form>
      </div>
    </Container>
    </div>
  );
};

export default Auth;
