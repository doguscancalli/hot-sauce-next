import styled from 'styled-components'
import theme from '@theme'

export const StyledRecipeSection = styled.section`
  margin-top: 12.5rem;

  @media (max-width: ${theme.breakpoint.tablet}) {
    margin-top: 0;
  }
`

export const StyledCurvedShapeTop = styled.div`
  height: 300px;
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
  z-index: -1;

  svg:nth-child(1) {
    width: 1920px;
    position: absolute;
    top: 90px;
    left: 50%;
    transform: translateX(-50%);
  }

  svg:nth-child(2) {
    width: 1920px;
    height: 310px;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 100;

    text {
      font-family: ${theme.font.family.heading};
      font-size: ${theme.font.size.xxl};
      fill: ${theme.color.yellow};
    }
  }

  @media (max-width: ${theme.breakpoint.mobileL}) {
    svg:nth-child(2) {
      text {
        font-size: ${theme.font.size.xl};
      }
    }
  }
`
export const StyledRecipes = styled.ul`
  width: 100%;
  background: ${theme.color.yellow};
  display: flex;
  justify-content: space-between;
  gap: 30px;
  padding: 0 1.875rem;

  @media (max-width: ${theme.breakpoint.mobileL}) {
    flex-direction: column;
    margin-top: -150px;
  }
`
export const StyledRecipe = styled.li`
  width: 100%;
  aspect-ratio: 1/1.5;
  border-radius: 999px;
  overflow: hidden;

  .image {
    width: 100%;
    height: 100%;
    display: grid;
    position: relative;
    overflow: hidden;
  }

  .image--style-1 {
    width: 100%;
    height: 100%;
    border-radius: 999px;
  }

  .image > .image__element,
  .image__wrap {
    transform-origin: inherit;
    position: relative;
    grid-area: 1 / 1 / 2 / 2;
    width: 100%;
    height: 100%;
    will-change: transform;
    border-radius: inherit;
  }

  .image__wrap {
    overflow: hidden;
  }

  .image__element {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: 50% 50%;
  }
`

export const StyledCurvedShapeBottom = styled.div`
  position: relative;
  overflow: hidden;
  height: 300px;
  z-index: -1;

  svg {
    width: 1920px;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  @media (max-width: ${theme.breakpoint.mobileL}) {
    margin-top: -240px;
  }
`
