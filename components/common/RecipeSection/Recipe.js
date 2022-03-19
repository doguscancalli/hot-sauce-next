import Image from 'next/image'
import { StyledRecipe } from './style'

const Recipe = ({ recipe }) => {
  const { image } = recipe

  return (
    <StyledRecipe>
      {/* <Image
        src={image}
        layout='responsive'
        width='100%'
        height='160%'
        objectFit='cover'
      /> */}

      <div
        data-repetition
        data-repetition-elems='4'
        data-repetition-stagger='-0.18'
        data-repetition-initial-scale='1.4'
        className='image image--style-1'
        style={{ backgroundImage: `url(${image.src})` }}
      />
    </StyledRecipe>
  )
}

export default Recipe
