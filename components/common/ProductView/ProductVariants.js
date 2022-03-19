import ProductVariant from './ProductVariant'
import { StyledProductVariants } from './style'

import { products } from '@data/products'

const ProductVariants = ({ slug }) => {
  const variants = products.filter((product) => product.slug !== slug)

  return (
    <StyledProductVariants>
      {variants.map((variant, index) => (
        <ProductVariant variant={variant} key={index} />
      ))}
    </StyledProductVariants>
  )
}

export default ProductVariants
