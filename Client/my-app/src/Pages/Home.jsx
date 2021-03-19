import { Grid ,makeStyles} from '@material-ui/core';
import classNames from 'classnames';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Bucket from '../Components/Bucket';
import Create from '../Components/Create';
import Loader from '../Components/Loader';
import {makeGetBucketListRequest} from '../Redux/Bucket/action'


const useStyles = makeStyles(theme=>({
    container:{
        padding:"4vw",
       
            
    }
}))
function Home(props) {

    const classes = useStyles();
    const {bucketList,isLoading} = useSelector(state=>state.bucketList)
    const token = localStorage.getItem("token")
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(makeGetBucketListRequest({token}))
    },[])
   
    return (
       

        isLoading ? <Loader /> :
       
        <div className={classes.container}>
            <Grid container  >
              
               {
                   bucketList.map(bucket =>  
                   <Grid key={bucket._id} item  lg={3} md={4} sm={6} xs={12}>
                        <Bucket title={bucket.title} todos={bucket.todos} />
                    </Grid>)
               }
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