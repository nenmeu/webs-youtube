import React from 'react'
import Main from '../components/section/Main'
import { BookText } from '../data/book'
import VideoCard from '../components/video/VideoCard'

const Book = () => {
  return (
    <Main title="도서사이트" description="도서사이트 페이지입니다.">
      <section id='bookPage'>
        <h2>(ﾉ*ФωФ)ﾉ추천도서 페이지.</h2>
        <div className='video_inner'>
          <VideoCard videos={BookText}/>
        </div>
      </section>
    </Main>
  )
}

export default Book