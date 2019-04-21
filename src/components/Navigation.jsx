import React from 'react';

import { Link } from '@reach/router';

import './Navigation.scss'

// componente tipo función 
const Navigation = () => (
  <nav className="navigation">
    {/* link interno para que el router sepa que estamos en SPA y no haga get */}
    <Link to='/movies/top_rated'>Top rated</Link>
    <Link to='/movies/upcoming'>Upcoming</Link>
    <Link to='/movies/trending'>Trending</Link>
    <Link to='/movies/popular'>Popular</Link>
  </nav>
)

export default Navigation;