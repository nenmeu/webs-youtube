import React from 'react'
import Main from '../components/section/Main'
import Today from '../components/content/Today'
import Music from '../components/content/Music'
import Movie from '../components/content/Movie'
import Book from '../components/content/Book'
import Anime from '../components/content/Anime'
import Portfolio from '../components/content/Portfolio'
import Youtube from '../components/content/Youtube'

const Home = () => {
  return (
    <Main title="유튜브 채널" description="유튜브 채널 페이지입니다.">
      <Today/>
      <Music/>
      <Movie/>
      <Book/>
      <Anime/>
      <Portfolio/>
      <Youtube/>
    </Main>
  )
}

export default Home