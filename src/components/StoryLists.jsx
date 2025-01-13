import axios from "axios";
import React, { useEffect, useState } from 'react';
import './StoryLists.css'




const StoryLists = () => {
    const [storyIds, setStoryIds] = useState ([]);
    const[stories, setStories] = useState([]);
    const [page, setPage] = useState(1);
    const storiesPerPage = 30;



useEffect(() => {
    const fetchStoryIds = async () => {
        try {
        const response = await axios.get('https://hacker-news.firebaseio.com/v0/topstories.json');
        setStoryIds(response.data);
        }catch(erro){
            console.log('error');
        }
    };

    fetchStoryIds();
},[]);


useEffect (() => {
    const fetchStoriesForPage = async () => {
        const start = (page - 1) * storiesPerPage;
        const currentStoryIds = storyIds.slice(start, start + storiesPerPage);


        const storyPromises = currentStoryIds.map((id) => axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json?`));

        const storyResponses = await Promise.all(storyPromises);
        console.log(storyResponses);
        setStories(storyResponses.map((response) => response.data))
    };

    if (storyIds.length > 0) {
        fetchStoriesForPage();
    }
},[page, storyIds]) 

const handleNextPage = () => {setPage((prevPage) => prevPage + 1) 
  window.scrollTo({top: 0,
    behavior: smooth
  })
}


  
function formatTimeAgo (time) {
      
    const currentTime = Math.floor(Date.now() / 1000);

    const minutesAgo = Math.floor((currentTime - time) / 60);
    const hoursAgo = Math.floor((currentTime - time) / 3600); 
    
    


    if (hoursAgo > 0) {
      return`${hoursAgo} hour${hoursAgo > 1 ? 's' : ''} ago`; 
    }else{
      return `${minutesAgo} minute${minutesAgo > 1 ? 's' : ''} ago`;
    }
  }


  return (
    <>
       <ul className="data">
       {stories.map((story, index) => {
         
         let hostname;
         try{
           hostname = new URL(story.url).hostname;
         }catch(error) { 
           hostname = 'invalid url';
         }

         return (
            <>
             <li key={story.id} className='li'>{index + 1 + (page - 1)* 30}. <img src='https://news.ycombinator.com/triangle.svg' className='image'/>
             <div className="lines">
         <div className='first-line'><a href={story.url} className='first-line-one'>{story.title}</a>
          <a href={story.url} className='first-line-two'>({hostname})</a></div>  
            <div className='second-line'>{story.score} points by<a href={story.by} className='second-line-one'>{story.by}</a>
            <a href={story.time} className='second-line-two'>{formatTimeAgo(story.time)} </a>| 
            <a href={story.type} className='second-line-three'>hide</a> | <a href={story.id}>{story.descendants} comments</a>
            </div>
            </div> 
            </li>
            </>
          )})}
          <button onClick={handleNextPage} className="button">More</button>
       </ul>
       
    </>
  )

}
export default StoryLists;
