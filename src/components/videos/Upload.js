import React from 'react'
import {useNavigate} from 'react-router-dom';
import Button from "@mui/material/Button";
//import MovieIcon from '@mui/material/Movie';

export default function Upload() {
  const navigateTo=useNavigate();
    return (
    <div>
        
      <Button variant="outlined" onClick={()=>{navigateTo("/add")}} component="label" size="normal" disableElevation sx={{margin:"10px"}}>
      Upload a Reel
    </Button>
    </div>
  )
}
