import React from 'react'
import { Link } from 'react-router-dom'

const VideoCard = ({videos}) => {
    return (
        <>
            {videos.map((video, key)=>(
                <div className='video' key={key}>
                    <div className='video_tumb play_icon'>
                        <Link to={`video/${video.videoId}`}>
                            <img src={video.img} alt={video.title}/>
                        </Link>
                    </div>
                </div>
            ))}
        </>
    )
}

export default VideoCard