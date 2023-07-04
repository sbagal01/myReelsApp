import React,{useState} from 'react'
import './VideoSidebar.css';
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import MessageIcon from "@material-ui/icons/Message";
import ShareIcon from "@material-ui/icons/Share";

export default function VideoSidebar({likes,share,messages}) {
    const [liked,setLiked]=useState(false);
  return (
    <div className="videoSidebar">
      
      <div className="videoSidebar_button">{
        liked? <FavoriteIcon fontSize="large" onClick={(e)=>{setLiked(false)}} /> : <FavoriteBorderIcon fontSize="large" onClick={(e)=>{setLiked(true)}} />}
        <p>{liked ? likes+1:likes}</p>
      </div>
      <div className="videoSidebar_button">
        <MessageIcon />
        <p>{messages}</p>
      </div>
      <div className="videoSidebar_button">
        <ShareIcon />
        <p>{share}</p>
      </div>
    </div>
  )
}
