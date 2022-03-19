import styled from 'styled-components'

export const StyledWrapper = styled.div`
  padding: ${(props) => (props.full ? 0 : '0 1.875rem')};
`
