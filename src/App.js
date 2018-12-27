import React, { Component } from "react";
import Movie from "./Movie";
import './App.scss';

class App extends Component {
  
  state = {};

  componentDidMount() {
    this._getMovie();
  }
  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count')
    .then(response => response.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
  }

  _getMovie = async () => {
    const movies = await this._callApi();
    // console.log(movies);
    this.setState({
      movies: movies
    })
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie) => {
      return (
        <Movie
          title={movie.title_english}
          poster={movie.large_cover_image}
          genres={movie.genres}
          synopsis={movie.synopsis}
          key={movie.id}
        />
      );
    });
    return movies;
  };

  render() {
    const { movies } = this.state;
    return (
      <div className="App">
        {movies ? this._renderMovies() : "Loading"}
      </div>
    );
  }
}

export default App;
