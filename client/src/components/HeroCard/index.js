import React, { useState } from 'react';

export const HeroCard = (props) => {

  // pull random product from props.products
  const randomProduct = props.products[Math.floor(Math.random() * props.products.length)];
  console.log(randomProduct)

  // const productId = '60f1b0f1b3b1a8b0b0c1c1c1'
  let productUrl = `/product/${randomProduct._id}`
  let backgroundImgUrl = `url(${randomProduct.image})`

  return (
    <div className='hero-card-container' style={{
      backgroundImage: backgroundImgUrl,
    }}>
      <p className='hero-card-title'>{randomProduct.name}</p>
      <a className='hero-card-link' href={productUrl} alt='hero-link'>Buy Now!</a>
    </div>
  )
}