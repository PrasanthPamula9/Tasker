import React from "react";
import { FormControl, InputLabel, Input, FormHelperText,TextField,Button } from '@mui/material';



export default function Login():React.JSX.Element{
    return(
        <>
            {/* <FormControl sx={{
    width:'50%',
    marginTop:'10%',
    marginLeft:"5%",
    paddingTop:"10px"
 }}>
<InputLabel htmlFor="my-input">Email address</InputLabel>
 <Input id="my-input" aria-describedby="my-helper-text" sx={{
    marginBottom:"30px"
 }}/>
 <div>

 <Input id="my-input2" aria-describedby="my-helper-text" />
 </div>
</FormControl> */}
        <TextField id="standard-basic" label="Username" variant="standard" />
        <TextField id="standard-basic" label="Password" variant="standard" />
        <Button variant="contained" sx={{
            marginTop:"10px"
        }}>submit</Button>
  
        </>
    )

}