import React, {useEffect, useState} from 'react'
import {imageUrl,api_key} from '../../constants/constants'
import './RowPost.css'
import axios from '../../axios'
import YouTube from 'react-youtube'

function RowPost(props) {
  const [movies, setMovies] = useState([])
  const [urlId,setUrlId] = useState('')
  useEffect(() => {
    
    axios.get(props.url).then((response) => {
      console.log(response.data.results)
      setMovies(response.data.results)
    }).catch(err => {
      alert('Network Error')
    }
    )
  }, [])
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  const handleMovie = (id) => {
    console.log(id)
    axios.get(`/movie/${id}/videos?api_key=${api_key}&language=en-US`).then((response) => {
      console.log(response.data)
      
      if(response.data.results.length!==0){
        setUrlId(response.data.results[0])
      }else{
        console.log('array empty')
      }
    })
  }

  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
            {movies.map((obj) => ( 
                <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallposter':'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
            ))}
        </div>
        <div>
        {urlId && <YouTube videoId={urlId.key} opts={opts} />}
        </div>  
    </div>
    
  )
}

export default RowPost