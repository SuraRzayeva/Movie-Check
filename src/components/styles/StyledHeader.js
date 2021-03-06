import styled from 'styled-components'

export const StyledHeader = styled.div`
  background: #1c1c1c;
  padding: 0 20px;
  box-sizing: border-box;

  .header-content {
    max-width: 1280px;
    min-height: 120px;
    padding: 20px 0px;
    margin: 0 auto;
    box-sizing: border-box;

    @media screen and (max-width: 500px) {
      max-width: 1280px;
      min-height: 0px;
    }
  }
`

export const StyledSRLogo = styled.img`
  height: 50px;
  margin: 15px 0 0 15px;
  @media screen and (max-width: 500px) {
    display: inline-block;
    height: 40px;
    margin-top: 0px;
  }
`

export const StyledRMDBLogo = styled.img`
  width: 100px;
  margin-top: 20px;
  float: right;
  @media screen and (max-width: 500px) {
    width: 90px;
    margin-top: 5px;
  }
`
