import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import StoryList from './components/StoryLists'
import Footer from './components/Footer'
import Post from './components/Post'

function App() {
  return (
    <>
      <div className='app-container'>
        <Header/>  
        <StoryList/>
        <Footer/>
      </div>
    </>
  )
}

export default App
