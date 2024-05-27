import { useState } from "react"
import Player from "./Player";


const VideoPlayer = () => {
  const [playing, setPlaying] = useState(false);

  return (
    <>
      <div className="border border-white p-3 mb-4">
        <p className="text-2xl text-blue-400 mb-3">{playing ? 'RODANDO' : 'PAUSADO'}</p>
        <button className="bg-blue-500 px-3 py-1 rounded" onClick={() => setPlaying(!playing)}>Play/Pause</button>
      </div> 

      <Player
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
        isPlaying={playing}
      />
    </>
  )
}

export default VideoPlayer
