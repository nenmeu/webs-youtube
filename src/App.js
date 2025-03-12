import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Today from './pages/Today'
import Music from './pages/Music'
import Movie from './pages/Movie'
import Book from './pages/Book'
import Anime from './pages/Anime'
import Port from './pages/Port'
import Youtube from './pages/Youtube'
import Channel from './pages/Channel'
import Vido from './pages/Vido'
import Search from './pages/Search'
import Header from './compocects/section/Header'
import Main from './compocects/section/Main'
import Footer from './compocects/section/Footer'

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Main>
        <Routes>
          <Route path = '/' element = {<Home/>} />
          <Route path = '/today' element = {<Today/>} />
          <Route path = '/music' element = {<Music/>} />
          <Route path = '/movie' element = {<Movie/>} />
          <Route path = '/book' element = {<Book/>} />
          <Route path = '/anime' element = {<Anime/>} />
          <Route path = '/port' element = {<Port/>} />
          <Route path = '/youtube' element = {<Youtube/>} />
          <Route path = '/channel/:channelID' element = {<Channel/>} />
          <Route path = '/vido/:videoID' element = {<Vido/>} />
          <Route path = '/search/:searchID' element = {<Search/>} />
          <Route path = '/*'/>
        </Routes>
      </Main>
      <Footer></Footer>
    </BrowserRouter>
  )
}

export default App
