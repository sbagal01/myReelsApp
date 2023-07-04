import React,{useRef,useState,useEffect} from 'react'
import './Video.css';
import VideoFooter from '../footer/VideoFooter'
import VideoSidebar from '../sidebar/VideoSidebar.js';
import VisibilitySensor from 'react-visibility-sensor';
import useElementOnScreen from '../hook/useElementOnScreen';
export default function Video({
  url,
  channel,
  description,
  song,
  likes,
  messages,
  share,
}) {
  const [play,setPlay]=useState(false);
  const videoRef=useRef(null);
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3
}
  const onVideoPress=()=>{
    if(play){
      videoRef.current.pause();
      setPlay(false);

    }
    else{
      videoRef.current.play();
      setPlay(true);
    }
    
  }
  const isVisible=useElementOnScreen(options,videoRef)

  // useEffect(()=>{
  //   setTimeout(()=>{
  //     if(isVisible)
  //   {
  //     if(!play){
  //       videoRef.current.play();
  //       setPlay(true);
  //     }
  //   }
  //   else{
  //     if(play){
  //       videoRef.current.pause();
  //       setPlay(false);
  //     }
  //   }
  //   },1000)
  // },[]);

  // useEffect(() => {
  //   setTimeout(()=> {
  //     if(channel === 'saurabhbagal'){
  //       console.log('testing')
  //       videoRef.current.play();
  //       setPlay(true)
  //     } else {
  //       videoRef.current.pause();
  //       setPlay(false)
  //     }
  //   },500)
  // }, )

  const handleVisibilityChange=(isVisible)=>{
    console.log(videoRef);
    if (videoRef && !isVisible) {
      videoRef.current.pause();
      setPlay(false);
    }
  }

  return (
    <div className="video">
      {/* <VisibilitySensor onChange={handleVisibilityChange}> */}
      
          <video loop src={url} ref={videoRef} onClick={onVideoPress} className="video_player"></video>
      {/* </VisibilitySensor> */}
      
      {/* <video loop ref={videoRef} onClick={onVideoPress} className="video_player">
        <source src={url} type="video/webm" />
      </video> */}
      <VideoFooter channel={channel} description={description} song={song}/>
      <VideoSidebar likes={likes} share={share} messages={messages}/>
    </div>
  )

}
