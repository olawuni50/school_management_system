import React from "react";
import { Grid, TextField, InputAdornment, IconButton } from "@mui/material";
import {Visibility, VisibilityOff} from "@mui/icons-material"


const Input = ({ half, label, name, handleChange, handleShowPassword, autoFocus, type }) => {
  return (
    <Grid item xs={12} sm={half ? 6 : 12}>
      <TextField
        label={label}
        name={name}
        variant="outlined"
        onChange={handleChange}
        fullWidth
        autoFocus={autoFocus}
        type={type}
        required
        InputProps={
          name === "password"
            ? {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleShowPassword}>
                      {type === "password" ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }
            : null
        }
      />
    </Grid>
  );
};

export default Input;
