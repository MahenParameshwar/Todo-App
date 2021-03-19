import React, { useState } from 'react';
import {Paper,makeStyles,InputBase, IconButton, Box, fade} from '@material-ui/core'
import classNames from 'classnames'
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';

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
          "& $updateButton":{
                display:"block"
            }
        }
    },
    updateButton:{
        position:"absolute",
        top:"-50%",
        right:"0",
        backgroundColor:"#5AAC44",
        transform:"scale(0.7)",
        display:"none",
       
        "&:hover":{
            backgroundColor:fade("#5AAC44",0.25)
          }
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
                    <IconButton className={classes.updateButton}>
                        <SaveIcon />
                    </IconButton>
                 </Paper>
             </div>
         :
             <div >
                     <Paper className={classes.card}>
                        <Box onClick={()=>setOpen(true)}>
                            Todo
                        </Box>
                        <IconButton className={classes.updateButton}>
                           <DeleteIcon />
                        </IconButton>
                    </Paper>
             </div>
    
         }
     </div>
    );
}

export default Todo;