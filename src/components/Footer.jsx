import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='line'></div>
          <ul className='links'>
            <li className='list'><a href="https://news.ycombinator.com/newsguidelines.html" className='list'>Guidelines |</a></li>
            <li className='list'><a href="https://news.ycombinator.com/newsfaq.html" className='list'>FAQ |</a></li>
            <li className='list'><a href="https://news.ycombinator.com/lists" className='list'>Lists |</a></li>
            <li className='list'><a href="https://github.com/HackerNews/API" className='list'>API |</a></li>
            <li className='list'><a href="https://news.ycombinator.com/security.html" className='list'>Security |</a></li>
            <li className='list'><a href="https://www.ycombinator.com/legal/" className='list'>Legal |</a></li>
            <li className='list'><a href="https://www.ycombinator.com/apply/" className='list'>Apply to YC |</a></li>
            <li className='list'><a href="" className='contact'>Contact</a></li>
        </ul>
        <form className='search'>
            <label>Search: </label>
            <input type="text" className='searchBar'/>
        </form>
    </div>
  )
}

export default Footer