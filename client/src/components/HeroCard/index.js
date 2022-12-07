import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const HeroCard = () => {
  return (
    <div className='hero-card-container'>
      <p className='hero-card-title'>White Tee</p>
      <a className='hero-card-link' href='/' alt='hero-link'>Buy Now!</a>
    </div>
  )
}