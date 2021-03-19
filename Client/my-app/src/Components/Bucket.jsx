import React from 'react';
import {Paper,CssBaseline,makeStyles} from '@material-ui/core'
import Title from './Title';
import Todo from './Todo';
import Create from './Create';

const useStyles = makeStyles((theme)=>({
    root:{
        width:'300px',
        backgroundColor:"#ebecf0",
        margin:theme.spacing(1,1,1,1)
    }
}))

function Bucket({title,todos}) {
    const classes = useStyles();
    return (
        <div>
            <Paper className={classes.root}>
                <CssBaseline/>
                <Title title={title}/>
                {
                    todos.map(({_id,task})=><Todo key={_id} task={task}/>)
                }
                <Create label="Create a Todo" />
            </Paper>
        </div>
    );
}

export default Bucket;