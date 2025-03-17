import React from 'react'
import Main from '../components/section/Main'
import VideoCard from '../components/video/VideoCard'
import { movieText } from '../data/movie'

const Movie = () => {
  return (
    <Main title="영화 채널" 
    description="영화 페이지입니다.">
      <section id='moviePage'>
        <h2>(ﾉ*ФωФ)ﾉ추천영화 페이지.</h2>
        <div className='video_inner'>
          <VideoCard videos={movieText}/>
        </div>
      </section>
    </Main>
  )
}

export default Movie