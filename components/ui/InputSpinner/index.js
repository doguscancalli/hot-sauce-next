import { useState } from 'react'

import { StyledButton, StyledInputSpinner } from './style'

const InputSpinner = ({ color }) => {
  const [count, setCount] = useState(1)

  const handleCount = (event) => {
    if (event === 'inc') {
      setCount(count + 1)
    }

    if (event === 'dec') {
      if (count <= 1) return
      setCount(count - 1)
    }
  }

  return (
    <StyledInputSpinner color={color}>
      <StyledButton color={color} onClick={() => handleCount('dec')}>
        -
      </StyledButton>
      <span>{count}</span>
      <StyledButton color={color} onClick={() => handleCount('inc')}>
        +
      </StyledButton>
    </StyledInputSpinner>
  )
}

export default InputSpinner
