import { Grid ,makeStyles,IconButton,fade} from '@material-ui/core';
import classNames from 'classnames';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Bucket from '../Components/Bucket';
import Create from '../Components/Create';
import Loader from '../Components/Loader';
import {makeDeleteBucketListRequest, makeGetBucketListRequest, makeUpdateBucketListRequest} from '../Redux/Bucket/action'
import DeleteIcon from '@material-ui/icons/Delete';
import Header from '../Components/Header';


const useStyles = makeStyles(theme=>({
    container:{
        padding:"4vw",     
    },
    bucket:{
        position:'relative',
        "&:hover":{
            "& $button":{
                display:'block'
            }
        }
    },
    button:{
        position:"absolute",
        zIndex:"1",
        top:"0",
        right:"0",
        backgroundColor:"#5AAC44",
        transform:"scale(0.7)",
        display:"none",
        "&:hover":{
            backgroundColor:fade("#5AAC44",0.25),
            
          }
    },
    editbutton:{
        right:"15%",
    },
    closebutton:{
        right:"30%"
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
   
    const handleDelete = (bucketId)=>{
        
        dispatch(makeDeleteBucketListRequest({
            token,
            bucketId
        }))
    }

    const handleUpdate = useCallback((bucketId,title)=>{
        dispatch(makeUpdateBucketListRequest({
            token,bucketId,title
        }))
    },[])
    return (
    
       <>
       {isLoading && <Loader/>}
       <Header />
        <div className={classes.container}>
            
            <Grid spacing={2}  container  >
              
               {
                   bucketList.map(bucket =>  
                   <Grid className={classes.bucket} key={bucket._id} item  lg={3} md={4} sm={6} xs={12}>
                        <Bucket parentClass={classes} handleUpdate={handleUpdate} _id={bucket._id}  title={bucket.title} todos={bucket.todos} />
                        
                        <IconButton onClick={()=>handleDelete(bucket._id)}  className={classNames( classes.button)}>
                           <DeleteIcon />
                        </IconButton>
                      
                        
                    </Grid>)
               }
                <Grid item  lg={3} md={4} sm={6} xs={12}>
                <div style={{width:"315px"}}>
                    <Create label="Create a Bucket" addBucket={true} />
                </div>
                    
                </Grid>
            </Grid> 
        </div>
        </>

       
    );
}

export default Home;