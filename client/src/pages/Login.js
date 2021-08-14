 
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { loginUser } from '../actions/authAction';

import socket from '../socket';
import ('../stylelogin.css')


const Login = () => {
    useEffect(() => {
    socket.disconnect()
    socket.close()
   
  }, [])
  

    const [input, setInput] = useState({
      email :'',
      password :'',
    });
    const errors = useSelector(state => state.authReducer.errors)
    const dispatch = useDispatch()
    const history = useHistory()
    
    const handleChange = (e) => {
      setInput({...input,[e.target.name]:e.target.value});
    }
    
    const handleSubmit = (e) => {
      e.preventDefault(); 
      dispatch(loginUser(input,history))
    
    }
    return (
        <div className="body">
         <div className="container">
        <div className="d-flex justify-content-center h-100">
          <div className="card">
            <div className="card-header">
              <h3>Sign In</h3>
              <div className="d-flex justify-content-end social_icon">
                <span><i className="fab fa-facebook-square"/></span>
                <span><i className="fab fa-google-plus-square" /></span>
                <span><i className="fab fa-twitter-square" /></span>
              </div>
            </div>
            <div className="card-body">
              <form>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fas fa-user" /></span>
                  </div>
                  <input type="text" className="form-control" name="email" placeholder="username" onChange={(e)=>handleChange(e)} />
                </div>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fas fa-key" /></span>
                  </div>
                  <input type="password" className="form-control" name="password" placeholder="password" onChange={(e)=>handleChange(e)} />
                </div>
                <div className="row align-items-center remember">
                  <input type="checkbox" />Remember Me
                </div>
                <div className="form-group">
                  <input type="submit"  defaultValue="Login" className="btn float-right login_btn" onClick={(e)=>handleSubmit(e)} />
                </div>
              </form>
            </div>
            <div className="card-footer">
              <div className="d-flex justify-content-center links">
                Don't have an account?<a href="/">Sign Up</a>
              </div>
              <div className="d-flex justify-content-center">
                <a href="#">Forgot your password?</a>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
    )
}

export default Login  

/* 

import React ,{useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useState } from 'react';
import socket from '../socket';

//react-router-dom
import {useHistory} from 'react-router-dom'
//redux
import {loginUser} from '../actions/authAction'
import {useDispatch,useSelector} from 'react-redux'
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


  
const Login = () => {
  useEffect(() => {
    socket.disconnect()
    socket.close()
   
  }, [])
  
  
  const classes = useStyles();
//FUNCTIONS
const [input, setInput] = useState({
  email :'',
  password :'',
});
const errors = useSelector(state => state.authReducer.errors)
const dispatch = useDispatch()
const history = useHistory()

const handleChange = (e) => {
  setInput({...input,[e.target.name]:e.target.value});
}

const handleSubmit = (e) => {
  e.preventDefault(); 
  dispatch(loginUser(input,history))

}
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form className={classes.form} noValidate>
        
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleChange}

          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleChange}

          />
          <p>{errors? errors: ''}</p>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Login
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
export default Login; 
 */