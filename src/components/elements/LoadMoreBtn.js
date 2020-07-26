import React from 'react'
import { StyledLoadMoreBtn } from '../styles/StyledLoadMoreBtn'
import PropTypes from 'prop-types'

const LoadMoreBtn = ({ text, callback }) => (
  <StyledLoadMoreBtn onClick={callback} type="button">
    {' '}
    {text}{' '}
  </StyledLoadMoreBtn>
)

LoadMoreBtn.propTypes = {
  text: PropTypes.string,
  callback: PropTypes.func
}
export default LoadMoreBtn
