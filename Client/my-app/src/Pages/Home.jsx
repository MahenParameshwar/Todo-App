import { Grid ,makeStyles} from '@material-ui/core';
import classNames from 'classnames';
import React from 'react';
import Bucket from '../Components/Bucket';
import Create from '../Components/Create';


const useStyles = makeStyles(theme=>({
    container:{
        padding:"4vw",
       
            
    }
}))
function Home(props) {

    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Grid container  >
                <Grid item  lg={3} md={4} sm={6} xs={12}>
                    <Bucket />
                </Grid>
                <Grid item  lg={3} md={4} sm={6} xs={12}>
                    <Bucket />
                </Grid>
                <Grid item  lg={3} md={4} sm={6} xs={12}>
                    <Bucket />
                </Grid>
                <Grid item  lg={3} md={4} sm={6} xs={12}>
                    <Bucket />
                </Grid>
                <Grid item  lg={3} md={4} sm={6} xs={12}>
                    <Bucket />
                </Grid>
                <Grid item  lg={3} md={4} sm={6} xs={12}>
                <div style={{width:"315px"}}>
                    <Create label="Create a Bucket" addBucket={true} />
                </div>
                    
                </Grid>
            </Grid>
          
          
          
           
        </div>
    );
}

export default Home;