import { Paper, Typography,makeStyles, fade, Collapse } from '@material-ui/core';
import React, { useState } from 'react';
import classNames from 'classnames'
import InputCard from './InputCard';
import BucketInputCard from './BucketInputCard';

const useStyles = makeStyles((theme)=>({
    root:{
        marginTop:theme.spacing(2),
      
    },
   addCard:{
       padding:theme.spacing(1,1,1,2),
       margin:theme.spacing(0,1,1,1),
       backgroundColor:"#ebecf0",
       "&:hover":{
           backgroundColor: fade("#000",0.25),
           cursor:"pointer"
       }
   }
}))
function Create({addBucket=false,label,bucketId}) {
    const classes = useStyles();
    const [open,setOpen] = useState(false)
    return (
        <div className={classNames(classes.root)}>
            <Collapse in={open}>
                {
                    addBucket ? <BucketInputCard setOpen={setOpen} /> : <InputCard bucketId={bucketId} setOpen={setOpen} />
                }
                
            </Collapse>
            <Collapse in={!open}>            
                <Paper
                className={classNames(classes.addCard)}
                elevation={0}
                onClick={()=>setOpen(true)}
                >
                    <Typography>
                    + {label}
                    </Typography>
                </Paper>
            </Collapse>
        </div>
    );
}

export default Create;