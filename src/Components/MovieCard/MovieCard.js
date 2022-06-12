import React from 'react'
import './MovieCard.css'

const MovieCard = ({id,title,urlImage,desc,date,duration,trailer,rating}) => {

  return (
 <div className="movie_card" > 
      <img className="locandina" src={urlImage} alt={`${title}`}/>
      <div className="info_section">
         <div className="movie_header">
          <p className='title'>{title}</p>
      <p className='rating'>{rating}</p>   
      <p className="minutes">{date}</p>
      </div>  
       <div className="movie_social">
              <ul>  
                <li><i className="material-icons">{trailer}</i></li>
                <li><i className="material-icons">{duration}</i></li>
                <li><i className="material-icons">watch</i></li>
              </ul>
            </div> 
          
                <div className="movie_desc">
              <p className="text">
               <h4>{desc}</h4>
              </p>
            </div>
    
           
          
            </div>
    </div>
  )
}

export default MovieCard

