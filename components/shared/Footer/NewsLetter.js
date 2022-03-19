import { useMediaQuery } from 'react-responsive'

import theme from '@theme'

import { StyledNewsLetter } from './style'
import { Button, Form, Grid, GridCol, Input } from '@components/ui'

const NewsLetter = () => {
  const isTablet = useMediaQuery({
    query: `(max-width: ${theme.breakpoint.tablet})`,
  })

  const firstCol = {
    col: isTablet ? 6 : 2,
    offset: isTablet ? 0 : 1,
  }

  const secondCol = {
    col: isTablet ? 6 : 2,
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <StyledNewsLetter>
      <Grid>
        <GridCol {...firstCol}>
          <h1>BULTEN ABONELIGI</h1>
        </GridCol>
        <GridCol {...secondCol}>
          <Form onSubmit={handleSubmit}>
            <Input placeholder='EPOSTA ADRESİN' />
            <Button block>ABONE OL</Button>
            <p>
              İndirimler, tarifler, ürünler ve etkinliklerimizden haberdar olmak
              için bültenimize kaydolun.
            </p>
          </Form>
        </GridCol>
      </Grid>
    </StyledNewsLetter>
  )
}

export default NewsLetter
