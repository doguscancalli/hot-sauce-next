import React from 'react'

import { products } from '@data/products'

import { ProductView } from '@components/common'

const ProductPage = ({ product }) => {
  return (
    <>
      <ProductView product={product} />
    </>
  )
}

export default ProductPage

export const getStaticPaths = async () => {
  const paths = products.map((product) => {
    return {
      params: {
        slug: product.slug,
      },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = ({ params: { slug } }) => {
  const product = products.find((product) => product.slug === slug)

  return {
    props: {
      product,
    },
  }
}
