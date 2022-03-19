import Head from 'next/head'
import { GoogleFonts } from 'nextjs-google-fonts/GoogleFonts'

import '@theme/reset.css'

// Component
import { Layout } from '@components/ui'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        {GoogleFonts()}
        <title>Hot Hippie</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='description' content='-' />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
