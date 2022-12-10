import React, { useState } from 'react';
import { Link , useParams } from 'react-router-dom';

export const HeroCard = (props) => {
  const { productId } = useParams()

  let productUrl = `/product/${productId}`

  return (
    <div className='hero-card-container'>
      <p className='hero-card-title'>White Tee</p>
      <a className='hero-card-link' href={productUrl} alt='hero-link'>Buy Now!</a>
    </div>
  )
}