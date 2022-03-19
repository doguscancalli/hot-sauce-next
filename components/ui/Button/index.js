import { StyledButton } from './style'

const Button = ({ children, ...rest }) => {
  const { block, color } = rest

  return (
    <StyledButton {...rest} block={block} color={color}>
      {children}
    </StyledButton>
  )
}

export default Button
