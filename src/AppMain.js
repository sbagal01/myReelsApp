import React from 'react'
import {Route,Routes} from 'react-router-dom';
import App from './App';
import Signup from './components/signup/Signup';
import Login from './components/login/Login';
import Addreel from './components/addReel/Addreel';
export default function AppMain() {
  return (
    <div className="AppMain">
        <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path='/reel' element={<App/>} />
        <Route exact path="/add" element={<Addreel />} />
        </Routes>
      
    </div>
  )
}

