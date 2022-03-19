import { Button, InputSpinner } from '@components/ui'
import { useState } from 'react'
import { StyledProductContent } from './style'

const ProductContent = ({ product }) => {
  const { title, description, sizes, color, price } = product

  const [selectedSize, setSelectedSize] = useState(sizes[0])

  return (
    <StyledProductContent color={color}>
      <h1>{title}</h1>
      <p>{description}</p>
      <ul>
        {sizes.map((size, index) => (
          <li
            onClick={() => setSelectedSize(sizes[index])}
            className={selectedSize === sizes[index] ? 'active' : ''}
            key={index}
          >
            {size}
          </li>
        ))}
      </ul>
      <div className='actions'>
        <InputSpinner color={color} />
        <Button color={color}>SEPETE EKLE | {price}TL</Button>
      </div>
    </StyledProductContent>
  )
}

export default ProductContent
