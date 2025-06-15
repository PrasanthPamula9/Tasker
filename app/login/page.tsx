import React from "react";
import Login from "@/components/Forms/login";

import { FormControl, InputLabel, Input, FormHelperText,TextField,Button } from '@mui/material';



export default function Page() {
    return (
        <div style={{
            display:'flex',
            flexDirection:'column',
            width:'20%',
            marginLeft:"10%",
            marginTop:'10%'
          
        }}>

        <Login></Login>
        </div>



    )
}