import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const categories = [
  'Toys',
  'Gifts',
  'Tech',
  'Garden',
  'Auto'
]

export const CategoryList = () => {
  return (
    <div className='category-list'>
      {categories.map((category) => (
        <section className='category-card'>
          <p className='category-title'>{category}</p>
        </section>
      ))}
    </div>
  )
}