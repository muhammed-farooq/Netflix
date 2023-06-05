import React, { useEffect,useState } from 'react'
import {imgUrl,API_KEY} from '../../constants/constants';
import Youtube from 'react-youtube'
import './RowPost.css'
import axios from '../../axios'

function RowPost(props) {
  const [movies,setMovies] = useState([])
  const [urlId,setUrlId] = useState('')

  useEffect(()=>{
    axios.get(props.url).then(response=>{
        console.log(response.data.results);
        setMovies(response.data.results)
    }).catch((err) => {
      console.log(err);
    })
  },[])
  const opts = {
    height: '500',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  const handleMove = (id)=>{
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
      if( response.data.results!==0)setUrlId(response.data.results[0].key)
    }).catch((err) => {
      console.log(err);
    })
  }
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="posters">
          {movies.map((movie)=>{
          return(
            <div>
            <img onClick={()=>handleMove(movie.id)} className={props.isSmall?'small-poster':'poster'} src={`${imgUrl+movie.backdrop_path}`} alt="poster"/>
            <h3>{movie.title}</h3>
            </div>
            )}
          
          )}
        </div>
      {urlId &&  <Youtube videoId={urlId} opts={opts}/> }
    </div>
  )
}

export default RowPost