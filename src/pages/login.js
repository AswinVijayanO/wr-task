import {
  Button,
  Container,
  FilledInput,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  Paper,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { signIn } from "../actions";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { auth } from "../api/auth";
const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "24px 12px 24px 12px",
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    textAlign: "left",
    padding: 8,
  },
});
const Login = () => {
  let history = useHistory();
  const classes = useStyles();
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const [loginState, updateState] = useState({
    username: "",
    password: "",
    showPassword: false,
    error:null
  });
  const onChange = (e) => {
    updateState((currentState) => ({
      ...currentState,
      [e.target.name]: e.target.value,
    }));
  };
  const dispatch = useDispatch();
  const logIn = () => {
    if(auth(loginState.username,loginState.password)) {
      dispatch(signIn({user:loginState.username}));
      history.push("/home");
    } else {
      updateState(currentState=>({...currentState,error:"Incorrect username or password"}))
    }

  };

  return (
    <Container
      maxWidth="sm"
      component={Paper}
      variant="outlined"
      className={classes.container}
    >
      <div className={classes.textContainer}>
        <Typography variant="h5">
          <b>Login</b>
        </Typography>
        <Typography variant="subtitle1" color="GrayText">
          Please enter your credentials
        </Typography>
      </div>
      <div className={classes.textContainer}>
        <FormControl sx={{ my: 2 }} variant="outlined">
          <InputLabel>Username</InputLabel>
          <FilledInput size="small" type={"text"} name="username" onChange={onChange} />
        </FormControl>
        <FormControl sx={{ my: 2 }} variant="outlined">
          <InputLabel>Password</InputLabel>
          <FilledInput
            size="small"
            name="password"
            type={loginState.showPassword?"text":"password"}
            onChange={onChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={() => {
                    onChange({
                      target: {
                        name: "showPassword",
                        value: !loginState.showPassword,
                      },
                    });
                  }}
                >
                  {loginState.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </div>
      <div lassName={classes.textContainer}>
        {loginState.error&&<Typography variant="caption" color="HighlightText">
          {loginState.error}
        </Typography>}
      </div>
      <Button color={"primary"} variant="contained" onClick={logIn}>
        Login
      </Button>
    </Container>
  );
};
export default Login;
