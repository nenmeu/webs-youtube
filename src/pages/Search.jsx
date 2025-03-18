import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'
import VideoSearch from '../components/video/VideoSearch'
import { useParams } from 'react-router-dom'
import {fatchFromAPI, fetchFromAPI} from '../utils/api'

const Search = () => {
  const {searchId}=useParams()
  const [videos, setVideos]=useState([])
  const [nextPageToken, setNextPageTOken]=useState(null)
  const [loading, setLoading]=useState(true)
  useEffect(()=>{
    setVideos([])
    fetchVIdeos(searchId)
    setLoading(false)
  },[searchId])
  const fetchVIdeos=(query, pageToken='')=>{
    fetchFromAPI(`search?part=snippet&q=${query}&pageToken=${pageToken}`)
    .then((data)=>{
      setNextPageTOken(data.nextPageToken)
      setVideos((preVideo)=>[...preVideo, ...data.items])
    })
    .catch((error)=>{
      console.log('Error fetChing data',error)
    })
  }
  const handelLoadMore=()=>{
    if(nextPageToken){
      fetchVIdeos(searchId, nextPageToken)
    }
  }
  const searchPageClass=loading ? 'isLoading' : 'isLoaded'
  return (
    <Main title="검색 페이지"
    description="검색 페이지입니다.">
    <section id='searchPage' className={searchPageClass}>
      <div className='video_inner search'>
        <VideoSearch videos={videos}/>
      </div>
      <div className='video_more'>
        {nextPageToken && (
          <button onClick={handelLoadMore}>더보기</button>
        )}
      </div>
    </section>
  </Main>
  )
}

export default Search