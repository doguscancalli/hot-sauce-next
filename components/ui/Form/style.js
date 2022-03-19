import styled from 'styled-components'
import theme from '@theme'

export const StyledForm = styled.form`
  & > * {
    margin-bottom: 0.75rem;
  }

  & > *:last-child {
    margin-bottom: 0;
  }

  @media (max-width: ${theme.breakpoint.tablet}) {
    & > * {
      margin-bottom: 0.5rem;
    }
  }
`
