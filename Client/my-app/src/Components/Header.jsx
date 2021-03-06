
import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import classNames from "classnames";


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginBottom: "30px",
     
    },
    flex:{
        display:"flex",
        justifyContent:"space-between"
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
   
    logoutBtn: {
      backgroundColor:"#5AAC44",
      color:"#fff"
      },
    
  }));
function Header(props) {
    const history = useHistory()
    const classes = useStyles();
    const {username} = useSelector(state=>state.bucketList)
    return (
        
           <div className={classes.root} >
            <AppBar style={{ backgroundColor:"#0099ff"}} position="static">
                
            <Toolbar className={classes.flex}>
                <Typography variant="h6" >
                  {username && `Welcome ${username}` } 
                </Typography>
                <Button className={classNames(classes.logoutBtn,"logoutBtn")} variant="contained" onClick={()=>{
                  localStorage.removeItem("token")
                  history.push('/login')
                }}>
                 Logout
                </Button>
            </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;