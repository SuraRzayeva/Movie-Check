import styled from 'styled-components'

export const StyledMovieInfoBar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 100px;
  height: auto;
  background: #1c1c1c;
  padding: 20px;
  box-sizing: border-box;

  font-size: 20px;

  .movieinfobar-content {
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .movieinfobar-content-col {
    width: 33.33%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
  }

  .movieinfobar-info {
    padding: 0 0 0 20px;
    float: left;
  }

  .fa-time,
  .fa-revenue {
    float: left;
  }

  .fa-budget {
    float: left;
  }

  @media screen and (max-width: 768px) {
    .fa-time,
    .fa-revenue,
    .fa-budget {
      display: none;
    }
  }

  @media screen and (max-width: 425px) {
    font-size: 14px;
  }
`
