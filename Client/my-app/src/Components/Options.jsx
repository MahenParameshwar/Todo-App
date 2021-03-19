import React, { useEffect, useState } from 'react';
import { FormControl,Select,InputLabel,MenuItem} from '@material-ui/core';
import { useSelector } from 'react-redux';

function Options({handleChange}) {
   const [value,setValue] = useState('');
    const {bucketList} = useSelector(state=>state.bucketList)
   
    useEffect(()=>{
    handleChange(value)
   },[value])
   
    return (
        <div >
            <FormControl variant="outlined"  fullWidth>
                        <InputLabel id="demo-simple-select-outlined-label">Options</InputLabel>
                        <Select 
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        onChange={(e)=>{
                            setValue(e.target.value)
                        }}
                        style={{
                            margin:"10px",
                        }}
                        value={value}
                        label="Options"
                        >
                           
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                            <MenuItem value="custom">
                                <em>Custom</em>
                            </MenuItem>
                        </Select>
            </FormControl> 
        </div>
    );
}

export default Options;