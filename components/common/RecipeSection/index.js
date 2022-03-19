import CurvedShapeBottom from './CurvedShapeBottom'
import CurvedShapeTop from './CurvedShapeTop'
import Recipes from './Recipes'
import { StyledRecipeSection } from './style'

const RecipeSection = () => {
  return (
    <StyledRecipeSection>
      <CurvedShapeTop />
      <Recipes />
      <CurvedShapeBottom />
    </StyledRecipeSection>
  )
}

export default RecipeSection
