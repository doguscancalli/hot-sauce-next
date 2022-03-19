import { useRef, useEffect } from 'react'
import { ImageHover } from '@utils/imageHover'
import { StyledRecipes } from './style'
import Recipe from './Recipe'

import RecipeImageFirst from 'public/img/recipe-1.jpg'
import RecipeImageSecond from 'public/img/recipe-2.jpg'
import RecipeImageThird from 'public/img/recipe-3.jpg'

const recipes = [
  { image: RecipeImageFirst },
  { image: RecipeImageSecond },
  { image: RecipeImageThird },
]

const Recipes = () => {
  const imagesRef = useRef(null)

  useEffect(() => {
    if (imagesRef === null) return
    imagesRef.current.childNodes.forEach((el) => new ImageHover(el))
  }, [imagesRef])

  return (
    <StyledRecipes ref={imagesRef}>
      {recipes.map((recipe, index) => (
        <Recipe recipe={recipe} key={index} />
      ))}
    </StyledRecipes>
  )
}

export default Recipes
