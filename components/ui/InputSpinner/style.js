import theme from '@theme'
import styled from 'styled-components'

export const StyledInputSpinner = styled.div`
  display: inline-block;
  border-radius: 999px;
  border: 2px solid ${(props) => props.color};
  color: ${(props) => props.color};
  font-weight: bold;
  overflow: hidden;
  font-size: ${theme.font.size.base};

  span {
    display: inline-block;
    width: 40px;
    padding: 1.125rem 0;
    text-align: center;
  }

  @media (max-width: ${theme.breakpoint.tablet}) {
    font-size: ${theme.font.size.sm};

    span {
      width: 30px;
      padding: 0.875rem 0;
    }
  }
`

export const StyledButton = styled.button`
  padding: 1.125rem 1.5rem;
  color: ${(props) => props.color};
  font-weight: bold;
  font-size: ${theme.font.size.base};

  @media (max-width: ${theme.breakpoint.tablet}) {
    font-size: ${theme.font.size.sm};
    padding: 0.875rem 1rem;
  }
`
