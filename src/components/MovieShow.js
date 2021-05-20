import React from 'react'

const MovieShow = (props) => {
  console.log("MovieShow props from MoviesPage", props)
  return (
    <div>
      <h3>Movies Show Component!</h3>
      <p>Route: {props.location.pathname}</p>
      <p>Title: {props.movies[props.match.params.movieId].title}</p>
    </div>
  )
}

export default MovieShow
