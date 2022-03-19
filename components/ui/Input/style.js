import styled from 'styled-components'
import theme from '@theme'

export const StyledInput = styled.input`
  outline: none;
  border: 2px solid ${theme.color.pink};
  border-radius: 999px;
  padding: 1.125rem 0;
  width: 100%;
  text-align: center;
  font-weight: bold;
  color: ${theme.color.pink};
  font-size: ${theme.font.size.base};

  &::placeholder {
    color: ${theme.color.pink};
  }

  @media (max-width: ${theme.breakpoint.tablet}) {
    font-size: ${theme.font.size.sm};
    padding: 0.875rem 0;
  }
`
