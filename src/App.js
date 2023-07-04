//import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from 'react';
import Video from './components/videos/Video.js';
import db from './firebase.js';
//import {Routes,Route} from 'react-router-dom';
import Upload from './components/videos/Upload.js';
function App() {
  const [videos,setVideos]=useState([]);

  async function getData(){
    try{
      let collectionRef= db.collection('video');
      let snapshot=await collectionRef.get();
      const data= snapshot.docs.map((doc)=>doc.data());
      console.log(data);
      setVideos(data);
    }catch(err){
      console.log(err);
    }
  }

  useEffect(()=>{
      getData();
    //db.collection('video').onSnapshot((snapshot)=>setVideos(snapshot.docs.map((doc)=>doc.data()))
    console.log("data is" +videos);
    //console.log(videos[0].url)
    //console.log(videos[0].likes)
  },[])
  
  return (
    <div className="App">
      <div className="uploadVideos">
        <Upload></Upload>
      </div>
        <div className="app_videos">
          {videos.map((video,i)=>{ 
            return <Video key={i} url={video.url} channel={video.channel} song={video.song} likes={video.likes} messages={video.messages} description={video.description}
              shares={video.shares} /> 
            })
            // url={video.url}
          }
          {/* <Video url="https://www.youtube.com/shorts/cyMSVH1-wrk" channel="saurabhbagal" description="WOW this works" song="the sunny song" likes={123}  messages={34} share={60}/> */}
          
          

          
        </div>
    </div>
  );
}

export default App;
