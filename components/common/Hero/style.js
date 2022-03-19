import theme from '@theme'
import styled from 'styled-components'

export const StyledHero = styled.section`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const StyledMarquee = styled.div`
  position: relative;
  overflow: hidden;
  --offset: 0vw;
  /* --offset: 20vw; */
  --move-initial: calc(-25% + var(--offset));
  --move-final: calc(-50% + var(--offset));

  div {
    width: fit-content;
    display: flex;
    position: relative;
    transform: translate3d(var(--move-initial), 0, 0);
    animation: marquee 30s linear infinite;

    span {
      white-space: pre;
      font-size: 36.45833333333333vw;
      padding: 0 2vw;
      font-family: ${theme.font.family.heading};
      color: ${theme.color.yellow};
    }
  }

  @keyframes marquee {
    0% {
      transform: translate3d(var(--move-initial), 0, 0);
    }

    100% {
      transform: translate3d(var(--move-final), 0, 0);
    }
  }
`

export const StyledBottles = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 80vw;
  margin: 0 auto;
  overflow: hidden;

  @media (max-width: ${theme.breakpoint.mobileL}) {
    width: 100vw;
  }
`
export const StyledBottle = styled.div`
  position: relative;

  &:nth-child(1) {
    transform: rotate(-8deg);
  }

  &:nth-child(3) {
    transform: rotate(8deg);
  }

  img {
    height: 69.44444444444444vh;
  }

  @media (max-width: ${theme.breakpoint.mobileL}) {
    &:nth-child(2) {
      margin-right: -90px;
      margin-left: -90px;
    }

    img {
      height: auto;
      width: 27.368421052631582vw;
    }
  }
`

export const StyledBottleOverlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  visibility: hidden;

  div {
    position: absolute;
    inset: 0;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0.5rem;

    h3 {
      font-family: ${theme.font.family.heading};
      font-size: 2.5rem;
      margin-top: auto;
    }

    p {
      margin-top: 1.875rem;
      font-size: ${theme.font.size.base};
    }

    a {
      display: inline-block;
      position: relative;
      background: ${theme.color.white};
      color: ${(props) => props.color};
      width: 100px;
      height: 100px;
      border-radius: 50%;
      margin-top: 1.875rem;
      margin-bottom: 0.625rem;

      span {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: ${theme.font.size.sm};
        font-weight: bold;
      }
    }
  }

  @media (max-width: ${theme.breakpoint.tablet}) {
    display: none;
  }
`

export const StyledBottleSvg = styled.svg`
  width: auto;
  height: 69.44444444444444vh;

  @media (max-width: ${theme.breakpoint.mobileL}) {
    height: auto;
    width: 27.368421052631582vw;
  }
`
