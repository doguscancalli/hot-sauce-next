import ProductContent from './ProductContent'
import ProductImageDisplay from './ProductImageDisplay'
import { StyledProductView } from './style'

const ProductView = ({ product }) => {
  return (
    <StyledProductView>
      <ProductImageDisplay product={product} />
      <ProductContent product={product} />
    </StyledProductView>
  )
}

export default ProductView
