import theme from '@theme'
import styled from 'styled-components'

export const StyledProductView = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 100vh;

  @media (max-width: ${theme.breakpoint.tablet}) {
    grid-template-columns: 1fr;
  }
`

export const StyledProductImageDisplay = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.color};

  img {
    height: 80vh;
  }

  @media (max-width: ${theme.breakpoint.tablet}) {
    padding: 1.875rem 0;

    img {
      height: 60vh;
    }
  }
`
export const StyledProductVariants = styled.ul`
  position: absolute;
  left: 1.875rem;
`

export const StyledProductVariant = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 3.125rem;
  width: 5.208333333333334vw;
  height: 12.962962962962962vh;
  cursor: pointer;

  &:last-child {
    margin-bottom: 0;
  }

  img {
    height: 13.88888888888889vh;
    position: absolute;
    z-index: 1;
    margin-bottom: 1.25rem;
    transition: all 0.4s ease-in-out;
  }

  div {
    width: 4.166666666666666vw;
    height: 11.11111111111111vh;
    border-radius: 50%;
    background: ${(props) => props.color};
    transform: rotate(30deg);
    transition: all 0.4s ease-in-out;
    transform-origin: center center;
  }

  &:hover {
    img {
      transform: rotate(30deg) scale(0.8);
      margin-bottom: 0;
    }

    div {
      width: 5.208333333333334vw;
      height: 12.962962962962962vh;
    }
  }

  @media (max-width: ${theme.breakpoint.tablet}) {
    width: 60px;
    height: 100px;

    img {
      height: 120px;
    }

    div {
      width: 60px;
      height: 100px;
    }

    &:hover {
      div {
        width: 80px;
        height: 120px;
      }
    }
  }
`

export const StyledProductContent = styled.div`
  background: ${theme.color.white};
  color: ${(props) => props.color};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 1.875rem;

  h1 {
    font-size: 10.416666666666668vw;
    font-family: ${theme.font.family.heading};
  }

  p {
    margin-top: 3.75rem;
    max-width: 600px;
  }

  ul {
    display: flex;
    margin-top: 1.875rem;
    gap: 0.5rem;

    li {
      border: 2px solid ${(props) => props.color};
      color: ${(props) => props.color};
      border-radius: 999px;
      padding: 0.75rem 1.25rem;
      font-weight: bold;
      font-size: ${theme.font.size.sm};
      margin-bottom: 1.875rem;
      cursor: pointer;

      &.active {
        background: ${(props) => props.color};
        color: ${theme.color.white};
      }
    }
  }

  .actions {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
  }

  @media (max-width: ${theme.breakpoint.tablet}) {
    padding: 1.875rem;

    h1 {
      font-size: 11.76470588235294vw;
    }

    p {
      margin-top: 30px;
    }

    ul {
      li {
        font-size: ${theme.font.size.xs};
      }
    }
  }
`
