import { InputBase, Typography,makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import Classname from 'classnames'

const useStyles = makeStyles((theme)=>({
    editableTitleContainer:{
        marginLeft:theme.spacing(1),
        display:'flex'
    },
    editableTitle:{
        flexGrow:1,
    },
    textStyle:{
        fontSize:"1.2rem",
        fontWeight:"bold"
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
                    <InputBase value="Todo" 
                    className={Classname(classes.textStyle)}
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
                        <Typography className={Classname(classes.editableTitle,classes.textStyle)} onClick={()=>setOpen(true)}>
                            Todo
                        </Typography>
                </div>
       
            }
        </div>
    );
}

export default Title;