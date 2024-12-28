import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import StoryList from './components/StoryLists'
import Footer from './components/Footer'

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
