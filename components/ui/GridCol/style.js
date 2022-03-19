import styled from 'styled-components'

export const StyledGridCol = styled.div`
  ${(props) =>
    props.offset
      ? `
    grid-column-start: ${props.offset + 1};
    grid-column-end: ${props.offset + props.col + 1};
    `
      : `
    grid-column: span ${props.col};
    `}
`
