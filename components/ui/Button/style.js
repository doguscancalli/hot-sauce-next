import styled from 'styled-components'
import theme from '@theme'

export const StyledButton = styled.button`
  background: ${(props) => props.color ?? theme.color.pink};
  text-align: center;
  font-weight: bold;
  width: ${(props) => (props.block ? '100%' : 'unset')};
  padding: ${(props) => (props.block ? '1.125rem 0' : '1.125rem 1.875rem')};
  border-radius: 999px;
  font-size: ${theme.font.size.base};

  @media (max-width: ${theme.breakpoint.tablet}) {
    font-size: ${theme.font.size.sm};
    padding: ${(props) => (props.block ? '0.875rem 0' : '0.875rem 1.25rem')};
  }
`
