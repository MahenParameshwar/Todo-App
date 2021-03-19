import React, { useState,useEffect } from 'react';
import { Link, useHistory, Redirect } from 'react-router-dom';
import LoginLayout from '../Layouts/LoginLayout';
import styles from '../Styles/login.module.css'

import {useDispatch, useSelector} from 'react-redux'

import { makeRegisterRequest, registerReset } from '../Redux/Register/action';

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }));

function Register(props) {
   
    const [username,setUserName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const {success,error,isLoading,message} = useSelector(state=>state.register)
   
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch();
    const [severity,setSeverity] = useState("success");
    const token = localStorage.getItem('token')
    
    const handleRegister = (e)=>{
        e.preventDefault();
        dispatch(makeRegisterRequest({username,email,password}));
    }

    useEffect(()=>{
        if(success){
          setSeverity("success");
          setOpen(true);
          dispatch(registerReset());
          setUserName('');
          setPassword('');
          setEmail('');
        }
        else if(error){
          setSeverity("error")
          setOpen(true)
          dispatch(registerReset())
        }
    },[success,error])

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };

    return (
      token ? <Redirect to="/" /> :
        <LoginLayout>
            <div className={styles.loginContainer}>
                <h1>
                    Register
                </h1>
                <form className={styles.form} onSubmit={handleRegister}>
                  
                    <input value={username} onChange={(event)=>setUserName(event.target.value)}
                     type="text" placeholder="Username" required/>
                    <input value={email} onChange={(event)=>setEmail(event.target.value)}
                     type="email" placeholder="Email" required/>
                    <input value={password} onChange={(event)=>setPassword(event.target.value)}
                    type="password" placeholder="Password" required/>
                    <input type="submit" value="Register"/>
                </form>
                <Link to="/login">
                    Already have an account? Login here.
                </Link>
            </div>
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity}>
          {message}
        </Alert>
      </Snackbar>
        </LoginLayout>
    );
}

export default Register;
