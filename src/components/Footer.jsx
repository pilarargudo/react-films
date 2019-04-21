import React from 'react';

import { Link } from '@reach/router';

import './Footer.scss'

// componente tipo función 
const Footer = () => (
  <footer className='footer'>
    <Link to='/movies/top_rated'>Top rated</Link>
    <Link to='/movies/upcoming'>Upcoming</Link>
    <Link to='/movies/trending'>Trending</Link>
    <Link to='/movies/popular'>Popular</Link>
  </footer>
);

export default Footer;
