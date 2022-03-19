import { StyledHero } from './style'
import Marquee from './Marquee'
import Bottles from './Bottles'

const Hero = () => {
  return (
    <StyledHero>
      <Marquee />
      <Bottles />
    </StyledHero>
  )
}

export default Hero
