import React, { Component } from 'react';
// yarn add axios
import axios from 'axios';

import MovieCard from '../components/MovieCard';

class MovieList extends Component {

  // estado inicial vacío
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     movies: [],
  //   };
  // }
  state = {
    movies: [],
  };

  componentDidMount(){

    // .then(console.log) para obtener el parametro data.results
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=9c83e95662741cb3db09bb9d123bc66e')
    .then( res => this.setState({movies: res.data.results}));
      
    // variable type  y uri a pasar en la url
    let extractType = uri => uri.replace('/movies/','');
    let url = (_type) => `https://api.themoviedb.org/3/movie/${_type}?api_key=9c83e95662741cb3db09bb9d123bc66e`;

    axios.get( url(extractType(this.props.uri)).then( res => this.setState({movies: res.data.results})) )

  }


  render() {
    return (
      <section>
        {/* hola MovieList {this.props.type} NO FUNCIONA */}
        {/* hola MovieList {this.props.uri.replace('/movies/','')}      */}

        {/* {JSON.stringify(this.state)}
        {console.log(this.state)} */}
        {/* key como identificador recomendado cuando empleamos map , movie es el item del array */}
        {this.state.movies.map (movie => <MovieCard data={movie} key={movie.id} /> )}



      </section>
          );
  }
}

export default MovieList;
