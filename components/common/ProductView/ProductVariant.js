import { useRouter } from 'next/router'

import { StyledProductVariant } from './style'

const ProductVariant = ({ variant }) => {
  const {
    image: { src },
    color,
    slug,
  } = variant

  const router = useRouter()

  return (
    <StyledProductVariant color={color} onClick={() => router.push(`/${slug}`)}>
      <img src={src} alt='Acı Sos' />
      <div />
    </StyledProductVariant>
  )
}

export default ProductVariant
