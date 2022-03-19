const { withGoogleFonts } = require('nextjs-google-fonts')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
}

module.exports = withGoogleFonts({
  googleFonts: {
    fonts: [
      'https://fonts.googleapis.com/css2?family=Sora:wght@100;200;300;400;500;600;700;800&display=swap',
    ],
  },
})

module.exports = nextConfig
