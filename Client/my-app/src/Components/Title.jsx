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

function Title({title,editTitle,setEditTitle,text,setText}) {
    
    
    const classes = useStyles()
    
    return (
        <div>
            {

            editTitle ? 
                <div>
                    <InputBase value={text}
                    className={Classname(classes.textStyle)}
                    inputProps={{
                        className:classes.input
                    }}
                    onChange={(e)=>setText(e.target.value)} 
                    fullWidth
                    autoFocus
                    required
                    
                    />
                </div>
            :
                <div className={classes.editableTitleContainer}>
                        <Typography className={Classname(classes.editableTitle,classes.textStyle)}>
                            {title}
                        </Typography>
                </div>
       
            }
        </div>
    );
}

export default Title;