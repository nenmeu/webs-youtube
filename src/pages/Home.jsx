import React from 'react'
import Main from '../components/section/Main'
import Today from '../components/content/Today'
import Music from '../components/content/Music'
import VideoSlider from '../components/video/VideoSlider'
import { movieText } from '../data/movie'
import { BookText } from '../data/book'
import { AnimeText } from '../data/anime'

const Home = () => {
  return (
    <Main title="유튜브 채널" description="유튜브 채널 페이지입니다.">
      <Today/>
      <Music/>
      <VideoSlider videos={movieText} title='(ﾉ*ФωФ)ﾉ추천 영화를 소개합니다.' id='movie'/>
      <VideoSlider videos={BookText} title='（づ￣3￣）づ추천 도서를 소개합니다.' id='book'/>
      <VideoSlider videos={AnimeText} title='o(￣▽￣)ｄ 추천 애니를 소개합니다.' id='anime'/>
      {/* <VideoSlider id='book'/>
      <VideoSlider id='anime'/> */}
      {/* <Movie/>
      <Book/>
      <Anime/> */}
      {/* <Portfolio/>
      <Youtube/> */}
    </Main>
  )
}

export default Home