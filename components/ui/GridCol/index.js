import { StyledGridCol } from './style'

const GridCol = ({ children, ...rest }) => {
  const { col, offset } = rest

  return (
    <StyledGridCol col={col} offset={offset}>
      {children}
    </StyledGridCol>
  )
}

export default GridCol
