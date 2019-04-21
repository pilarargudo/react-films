import React from 'react';
import { Link } from '@reach/router';

import './MovieCard.scss'

// componente tipo función 
const MovieCard = (props) => (
  <Link className='movieCard' 
        to={'/movie/' + props.data.id} 
      style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w300/${props.data.backdrop_path})` }}>
      <h1>{props.data.title} </h1>
      <p>{props.data.overview}</p>
      {console.log(props)}
  </Link>
);

export default MovieCard;
