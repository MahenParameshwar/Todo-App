import React from 'react';
import {Paper,CssBaseline,makeStyles} from '@material-ui/core'
import Title from './Title';
import Todo from './Todo/Todo';
import CreateTodo from './Todo/CreateTodo';

const useStyles = makeStyles((theme)=>({
    root:{
        width:'300px',
        backgroundColor:"#ebecf0",
        marginLeft:theme.spacing(1)
    }
}))

function Bucket(props) {
    const classes = useStyles();
    return (
        <div>
            <Paper className={classes.root}>
                <CssBaseline/>
                <Title/>
                <Todo/>
                <Todo/>
                <Todo/>
                <Todo/>
                <CreateTodo />
            </Paper>
        </div>
    );
}

export default Bucket;