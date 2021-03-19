import React, { useState } from 'react';
import {Paper,makeStyles,InputBase, IconButton, Box, fade} from '@material-ui/core'
import classNames from 'classnames'
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';
import { useDispatch } from 'react-redux';
import { makeDeleteTodoRequest, makeUpdateTodoRequest } from '../Redux/Bucket/action';

const useStyles = makeStyles((theme)=>({
    root:{
        width:'300px',
        backgroundColor:"#ebecf0",
        marginLeft:theme.spacing(1)
    },
   
    card:{
        padding:theme.spacing(1,1,1,2),
        margin:theme.spacing(2),
        cursor:"pointer",
        position:"relative",
        "&:hover":{
          "& $button":{
                display:"block"
            }
        }
    },
    button:{
        position:"absolute",
        top:"-50%",
        right:"0",
        backgroundColor:"#5AAC44",
        transform:"scale(0.7)",
     
        display:"none",
       
        "&:hover":{
            backgroundColor:fade("#5AAC44",0.25),
            
          }
    },
    editBtn:{
        right:"15%"
    },
    closeButton:{
        right:"15%"
    },
    doneBtn:{
        right:"30%",
        backgroundColor:"white",
        border:"1px solid #5AAC44",
        "&:hover":{
            backgroundColor:fade("#000",0.25),
            
          }
    },
    done:{
        backgroundColor:"#5AAC44",
        "&:hover":{
            backgroundColor:fade("#5AAC44",0.25),
            
          }
    },
    task:{
       
    },
    cross:{
        textDecoration:"line-through"
    }
   
    
}))

function Todo({task,isDone,_id,bucket}) {
    const classes = useStyles();
    const [open,setOpen] = useState(false);
    const [text,setText] = useState(task);
    const dispatch = useDispatch()
    const token = localStorage.getItem("token")

    const handleSubmit = (e,toggle)=>{
        e?.preventDefault();
        dispatch(makeUpdateTodoRequest({
            token,
            isDone: toggle ? !isDone : isDone,
            task:text,
            todoId:_id
        }))
        setOpen(false)
    }
    return (
         <div>
         {

         open ? 
             <div className={classes.todoContainer}>
                <form onSubmit = {handleSubmit}>
                    <Paper className={classes.card}>
                        <InputBase value={text}
                        onChange={(e)=>{
                            setText(e.target.value)
                        }} 
                        className={classNames(classes.input)}
                        inputProps={{
                            className:classes.input
                        }} 
                        fullWidth
                        autoFocus
                        
                        />
                        <IconButton onClick={()=>setOpen(false)}  className={classNames( classes.button,classes.closeButton)}>
                            <CloseIcon />
                        </IconButton>
                        <IconButton type='submit' className={classNames( classes.button)}>
                            <SaveIcon />
                        </IconButton>
                    </Paper>
                 </form>
             </div>
         :
             <div >
                     <Paper className={classes.card}>
                        <Box className={classNames(classes.task,{ [classes.cross] : isDone})} >
                        
                        {isDone && <span >&#10003;</span>} 
                        
                        {task}
                        </Box>
                        <IconButton onClick={()=>{
                            handleSubmit(null,true)
                        }} className={classNames( classes.button,classes.doneBtn,{ [classes.done] : isDone})}>
                           <DoneIcon />
                        </IconButton>
                        <IconButton onClick={()=>{
                            dispatch(makeDeleteTodoRequest({
                                token,
                                todoId:_id,
                                bucketId:bucket
                            }))
                        }} className={classNames( classes.button)}>
                           <DeleteIcon />
                        </IconButton>
                        <IconButton onClick={()=>setOpen(true)} className={classNames( classes.button,classes.editBtn)}>
                           <EditIcon />
                        </IconButton>
                    </Paper>
             </div>
    
         }
     </div>
    );
}

export default Todo;