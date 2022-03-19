import styled from 'styled-components'
import theme from '@theme'

export const StyledFooter = styled.footer`
  margin-top: 12.5rem;
  background: ${theme.color.yellow};
  padding: 3.125rem 0 1.875rem 0;

  @media (max-width: ${theme.breakpoint.tablet}) {
    margin-top: 6.25rem;
  }
`

export const StyledNewsLetter = styled.div`
  h1 {
    font-family: ${theme.font.family.heading};
    font-size: 7.8125vw;
    color: ${theme.color.pink};
  }

  p {
    font-size: ${theme.font.size.xs};
    color: ${theme.color.pink};
    text-align: center;
  }

  div:nth-child(2) {
    align-self: end;
  }

  @media (max-width: ${theme.breakpoint.tablet}) {
    h1 {
      font-size: 6.510416666666667vw;
      text-align: center;
    }
  }

  @media (max-width: ${theme.breakpoint.mobileL}) {
    h1 {
      font-size: 11.76470588235294vw;
    }
  }
`

export const StyledCredit = styled.div`
  color: ${theme.color.pink};
  font-weight: bold;
  text-align: center;
  margin-top: 6.25rem;

  a {
    text-decoration: underline;
  }
`
