import React from 'react';
import {Paper,makeStyles} from '@material-ui/core'

const useStyles = makeStyles((theme)=>({
    root:{
        width:'300px',
        backgroundColor:"#ebecf0",
        marginLeft:theme.spacing(1)
    },
    card:{
        padding:theme.spacing(1,1,1,2),
        margin:theme.spacing(1)
    }
}))

function Todo(props) {
    const classes = useStyles()
    return (
        <div>
            <Paper className={classes.card}>
                Todo
            </Paper>
        </div>
    );
}

export default Todo;