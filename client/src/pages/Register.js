import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


import {registerUser} from '../actions/authAction'
import ('../stylelogin.css')

const Register = ({match}) => {
  const [input, setInput] = useState({
    firstname :'',
    lastname :'',
    email :'',
    adress :'',
    password :'',
    role :'',
    tel:''
  });
   const dispatch = useDispatch()
   const history = useHistory()
  const handleChange = (e) => {
    setInput({...input,[e.target.name]:e.target.value});
  }
  const auth = useSelector(state => state.authReducer)
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser({...input,role:match.params.role},history))
  }

  const handleCancel = () => {
    setInput({...input});
  }
  return (
    <div className="body">
    <div className="container">
   <div className="d-flex justify-content-center h-100">
     <div className="card1">
       <div className="card-header">
         <h3>Register</h3>
         
       </div>
       <div className="card-body">
         <form>
           <div className="input-group form-group">
             <input type="text" className="form-control" name="firstname" placeholder="Your FirstName" onChange={(e)=>handleChange(e)} />
           </div>
           <div className="input-group form-group">
             <input type="text" className="form-control" name="lastname" placeholder="lastname" onChange={(e)=>handleChange(e)} />
           </div>
           <div className="input-group form-group">
             <input type="text" className="form-control" name="email" placeholder="your Email" onChange={(e)=>handleChange(e)} />
           </div>
           <div className="input-group form-group">
             <input type="text" className="form-control" name="adress" placeholder="Your Adress" onChange={(e)=>handleChange(e)} />
           </div>
           <div className="input-group form-group">
             
             <input type="password" className="form-control" name="password" placeholder="your password" onChange={(e)=>handleChange(e)} />
           </div>
           <div className="input-group form-group">
             
             <input type="text" className="form-control" name="tel" placeholder="your telephone" onChange={(e)=>handleChange(e)} />
           </div>
           <div className="form-group">
             <div className="flexInput">
             <input type="submit"  defaultValue="Login" className="btn float-right login_btn" onClick={(e)=>handleSubmit(e)} value="Register"/>
             <input type="submit"  defaultValue="Login" className="btn float-right login_btn" onClick={()=>handleCancel()} value="Cancel"/>
           </div>
           </div>
         </form>
         <div>  <h2>{auth.errors && auth.errors.map(el=>el.msg)}</h2></div>
       </div>
     </div>
   </div>
 </div>
   </div>
)
}

export default Register





/* import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
//react-router-dom
import {useHistory} from 'react-router-dom'
//redux
import {registerUser} from '../actions/authAction'
import {useDispatch, useSelector} from 'react-redux'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright ?? '}
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




export default function Register({match}) {
  const classes = useStyles();
//FUNCTIONS
 const [input, setInput] = useState({
  firstname :'',
  lastname :'',
  email :'',
  adress :'',
  password :'',
  role :'',
  tel:''
});
 const dispatch = useDispatch()
 const history = useHistory()
const handleChange = (e) => {
  setInput({...input,[e.target.name]:e.target.value});
}
const auth = useSelector(state => state.authReducer)
const handleSubmit = (e) => {
  e.preventDefault();
  dispatch(registerUser({...input,role:match.params.role},history))
}
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
         Register
        </Typography>
        <form className={classes.form} noValidate>
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="firstname"
            label="firstname"
            name="firstname"
            autoComplete="firstname"
            onChange={handleChange}
            autoFocus
          />
<TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="lastname"
            label="lastname"
            name="lastname"
            autoComplete="lastname"
            onChange={handleChange}
            autoFocus
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            onChange={handleChange}
            autoFocus
          />
           <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="adress"
            label="address"
            name="adress"
            autoComplete="adress"
            onChange={handleChange}
            autoFocus
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
            onChange={handleChange}
            autoComplete="current-password"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="tel"
            label="tel"
            name="tel"
            autoComplete="tel"
            onChange={handleChange}
            autoFocus
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Sign In
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
      <h2>{auth.errors && auth.errors.map(el=>el.msg)}</h2>
    </Container>
  );
} */