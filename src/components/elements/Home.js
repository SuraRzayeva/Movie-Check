import React, { useState } from 'react'
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL, POPULAR_BASE_URL, SEARCH_BASE_URL } from '../../config'
import Grid from './Grid'

import HeroImage from './HeroImage'
import LoadMoreBtn from './LoadMoreBtn'
import MovieThumb from './MovieThumb'
import SearchBar from './SearchBar'
import Spinner from './Spinner'
import { useHomeFetch } from '../hooks/useHomeFetch'
import NoImage from '../images/no_image.jpg'

const Home = () => {
  const [searchedTerm, setSearchedTerm] = useState('')

  const [
    {
      state: { movies, currentPage, totalPages, heroImage },
      loading,
      error
    },
    fetchMovies
  ] = useHomeFetch(searchedTerm)

  const searchMovies = search => {
    const endpoint = search ? SEARCH_BASE_URL + search : POPULAR_BASE_URL
    setSearchedTerm(search)
    fetchMovies(endpoint)
  }

  const loadMoreMovies = () => {
    const searchEndpoint = `${SEARCH_BASE_URL}${searchedTerm}&page=${currentPage + 1}`
    const popularEndpoint = `${POPULAR_BASE_URL}&page=${currentPage + 1}`
    const endpoint = searchedTerm ? searchEndpoint : popularEndpoint

    fetchMovies(endpoint)
  }

  if (!movies[0] && !error) return <Spinner />
  if (error && !movies) return <div> Something went wrong. </div>

  return (
    <>
      {!searchedTerm && <HeroImage image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`} title={heroImage.original_title} description={heroImage.overview} />}

      <SearchBar callback={searchMovies} />
      <Grid header={searchedTerm ? 'Search Result' : 'Popular Movies'}>
        {movies.map(movie => (
          <MovieThumb key={movie.id} clickable={true} image={movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}` : NoImage} movieId={movie.id} movieName={movie.original_title} />
        ))}
      </Grid>
      {loading && <Spinner />}
      {currentPage < totalPages && !loading && <LoadMoreBtn text="Load More" callback={loadMoreMovies} />}
    </>
  )
}
export default Home
