import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import StoryLists from './components/StoryLists'

function App() {
  return (
    <>
      <div className='app-container'>
        <Header/>  
        <StoryLists/>
        <Footer/>
      </div>
    </>
  )
}

export default App
