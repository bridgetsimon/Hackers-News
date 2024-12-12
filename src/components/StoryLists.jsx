
import { useEffect, useState, useMemo, useCallback } from 'react'
import axios from 'axios'
import './StoryLists.css'

function StoryLists() {
    const [story, setStory] = useState([]);
    const [error, setError] = useState(null);
    const[currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [loading, setLoading] = useState(true);
    const [limit, setLimit] = useState (30)

    useEffect(() => {
        async function fetchData () {
          setLoading(true);
           try {
            const getTopStories = await axios.get(' https://hacker-news.firebaseio.com/v0/topstories.json', {
              params: {limit : 30}
            });
            const topStoriesData = await getTopStories.data;
            const firstThirty = await topStoriesData.slice(0, 30);
      
    
            
        
            


            const storyData = topStoriesData.map(async (id) => {
                const getStoryData = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json?`)
                return await getStoryData.data;  
                
            })
            const allStories = await Promise.all(storyData);
            setStory(allStories);
            console.log(allStories)

            setTotalPages(totalPages)
           }catch(error){
            console.log('error fetching data');
           }

            
        }
        fetchData(currentPage);
        
        
    },[currentPage]) ;

    const currentPost = useMemo (() => {
      const start = (currentPage - 1) * 30;
      const end = start + limit;
      const slicedStory = story.slice(start, end);
      return slicedStory;

    }, [currentPage, story])

    const handleLoadMore = () => {
      setCurrentPage(prevPage => prevPage + 1);
      window.scrollTo({top: 0})
    };

    const calculateMinutesAgo = (time) => {
      const currentTime = Math.floor(Date.now() / 1000); 
      const hoursAgo = Math.floor((currentTime - time) / 3600); 
      const minutesAgo = Math.floor((currentTime - time) / 60);
      
  
    };
    
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
    <ul className='data'>
        {currentPost.map((stories, index) => {
         
         let hostname;
         try{
           hostname = new URL(stories.url).hostname;
         }catch(error) { 
           hostname = 'invalid url';
         }
     
          return(
          <>
          <li key={stories.id} className='li'>{index + 1 + (currentPage - 1)* 30}.<img src='https://news.ycombinator.com/triangle.svg' className='image'/>
         <div className='first-line'><a href={stories.url} className='first-line-one'>{stories.title}</a>
          <a href={stories.url} className='first-line-two'>({hostname})</a></div>  </li> 
            <div className='second-line'>{stories.score} points by<a href={stories.by} className='second-line-one'>{stories.by}</a>
            <a href={stories.time} className='second-line-two'>{formatTimeAgo(stories.time)} </a>| 
            <a href={stories.type} className='second-line-three'>hide</a> | <a href={stories.id}>{stories.descendants} comments</a></div></>
          )})}
        <button onClick={handleLoadMore} className='button'>More</button>
    </ul>
    </>
  )
}
export default StoryLists