import { useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { useMediaQuery } from 'react-responsive'
import gsap from 'gsap'

import theme from '@theme'

import BottleOverlay from './BottleOverlay'
import { StyledBottle } from './style'

const Bottle = ({ product }) => {
  const {
    image: { src },
    slug,
  } = product

  const [isAnimating, setIsAnimating] = useState(false)

  const router = useRouter()
  const bottleRef = useRef(null)

  const isTablet = useMediaQuery({
    query: `(max-width: ${theme.breakpoint.tablet})`,
  })

  const handleRouting = () => {
    if (isTablet) router.push(`/${slug}`)
    return
  }

  const handleOnMouseEnter = () => {
    if (isAnimating || isTablet) return
    setIsAnimating(true)

    const bottleHoverElement = bottleRef.current.childNodes[1]
    const bottleHoverBackground = bottleRef.current.childNodes[1].childNodes[0]
    const bottleHoverItems = bottleRef.current.childNodes[1].childNodes[1]

    gsap
      .timeline({
        onComplete: () => setIsAnimating(false),
      })
      .to(bottleHoverElement, {
        duration: 0,
        visibility: 'visible',
      })
      .from(bottleHoverBackground, {
        duration: 0,
        opacity: 0,
      })
      .from(
        bottleHoverItems.childNodes,
        {
          duration: 1.1,
          ease: 'power4',
          y: 20,
          opacity: 0,
          stagger: 0.15,
        },
        '=-.15'
      )
  }

  const handleOnMouseLeave = () => {
    if (isTablet) return

    const bottleHoverElement = bottleRef.current.childNodes[1]
    const bottleHoverBackground = bottleRef.current.childNodes[1].childNodes[0]
    const bottleHoverItems = bottleRef.current.childNodes[1].childNodes[1]

    gsap
      .timeline({
        onComplete: () => setIsAnimating(false),
      })
      .to(bottleHoverElement, {
        duration: 0,
        visibility: 'hidden',
      })
      .to(bottleHoverBackground, {
        duration: 0,
        opacity: 1,
      })
      .to(bottleHoverItems.childNodes, {
        y: 0,
        opacity: 1,
        stagger: 0,
      })
  }

  return (
    <StyledBottle
      onClick={handleRouting}
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
      ref={bottleRef}
    >
      <img src={src} alt='Acı Sos' />
      <BottleOverlay product={product} />
    </StyledBottle>
  )
}

export default Bottle
