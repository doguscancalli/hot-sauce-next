import { StyledBottles } from './style'
import Bottle from './Bottle'

import { products } from '@data/products'

const Bottles = () => {
  return (
    <StyledBottles>
      {products.map((product, index) => (
        <Bottle product={product} key={index} />
      ))}
    </StyledBottles>
  )
}

export default Bottles
