import { StyledWrapper } from './style'

const Wrapper = ({ children, ...rest }) => {
  const { full } = rest

  return <StyledWrapper full={full}>{children}</StyledWrapper>
}

export default Wrapper
