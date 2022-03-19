import { Hero, RecipeSection, WhoWeAre } from '@components/common'
import { Footer } from '@components/shared'
import { Wrapper } from '@components/ui'

const Home = () => {
  return (
    <>
      <Hero />
      <RecipeSection />
      <Wrapper>
        <WhoWeAre />
      </Wrapper>
      <Footer />
    </>
  )
}

export default Home
