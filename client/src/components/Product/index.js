import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

export const Product = (props) => {
  return (
    <div id='main-product-container'>
      <section className='product-container'>
        <div className='left-sidebar'>
          <p className='product-title'>White Tee</p>
          <p id='vendor'>Gucci</p>
          <img className='product-image' src='https://cdn.discordapp.com/attachments/1047988391440027748/1050143955746041916/white_tshirt.jpg' alt='white-tee'></img>
        </div>
        <div className='right-side'>
          <p id="product-description">This white tee is EXTRA wide. It's so big that it has all the necessary things a human being needs to live. Comes fully furnished with mahogany cabinets, dining table, couches and much more. This white tee is listed as a 3 bedroom 2 bath which means its big enough to fit a small family. Order one today!</p>
          <button id='add-cart-btn'>Add to cart!</button>
        </div>
      </section>
      <h1 id='review-header'>Reviews</h1>
      <section id='review-container'>
        <ul id='reviews'>
          <label className='review-author'>Lvarando | Dec 2022
          </label>
          <li className='single-review'>My family LOVES this white tee. It has been a home to us for many years and will be passed down to my children! 10 out of 10, would recommend.</li>

          <label className='review-author'>Jaeal | July 2022
          </label>
          <li className='single-review'>10/10. Love!</li>

          <label className='review-author'>ZschRo | Jan 2021
          </label>
          <li className='single-review'>Never had anything wider than this. Great Job!</li>

          <label className='review-author'>JoFlor | Apr 2020
          </label>
          <li className='single-review'>Who knew basic and white would be so sought after!</li>
        </ul>
        </section>
    </div>
  )
}