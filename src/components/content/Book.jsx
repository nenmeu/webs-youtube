import React from 'react'
import { BookText } from '../../data/book'
import { Link } from 'react-router-dom'

const Book = () => {
  return (
    <section id='movie'>
      <h2>（づ￣3￣）づ추천 도서를 소개합니다.</h2>
      <div className='video_inner'>
        {BookText.map((video, key)=>(
          <div className='video' key={key}>
            <div className='video_thumb play_icon'>
              <Link to={'/video/$video.videoId'}>
                <img src={video.img} alt={video.title}/>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>  
    )
}

export default Book