import React from 'react'
import { Link } from '@reach/router'
import SRLogo from '../images/SRLogo.png'
import TMBDLogo from '../images/tmdb_logo.svg'
import { StyledHeader, StyledRMDBLogo, StyledSRLogo } from '../styles/StyledHeader'

const Header = () => {
  return (
    <StyledHeader>
      <div className="header-content">
        <Link to="/">
          <StyledSRLogo src={SRLogo} alt="" />
        </Link>
        <StyledRMDBLogo src={TMBDLogo} alt="" />
      </div>
    </StyledHeader>
  )
}

export default Header
