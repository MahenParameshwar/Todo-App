import { Button, IconButton, InputBase, Paper, makeStyles, fade} from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear'
import classNames from 'classnames';
import React from 'react';

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
    return (
        <div>
            <div >
                <Paper className={classNames(classes.card)}>
                    <InputBase  multiline fullWidth inputProps={{
                        className:classes.input,
                        
                    }}
                    placeholder="add a todo"
                    autoFocus={true}
                    />
                </Paper>
            </div>
            <div className={classNames(classes.addBtnContainer)}>
                <Button className={classNames(classes.addButton)}>
                    Add Todo
                </Button>
                <IconButton onClick={()=>setOpen(false)}>
                    <ClearIcon/>
                </IconButton>
            </div>
        </div>
    );
}

export default InputCard;