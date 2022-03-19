import styled from 'styled-components'
import theme from '@theme'

export const StyledwhoWeAre = styled.section`
  margin-top: 200px;

  h1 {
    font-family: ${theme.font.family.heading};
    font-size: 7.8125vw;

    .line {
      display: block;
    }

    .yellow {
      color: ${theme.color.yellow};
    }

    .gif {
      display: inline-block;
      width: 13vw;
      margin-left: 30px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  @media (max-width: ${theme.breakpoint.tablet}) {
    margin-top: 100px;

    h1 {
      font-size: 14vw;
    }
  }

  @media (max-width: ${theme.breakpoint.mobileL}) {
    h1 {
      font-size: 13.176470588235295vw;

      .gif {
        margin-left: 0.625rem;
        width: 20vw;
      }
    }
  }
`
