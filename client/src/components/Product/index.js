import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

export const Product = (props) => {
  let count = 0

  const cartAddHandler = () => {
    let cartBtn = document.querySelector('#cart-btn')

    cartBtn.textContent = 'Item Added!'
    count++

    if (count % 2 !== 0){
      setTimeout(() => {
        cartBtn.textContent = 'Already in cart'
      }, 2000)
    } else {
      cartBtn.textContent = 'Add to cart!'
    }
    
  }

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
          <div id='btn-container'>
            <button id='cart-btn' className='single-btn' onClick={cartAddHandler}>Add to cart!</button>
            <button id='review-btn' className='single-btn'>Reviews</button>
          </div>
        </div>
      </section>
      <h1 id='review-header'>Reviews</h1>
      <section id='review-container'>
        <ul id='reviews'>
          <label className='review-author'>Lvarando | Dec 2022
          </label>
          <span className='rate'>
                <input type="radio" id="star5" name="rate" value="5" />
              <label for="star5" title="text">5 stars</label>
                <input type="radio" id="star4" name="rate" value="4" />
              <label for="star4" title="text">4 stars</label>
                <input type="radio" id="star3" name="rate" value="3" />
              <label for="star3" title="text">3 stars</label>
                <input type="radio" id="star2" name="rate" value="2" />
              <label for="star2" title="text">2 stars</label>
                <input type="radio" id="star1" name="rate" value="1" />
              <label for="star1" title="text">1 star</label>
            </span>
          <li className='single-review'>My family LOVES this white tee. It has been a home to us for many years and will be passed down to my children! 10 out of 10, would recommend.</li>

          <label className='review-author'>Jaeal | July 2022
          </label>
          <span className='rate'><input type="radio" id="star5" name="rate" value="5" />
              <label for="star5" title="text">5 stars</label>
              <input type="radio" id="star4" name="rate" value="4" />
              <label for="star4" title="text">4 stars</label>
              <input type="radio" id="star3" name="rate" value="3" />
              <label for="star3" title="text">3 stars</label>
              <input type="radio" id="star2" name="rate" value="2" />
              <label for="star2" title="text">2 stars</label>
              <input type="radio" id="star1" name="rate" value="1" />
              <label for="star1" title="text">1 star</label>
            </span>
          <li className='single-review'>10/10. Love!</li>

          <label className='review-author'>ZschRo | Jan 2021
          </label>
          <span className='rate'><input type="radio" id="star5" name="rate" value="5" />
              <label for="star5" title="text">5 stars</label>
              <input type="radio" id="star4" name="rate" value="4" />
              <label for="star4" title="text">4 stars</label>
              <input type="radio" id="star3" name="rate" value="3" />
              <label for="star3" title="text">3 stars</label>
              <input type="radio" id="star2" name="rate" value="2" />
              <label for="star2" title="text">2 stars</label>
              <input type="radio" id="star1" name="rate" value="1" />
              <label for="star1" title="text">1 star</label>
            </span>
          <li className='single-review'>Never had anything wider than this. Great Job!</li>

          <label className='review-author'>JoFlor | Apr 2020
          </label>
          <div className='rate'><input type="radio" id="star5" name="rate" value="5" />
              <label for="star5" title="text">5 stars</label>
              <input type="radio" id="star4" name="rate" value="4" />
              <label for="star4" title="text">4 stars</label>
              <input type="radio" id="star3" name="rate" value="3" />
              <label for="star3" title="text">3 stars</label>
              <input type="radio" id="star2" name="rate" value="2" />
              <label for="star2" title="text">2 stars</label>
              <input type="radio" id="star1" name="rate" value="1" />
              <label for="star1" title="text">1 star</label>
            </div>
          <li className='single-review'>Who knew basic and white would be so sought after!</li>
        </ul>
        </section>
    </div>
  )
}