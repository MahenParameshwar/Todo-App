import React, { useState } from 'react';
import {Paper,makeStyles,InputBase, IconButton, Box, fade} from '@material-ui/core'
import classNames from 'classnames'
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import DoneIcon from '@material-ui/icons/Done';

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
    doneBtn:{
        right:"30%",
        backgroundColor:"white",
        border:"1px solid #5AAC44",
        "&:hover":{
            backgroundColor:fade("#000",0.25),
            
          }
    },
    task:{
        textDecoration:"line-through"
    }
   
    
}))

function Todo(props) {
    const classes = useStyles();
    const [open,setOpen] = useState(false);
    return (
         <div>
         {

         open ? 
             <div className={classes.todoContainer}>
                 <Paper className={classes.card}>
                    <InputBase value="Todo" 
                    className={classNames(classes.input)}
                    inputProps={{
                        className:classes.input
                    }} 
                    fullWidth
                    autoFocus
                    onBlur={()=>setOpen(false)}
                    />
                    <IconButton className={classNames( classes.button)}>
                        <SaveIcon />
                    </IconButton>
                 </Paper>
             </div>
         :
             <div >
                     <Paper className={classes.card}>
                        <Box className={classes.task} >
                        <span >&#10003;</span> Todo
                        </Box>
                        <IconButton className={classNames( classes.button,classes.doneBtn)}>
                           <DoneIcon />
                        </IconButton>
                        <IconButton className={classNames( classes.button)}>
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