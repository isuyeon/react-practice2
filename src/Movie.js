import React from 'react';
import PropTypes from 'prop-types';
import Lines from 'react-lines-ellipsis';
import './Movie.scss';

function Movie({title, poster, genres, synopsis}){
    return (
        <div className="Movie">
            <Header poster={poster} title={title} />
            <Genres genres={genres}/>
            <Synopsis synop={synopsis}/>
        </div>
    )
}

function Header({title, poster}){
    return (
        <div>
            <img src={poster} alt={title} />
            <h1>{title}</h1>
        </div>
    )
}

function Genres({genres}){
    const genre = genres.map((genre, index) => {
        return(
            <li key={index}>{genre} {genres.length - 1 !== index && ','} </li>
        )
    })
    return (
        <ul className="genres">
            {genre}
        </ul>
    )
}

function Synopsis({synop}){
    return (
        <Lines
            text={synop}
            maxLine='3'
            ellipsis='...'
            trimRight
            basedOn='letters'
            className="ellispsis"
            component ="p"
        />
    )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired
}

Header.propTypes = {
    poster: PropTypes.string.isRequired
}

export default Movie