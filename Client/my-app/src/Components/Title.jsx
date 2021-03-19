import { InputBase, Typography,makeStyles } from '@material-ui/core';
import React, { useState } from 'react';


const useStyles = makeStyles((theme)=>({
    editableTitleContainer:{
        marginLeft:theme.spacing(1),
        display:'flex'
    },
    editableTitle:{
        flexGrow:1
    },
    input:{
        margin:theme.spacing(1),
        "&:focus":{
            backgroundColor:"#ddd"
        }
    }
    
}))

function Title(props) {
    const [open,setOpen] = useState(false);
    const classes = useStyles()
    return (
        <div>
            {

            open ? 
                <div>
                    <InputBase value="todo" 
                    inputProps={{
                        className:classes.input
                    }} 
                    fullWidth
                    autoFocus
                    onBlur={()=>setOpen(false)}
                    />
                </div>
            :
                <div className={classes.editableTitleContainer}>
                        <Typography className={classes.editableTitle} onClick={()=>setOpen(true)}>
                            Todo
                        </Typography>
                </div>
       
            }
        </div>
    );
}

export default Title;