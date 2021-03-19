import { Paper, Typography,makeStyles, fade, Collapse } from '@material-ui/core';
import React, { useState } from 'react';
import classNames from 'classnames'
import InputCard from './InputCard';

const useStyles = makeStyles((theme)=>({
    root:{
        marginTop:theme.spacing(2)
    },
   addCard:{
       padding:theme.spacing(1,1,1,2),
       margin:theme.spacing(0,1,1,1),
       backgroundColor:"#ebecf0",
       "&:hover":{
           backgroundColor: fade("#000",0.25),
           cursor:"pointer"
       }
   }
}))
function CreateTodo(props) {
    const classes = useStyles();
    const [open,setOpen] = useState(false)
    return (
        <div className={classNames(classes.root)}>
            <Collapse in={open}>
                <InputCard setOpen={setOpen} />
            </Collapse>
            <Collapse in={!open}>            
                <Paper
                className={classNames(classes.addCard)}
                elevation={0}
                onClick={()=>setOpen(true)}
                >
                    <Typography>
                    + Create a Todo
                    </Typography>
                </Paper>
            </Collapse>

        </div>
    );
}

export default CreateTodo;