import React from 'react';
import { FormControl,Select,InputLabel,MenuItem} from '@material-ui/core';

function Options({handleChange}) {
   
    return (
        <div >
            <FormControl variant="outlined"  fullWidth>
                        <InputLabel id="demo-simple-select-outlined-label">Options</InputLabel>
                        <Select 
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        onChange={handleChange}
                        style={{
                            margin:"10px",
                        }}
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