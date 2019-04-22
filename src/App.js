import React, { Component } from 'react';

// empleamos router nuevo https://reach.tech/router/example/basic 
// yarn add @reach/router
import { Router, Redirect } from "@reach/router";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

import MovieDetail from "./views/MovieDetail";
import MovieList from "./views/MovieList";

// yarn add node-sass
import './App.scss';


class App extends Component {
  render() {
    return (
      <div className="app">
         <Navigation />
         <Router className='main'>
          <MovieDetail path="/movie/:id"/>
          {/* le pasaremos el type a Navigation */}
          {/* <MovieList path="/movies/:type" default/> */}        
          <MovieList path="/movies/:type"/>
          {/* pagina por defecto */}
          {/* <Redirect from="/" to="/movies/popular" /> */}
          <Redirect default from='*' to='movies/popular' noThrow />
          {/* <NotFound path='notFound' /> */}
         </Router>
         <Footer />       
       </div>
          );
  }
}

export default App;
