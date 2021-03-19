import { Button, IconButton, InputBase, Paper, makeStyles, fade} from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear'
import classNames from 'classnames';
import React, { useState } from 'react';

const useStyles = makeStyles((theme)=>({
    card:{
        margin:theme.spacing(0,1,1,1),
        paddingBottom:theme.spacing(4),
    },
    input:{
        margin:theme.spacing(1)
    },
    addButton:{
        backgroundColor:"#5AAC44",
        color:"#fff",
        "&:hover":{
            backgroundColor: fade("#5AAC44",0.25)
        }
       
    },
    addBtnContainer:{
        margin:theme.spacing(0,1,1,1)
    }
}))


function InputCard({setOpen}) {
    const classes = useStyles();
    const [text,setText] = useState("");
    
    const handleInputChange = e=>{
        setText(e.target.value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div >
                    <Paper className={classNames(classes.card)}>
                        <InputBase  multiline fullWidth inputProps={{
                            className:classes.input,
                        }}
                        value={text}
                        placeholder="add a todo"
                        autoFocus={true}
                        onChange={handleInputChange}
                        required
                        />
                    </Paper>
                </div>
                <div className={classNames(classes.addBtnContainer)}>
                    <Button type="submit" className={classNames(classes.addButton)}>
                        Add Todo
                    </Button>
                    <IconButton onClick={()=>setOpen(false)}>
                        <ClearIcon/>
                    </IconButton>
                </div>
            </form>
        </div>
    );
}

export default InputCard;