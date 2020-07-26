import React from 'react'
import { Link } from '@reach/router'
import { StyledMovieThumb } from '../styles/StyledMovieThumb'
import PropTypes from 'prop-types'

const MovieThumb = ({ image, clickable, movieId }) => {
  return (
    <StyledMovieThumb>
      {clickable ? (
        <Link to={`/${movieId}`}>
          <img src={image} className="clickable" alt="" />
        </Link>
      ) : (
        <img src={image} alt="" />
      )}
    </StyledMovieThumb>
  )
}

MovieThumb.propTypes = {
  image: PropTypes.string,
  clickable: PropTypes.bool,
  movieId: PropTypes.number
}
export default MovieThumb
