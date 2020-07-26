import React, { useState, useRef } from 'react'
import { StyledSearchBar, StyledSearchBarContent } from '../styles/StyledSearchBar'
import FontAwesome from 'react-fontawesome'
import PropTypes from 'prop-types'

const SearchBar = ({ callback }) => {
  const [state, setState] = useState('')
  const timeout = useRef(null)
  const searchMovies = e => {
    const { value } = e.target
    clearTimeout(timeout.current)
    setState(value)

    timeout.current = setTimeout(() => {
      callback(value)
    }, 500)
  }

  return (
    <StyledSearchBar>
      <StyledSearchBarContent>
        <input onChange={searchMovies} value={state} type="text" placeholder="Search the movie on your mind..." />
        <FontAwesome className="fa-search" name="search"></FontAwesome>
      </StyledSearchBarContent>
    </StyledSearchBar>
  )
}

SearchBar.propTypes = {
  callback: PropTypes.func
}

export default SearchBar
