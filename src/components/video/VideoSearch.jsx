import React from 'react'
import { Link } from 'react-router-dom'

const VideoSearch = ({videos}) => {
    return (
        <>
            {
                videos.map((video, key)=>{
                    <div className='video' key={key}>
                        <div className='video_tumb play_icon' style={{backgroundImage:`url($(video.snippet.thumbnails?.high?.url` || `default-image-url-jpg)`}}>
                            <Link to={`/video/${video.id.videoId}`}/>
                        </div>
                        <div className='video_info'>
                            <Link to={`/video.id?.videoId`}>{video.snippet.title}</Link>
                        </div>
                        <div className='author'>
                            <Link to={`/channel/${video.snippet.channelId}`}>{video.snippet.channelTitle}</Link>
                        </div>
                    </div>
                })
            }
        </>
    )
}

export default VideoSearch