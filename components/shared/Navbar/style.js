import styled from 'styled-components'
import theme from '@theme'

export const StyledNavbar = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 8px;
  padding: 1.875rem 1.875rem 0 1.875rem;
  z-index: 10;
`

export const StyledNavbarItem = styled.button`
  font-family: ${theme.font.family.heading};
  font-size: ${theme.font.size.xl};
  text-transform: uppercase;

  &:hover {
    opacity: 0.85;
  }

  @media (max-width: ${theme.breakpoint.tablet}) {
    font-size: ${theme.font.size.lg};
  }
`

export const StyledMenu = styled.div`
  position: fixed;
  inset: 0;
  background: ${theme.color.yellow};
  z-index: 100;
  color: ${theme.color.pink};
  padding: 1.875rem;
  opacity: 0;
  visibility: hidden;
`
export const StyledMenuCloseButton = styled.button`
  font-family: ${theme.font.family.heading};
  font-size: ${theme.font.size.xl};
  text-transform: uppercase;
  color: ${theme.color.pink};

  &:hover {
    filter: brightness(60%);
  }

  @media (max-width: ${theme.breakpoint.tablet}) {
    font-size: ${theme.font.size.lg};
  }
`

export const StyledMenuItems = styled.ul`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const StyledMenuItem = styled.li`
  text-align: center;

  & > * {
    font-family: ${theme.font.family.heading};
    font-size: ${theme.font.size.xxl};
    text-transform: uppercase;

    &:hover {
      filter: brightness(60%);
    }
  }

  @media (max-width: ${theme.breakpoint.tablet}) {
    & > * {
      font-size: ${theme.font.size.xl};
    }
  }
`
