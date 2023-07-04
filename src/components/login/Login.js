import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Swal from "sweetalert2";
const url =
  "https://img.freepik.com/premium-photo/reels-instagram-logo-white_1379-5039.jpg";

export default function Login() {
  const [user, setUser] = useState({});
  let navigateTo = useNavigate();
  const handleSubmit = () => {
    //e.preventDefault();
    let correctPassword = window.localStorage.getItem(user.email);
    if (correctPassword === user.password) {
      navigateTo("/reel");
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went Wrong",
        footer: "<em>Username and password do not match!</em>",
      });
    }
    console.log(user);
  };
  return (
    <Box sx={{ display:"flex", flexDirection:'column', justifyContent: "center", alignItems: "center" }}>
      <Typography >
        Login Form
      </Typography>
      <Card
        
      >
        <CardContent
           sx={{
            width: "1000px",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src={url}
            alt=""
            alignItems="center"
            height="60px"
            width="80px"
          ></img>
            <TextField
              sx={{width: "700px"}}
              type="email"
              id="outlined-basic"
              label="Type Email"
              variant="outlined"
              margin="normal"
              fullWidth="true"
              value={user.email}
              onChange={(e) => {
                setUser({ ...user, email: e.target.value });
              }}
            />
            <TextField sx={{width: "700px"}}
              id="outlined-password-input"
              label="Password"
              type="password"
              margin="normal"
              value={user.password}
              autoComplete="current-password"
              onChange={(e) => {
                setUser({ ...user, password: e.target.value });
              }}
            />
            <Button
              variant="contained"
              size="medium"
              margin="normal"
              onClick={handleSubmit}
            >
              Login
            </Button>
        </CardContent>
        <br />
        {/* Everything is component and is used like it */}
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
            Don't have an account?{" "}
            <Button
              variant="text"
              onClick={() => {
                navigateTo("/signup");
              }}
            >
              <Typography>SignUp</Typography>
            </Button>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
