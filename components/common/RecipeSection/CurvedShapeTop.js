import { StyledCurvedShapeTop } from './style'

const CurvedShapeTop = () => {
  return (
    <StyledCurvedShapeTop>
      <svg viewBox='0 0 1920 300'>
        <path
          d='M0,150S480.41,0,960.41,0,1920,150,1920,150V300H0Z'
          fill='#ffda24'
        />
      </svg>

      <svg viewBox='0 0 1920 150'>
        <defs>
          <path
            id='shape'
            d='M0,150S480.41,0,960.41,0,1920,150,1920,150V300H0Z'
            fill='#ffda24'
          />
        </defs>
        <text>
          <textPath href='#shape'>
            TARIFLER • TARIFLER • TARIFLER • TARIFLER • TARIFLER • TARIFLER •
            TARIFLER • TARIFLER • TARIFLER • TARIFLER • TARIFLER • TARIFLER •
            TARIFLER • TARIFLER • TARIFLER •
            <animate
              attributeName='startOffset'
              from='-1000'
              to='0'
              dur='60s'
              repeatCount='indefinite'
            />
          </textPath>
        </text>
      </svg>
    </StyledCurvedShapeTop>
  )
}

export default CurvedShapeTop
