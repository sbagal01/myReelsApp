import React from 'react'
import './VideoFooter.css';
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import Ticker from 'react-ticker';
export default function VideoFooter({channel,description,song}) {
  return (
    <div className="videoFooter">
      {/* <h2>I am footer</h2> */}
      <div className="videoFooter_text">
        <h3>@ {channel}</h3>
        <p>{description}</p>
        <div className="videoFooter_ticker">
        <MusicNoteIcon className="videoFooter_icon"/>
        <Ticker mode="smooth">
            {({index})=>(
                <>
                <p>{song}</p>
                </>
            )}
        </Ticker>
        {/* chain By default, the elements follow one and another immediately.
await A new element appears as soon as the previous one has disappeared completely.
smooth A new element appears as soon as the previous one starts to disappear. */}

        </div>
      </div>
      <img className="video_record" src="https://static.thenounproject.com/png/934821-200.png" alt=""></img>
    </div>
  )
}
