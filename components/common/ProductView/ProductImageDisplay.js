import { StyledProductImageDisplay } from './style'
import ProductVariants from './ProductVariants'

const ProductImageDisplay = ({ product }) => {
  const {
    slug,
    image: { src },
    color,
  } = product

  return (
    <StyledProductImageDisplay color={color}>
      <ProductVariants slug={slug} />
      <img src={src} alt='Acı Sos' />
    </StyledProductImageDisplay>
  )
}

export default ProductImageDisplay
