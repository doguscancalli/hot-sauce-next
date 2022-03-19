import { StyledwhoWeAre } from './style'

import HotGif from 'public/img/hot.gif'

const WhoWeAre = () => {
  return (
    <StyledwhoWeAre>
      <h1>
        <span className='line'>
          HOT HIPPIE <span className='yellow'>EL YAPIMI VE ORGANIK </span> ACI
        </span>
        <span className='line'>
          SOSLAR URETEN BIR ISLETMEDIR
          <span className='gif'>
            <img src={HotGif.src} alt='' />
          </span>
        </span>
      </h1>
    </StyledwhoWeAre>
  )
}

export default WhoWeAre
