import { Button, IconButton, InputBase, Paper, makeStyles, fade,FormControl,Select,InputLabel,MenuItem} from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear'
import classNames from 'classnames';
import React from 'react';
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
    const [option, setOption] = React.useState('');
    const handleChange = (event) => {
        setOption(event.target.value);
      };
    return (
        <div>
            <div >
                <Paper className={classNames(classes.card)}>
                    {
                        option === 'custom' ?  
                        <>
                        <InputBase   fullWidth inputProps={{
                                                className:classes.input, 
                                                 }}
                        placeholder="add a bucket"
                        autoFocus={true}
                        />
                         <IconButton className={classNames(classes.closeOption)} onClick={()=>setOption("")}>
                            <ClearIcon/>
                        </IconButton>
                        </>
                        :    <Options handleChange={handleChange} />
                    }
                 
                   
                </Paper>
            </div>
            <div className={classNames(classes.addBtnContainer)}>
                <Button className={classNames(classes.addButton)}>
                    Add Bucket
                </Button>
                <IconButton onClick={()=>setOpen(false)}>
                    <ClearIcon/>
                </IconButton>
            </div>
        </div>
    );
}

export default BucketInputCard;