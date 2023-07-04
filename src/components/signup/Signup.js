import Box from "@mui/material/Box";
import React, {useState} from 'react'
import  {useNavigate} from 'react-router-dom';
import Card from '@mui/material/Card';
import Swal from 'sweetalert2';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
const url='https://img.freepik.com/premium-photo/reels-instagram-logo-white_1379-5039.jpg'

export default function Signup() {
  const navigateTo=useNavigate();
  let [user,setUser]=useState({});
  const handleSignup=(e)=>{
    e.preventDefault();
    if(user.password===user.confirmPassword){
      Swal.fire({
        title:"Perfect!",
            text: "Would ypu like to Login ?",
            icon:"success",
            showCancelButton: true,
            confirmButtonColor:"#3085d6",
            cancelButtonColor:"#d33",
            confirmButtonText:"yes, take me to Login Page!"
      }).then((result)=>{
        if(result.isConfirmed){
          localStorage.setItem(user.email,user.password);
          navigateTo("/login");
        }
      })
      
    }else{
      Swal.fire({
        icon:"error",
        title:"Oops...",
        text:"Something went Wrong",
        footer:"<em>passwords and ConfirmPasswords do not match!</em>"})  
    }
        
  }
  return (
    <Box sx={{ display:"flex", flexDirection:'column', justifyContent: "center", alignItems: "center" }}>
      <Typography >SignUp Form</Typography>
      <Card>

      <CardContent sx={{
            width: "1000px",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}>

    <img src={url} alt="" alignItems="center" height="60px" width="80px" ></img>
    
    <TextField sx={{width: "700px"}} type="email" id="outlined-basic" label="Type Email" variant="outlined" margin="normal" fullWidth="true" value={user.email} onChange={(e)=>{setUser({...user,email:e.target.value})}}/>
  
    
    <TextField
          id="outlined-password-input"
          label="Password" sx={{width: "700px"}}
          type="password" margin="normal" value={user.password}
          autoComplete="current-password" onChange={(e)=>{setUser({...user,password:e.target.value})}}
        />
       
    
    <TextField
          id="outlined-password-input"
          label="confirmPassword" sx={{width: "700px"}}
          type="confirmPassword" margin="normal" value={user.confirmPassword}
          autoComplete="current-password" onChange={(e)=>{setUser({...user,confirmPassword:e.target.value})}}
        />
    
      
      <Button variant="contained" size="medium" margin="normal" onClick={handleSignup}>SignUp</Button>
    
      </CardContent>
      </Card>
      <Card
        
        sx={{ margin:"10px",
          width: "1000px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <CardContent >
          <Typography>
            Already have an account ?{" "}
            <Button
              variant="text"
              onClick={() => {
                navigateTo("/login");
              }}
            >
              <Typography>Login</Typography>
            </Button>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  )
}
