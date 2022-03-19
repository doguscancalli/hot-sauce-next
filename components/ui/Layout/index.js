import GlobalStyle from '../../../theme/globalStyle'
import { Footer, Navbar } from '@components/shared'
import { Wrapper } from '@components/ui'

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Navbar />
      </Wrapper>
      {children}
      {/* <Footer /> */}
    </>
  )
}

export default Layout
