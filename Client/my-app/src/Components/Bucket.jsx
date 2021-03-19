import {React,useState} from 'react';
import {Paper,CssBaseline,makeStyles,IconButton} from '@material-ui/core'
import Title from './Title';
import Todo from './Todo';
import Create from './Create';
import DeleteIcon from '@material-ui/icons/Delete';
import classNames from 'classnames'
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme)=>({
    constainer:{
        position:'relative',
        
    },
    root:{
        width:'100%',
        backgroundColor:"#ebecf0",
        margin:theme.spacing(1,1,1,1),
        
    },
  
    
}))

function Bucket({title,todos,_id,handleUpdate,parentClass}) {
    const classes = useStyles();
    const [editTitle,setEditTitle] = useState(false)
    const [text,setText] = useState(title)

    return (
        <>
        <div className={classes.container}>
            <Paper className={classes.root}>
                <CssBaseline/>
                <Title text={text} setText={setText} title={title} editTitle={editTitle} setEditTitle={setEditTitle}/>
                {
                    todos.map(({_id,task,isDone,bucket})=><Todo key={_id} task={task} _id={_id} bucket={bucket} isDone={isDone}/>)
                }
                <Create bucketId={_id} label="Create a Todo" />
                
            </Paper>
           
        </div>
        {
                            

                            editTitle ? 
                                        <>
                                        <IconButton onClick={()=>{
                                        
                                            setEditTitle(false)
                                            text && handleUpdate(_id,text)}}  
                                            className={classNames( parentClass.button,parentClass.editbutton)}>
                                            <SaveIcon />
                                        </IconButton>
                                        <IconButton onClick={()=>setEditTitle(false)}  className={classNames( parentClass.button,parentClass.closebutton)}>
                                            <CloseIcon />
                                        </IconButton>
                                        </>
                                        :
                                        <IconButton onClick={()=>setEditTitle(true)}  className={classNames( parentClass.button,parentClass.editbutton)}>
                                            <EditIcon />
                                        </IconButton>
                        }
        </>
    );
}

export default Bucket;