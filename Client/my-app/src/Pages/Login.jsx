import React, { useState,useEffect } from 'react';
import { Link,useHistory,Redirect} from 'react-router-dom';
import LoginLayout from '../Layouts/LoginLayout';
import { useDispatch, useSelector } from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import '../Styles/login.module.css'
import { loginErrorSuccessReset, makeLoginRequest } from '../Redux/Login/action';
import styles from '../Styles/login.module.css'
import Loader from '../Components/Loader';


function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}
function Login(props) {
    
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const {error,message,success,isLoading} = useSelector(state=>state.login) 
    const token = localStorage.getItem('token')
    const dispatch = useDispatch();
    const history = useHistory()
    const [open, setOpen] = React.useState(false);

    useEffect(()=>{
        if(error){
            setOpen(true)
           dispatch(loginErrorSuccessReset())
        }
    },[error])

    useEffect(()=>{
        if(success){
            history.push('/home')
        }
        dispatch(loginErrorSuccessReset())
    },[success])

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };
    
        const handleLogin = e => {
            e.preventDefault();
            dispatch(makeLoginRequest({
                email,
                password
            }))
        }

    return (
        token ? <Redirect to="/home" /> :
        <LoginLayout>
            {isLoading && <Loader />}
            <div className={styles.loginContainer}>
                <h1>
                    Login
                </h1>
                <form className={styles.form} onSubmit={handleLogin}>
                    <input className="loginEmail" value={email} onChange={(event)=>setEmail(event.target.value)}
                     type="email" placeholder="Email" required/>
                    <input className="loginPassword" value={password} onChange={(event)=>setPassword(event.target.value)}
                    type="password" placeholder="Password" required/>
                    <input  type="submit" value="Login"/>
                </form>
                <Link to="/register">
                    Need an account? Register here.
                </Link>
            </div>
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          {message}
        </Alert>
      </Snackbar>
        </LoginLayout>
    );
}

export default Login;