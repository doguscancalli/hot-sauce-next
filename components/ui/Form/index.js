import { StyledForm } from './style'

const Form = ({ children, ...rest }) => {
  return <StyledForm {...rest}>{children}</StyledForm>
}

export default Form
