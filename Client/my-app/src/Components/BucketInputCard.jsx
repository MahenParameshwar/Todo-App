import { Button, IconButton, InputBase, Paper, makeStyles, fade,FormControl,Select,InputLabel,MenuItem} from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear'
import classNames from 'classnames';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { makeCreateBucketRequest } from '../Redux/Bucket/action';
import Options from './Options';

const useStyles = makeStyles((theme)=>({
    card:{
        margin:theme.spacing(1,1,1,1),
        position:"relative"
       
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
    },
    closeOption:{
        backgroundColor:"#5AAC44",
        transform:"scale(0.6)",
        position:"absolute",
        right:0,
        top:"-50%",
        "&:hover":{
            backgroundColor: fade("#5AAC44",0.25)
        }
    }
}))
function BucketInputCard({setOpen}) {
    const classes = useStyles();
    const [option, setOption] = useState("");
    const [title,setTitle] = useState("");
    const dispatch = useDispatch()
    const token = localStorage.getItem("token")
    
    const handleChange = (value) => {
        if(value!=='custom'){
            setTitle(value)
        }
        else
        setOption(value);
        
    };

    const handleInputChange = e => {
        setTitle(e.target.value)
    }

    const handleSubmit = e =>{
        e.preventDefault()
        dispatch(makeCreateBucketRequest({
            token,
            title
        }))
        setTitle("")
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div >
                    <Paper className={classNames(classes.card)}>
                        {
                            option === 'custom' ?  
                            <>
                            <InputBase value={title}  
                            onChange={handleInputChange}
                            fullWidth 
                            inputProps={{className:classes.input, }}
                            placeholder="add a bucket"
                            autoFocus={true}
                            required
                            />
                            <IconButton className={classNames(classes.closeOption)} onClick={()=>setOption("")}>
                                <ClearIcon/>
                            </IconButton>
                            </>
                            :    <Options setTitle={setTitle} handleChange={handleChange} />
                        }
                    
                    
                    </Paper>
                </div>
                <div className={classNames(classes.addBtnContainer)}>
                    <Button type="submit" className={classNames(classes.addButton)}>
                        Add Bucket
                    </Button>
                    <IconButton onClick={()=>setOpen(false)}>
                        <ClearIcon/>
                    </IconButton>
                </div>
            </form>
        </div>
    );
}

export default BucketInputCard;