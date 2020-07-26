import React from 'react'
import { StyledHeroImage } from '../styles/StyledHeroImage'
import PropTypes from 'prop-types'

const HeroImg = ({ image, title, description }) => (
  <StyledHeroImage image={image}>
    <div className="hero-wrapper">
      <div className="hero-text">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  </StyledHeroImage>
)

HeroImg.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string
}

export default HeroImg
