import React from 'react';
import {Paper,Typography,CssBaseline,makeStyles} from '@material-ui/core'
import Title from './Title';

const useStyles = makeStyles((theme)=>({
    root:{
        width:'300px',
        backgroundColor:"#ebecf0",
        marginLeft:theme.spacing(1)
    }
}))

function Todo(props) {
    const classes = useStyles();
    return (
        <div>
            <Paper className={classes.root}>
                <CssBaseline/>
                <Title/>
            </Paper>
        </div>
    );
}

export default Todo;