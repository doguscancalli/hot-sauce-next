import Link from 'next/link'
import BottleSvg from './BottleSvg'

import { StyledBottleOverlay } from './style'

const BottleOverlay = ({ product }) => {
  const { color, title, subtitle, slug } = product

  return (
    <StyledBottleOverlay color={color}>
      <BottleSvg color={color} />
      <div>
        <h3>{title}</h3>
        <p>{subtitle}</p>
        <Link href={slug} passHref>
          <a>
            <span>DETAY</span>
          </a>
        </Link>
      </div>
    </StyledBottleOverlay>
  )
}

export default BottleOverlay
