import styled from 'styled-components'

export const StyledMovieThumb = styled.div`
  img {
    width: 100%;
    height: auto;
    /* max-height: 350px; */
    transition: all 0.3s;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

    /* @media screen and (max-width: 1024px) {
      height: 300px;
    }

    @media screen and (max-width: 768px) {
      height: 350px;
    }

    @media screen and (max-width: 600px) {
      max-height: 300px;
    }

    @media screen and (max-width: 375px) {
      max-height: 450px;
    } */
  }

  .clickable {
    cursor: pointer;

    :hover {
      transform: scale(1.05);
      opacity: 0.8;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);
    }
  }
`
