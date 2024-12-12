import React from 'react'
import { useState } from 'react'
import './Header.css' 

function Header() {
  const refreshPage = () => {
    window.location.reload();
  }

  return (
    <div>
        <div className='header-container'>
            <div className='one'>
              <button onClick = {refreshPage} className='logo'>Y</button>
              <div className='navigation'>
               <button onClick={refreshPage} className='header-refresh'>Hackers New</button>
                 <ul className='navs'>
                    <li><a href='https://news.ycombinator.com/newest' className='lists'>new |</a></li>
                    <li><a href='https://news.ycombinator.com/front' className='lists'>past |</a></li>
                    <li><a href='https://news.ycombinator.com/newcomments'  className='lists'>comments |</a></li>
                    <li><a href='https://news.ycombinator.com/ask'  className='lists'>ask |</a></li>
                    <li><a href='https://news.ycombinator.com/show'  className='lists'>show |</a></li>
                    <li><a href='https://news.ycombinator.com/jobs'  className='lists'>jobs |</a></li>
                    <li><a href='https://news.ycombinator.com/submit'  className='lists'>submit</a></li>
                </ul>
              </div>
            </div>
            <div>
                <p className='login'><a href='https://news.ycombinator.com/login?goto=news' className='lists'>login</a></p>
            </div>
        </div>
    </div>
  )
}

export default Header