import React,{useState} from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from "@mui/material/Box";
import {useNavigate} from 'react-router-dom';
import db from '../../firebase.js'; 
import { collection, addDoc } from "firebase/firestore";

export default function Addreel() {
    const navigateTo=useNavigate()    
    const [details,setDetails]=useState({});

    const addHandler=async (e)=>{
        // firebase source code for adding details
        e.preventDefault();

    //    const docRef= await addDoc(collection(db, "video"),details );     
    db.collection('video').add(details).then((docRef)=>{
        console.log(docRef.id);
        navigateTo('/reel');
    }).catch((err)=>{
        console.log(err);
        setDetails({channel:"",description:"",likes:"",messages:"",shares:"",song:"",url:""});
    })
        
    }
  return (
    <Box sx={{ margin:"10px", width: "1500px",display:"flex", flexDirection:'column', justifyContent: "center", alignItems: "center" }} >
      <Card className="uploadDetails" sx={{ width: "1000px",display:"flex", flexDirection:'column', justifyContent: "center", alignItems: "center" }}>
        <Typography sx={{margin :"10px" }}>ADD A REEL</Typography>
        <TextField name="description" id="standard-basic" label="Description" variant="standard" value={details.description} onChange={(e)=>{setDetails({...details,description:e.target.value})}} />

        <TextField sx={{margin :"10px"}} name="channel" id="standard-basic" label="Channel" variant="standard" value={details.channel} onChange={(e)=>{setDetails({...details,channel:e.target.value})}} />

        <TextField sx={{margin :"10px"}} name="likes" id="standard-basic" label="Likes" variant="standard" value={details.likes} onChange={(e)=>{setDetails({...details,likes:Number(e.target.value)})}} />

        <TextField sx={{margin :"10px"}} name="messages" id="standard-basic" label="Messages" variant="standard" value={details.messages} onChange={(e)=>{setDetails({...details,messages:Number(e.target.value)})}} />

        <TextField sx={{margin :"10px"}} name="song" id="standard-basic" label="Song" variant="standard" value={details.song} onChange={(e)=>{setDetails({...details,song:e.target.value})}} />

        <TextField sx={{margin :"10px"}} name="shares" id="standard-basic" label="shares" variant="standard" value={details.shares} onChange={(e)=>{setDetails({...details,shares:Number(e.target.value)})}} />

        <TextField sx={{margin :"10px"}} name="url" id="standard-basic" label="url" variant="standard" value={details.url} onChange={(e)=>{setDetails({...details,url:e.target.value})}} />
        <Button sx={{margin :"10px"}} variant="outlined" onClick={addHandler}>Outlined</Button>
      </Card>
    </Box>
  )
}
