import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const categories = [
  // 'Toys',
  // 'Gifts',
  // 'Tech',
  // 'Garden',
  // 'Auto'
  {
    name: 'Toys',
    url: "https://get.pxhere.com/photo/play-number-pattern-color-child-colorful-toy-stones-art-children-toys-collage-lego-build-learn-many-built-module-lego-blocks-building-blocks-construction-toys-lego-build-children's-room-lego-stones-paid-out-play-an-active-archtitektur-child-art-519521.jpg"
  },
  {
    name: 'Gifts',
    url: "http://remodelerplatform.blob.core.windows.net/wwwmywindowworkscom/blog-images/e60347de-428f-4320-9257-22b993013fdd.jpg"
  },
  {
    name: 'Tech',
    url: 'https://cdn.thewirecutter.com/wp-content/media/2020/12/macbook-2048px-9.jpg?auto=webp&quality=60&crop=1.91:1&width=1200'
  },
  {
    name: 'Garden',
    url: 'https://clickhole.com/wp-content/uploads/2019/03/px2dlkga8tawr4csuxmo.jpg'
  },
  {
    name: 'Auto',
    url: 'https://hips.hearstapps.com/hmg-prod/images/2021-mercedes-benz-g-class-mmp-1-1603837632.jpg?crop=0.928xw:0.784xh;0.0481xw,0.154xh&resize=2048:*'
  }
]

export const CategoryList = () => {
  return (
    <div className='category-list'>
      {categories.map((category, index) => (
        <section className='category-card' style={{
          backgroundImage: `url("${category.url}")`
        }} key={index}>
          <p className='category-title'>{category.name}</p>
        </section>
      ))}
    </div>
  )
}