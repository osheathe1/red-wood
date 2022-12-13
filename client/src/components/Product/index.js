import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { useStoreContext } from "../../utils/GlobalState";
import { QUERY_PRODUCT } from "../../utils/queries";
import { idbPromise } from "../../utils/helpers";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
// import Auth from '../../utils/auth';

export const Product = () => {
  let count = 0;
  const [state, dispatch] = useStoreContext();

  let { productId } = useParams();

  const { loading, data } = useQuery(QUERY_PRODUCT, {
    // pass URL parameter
    variables: { productId: productId },
  });

  const product = data?.product || {};
  let cartBtn = "Add to Cart";
  console.log(product);

  const cartAddHandler = () => {
    cartBtn = "Item Added!";
    count++;

    if (count % 2 !== 0) {
      setTimeout(() => {
        cartBtn = "Already in cart";
      }, 2000);
    } else {
      cartBtn = "Add to cart!";
    }
  };

  const { image, name, _id, price, quantity } = item;
  // const item = {
  //   image,
  //   name,
  //   _id,
  //   price,
  //   quantity
  // }

  const { cart } = state;

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      // idbPromise("cart", "put", {
      //   ...itemInCart,
      //   purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      // });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 },
      });
      // idbPromise("cart", "put", { ...item, purchaseQuantity: 1 });
    } 
    console.log(state)
  };

  return (
    <div id="main-product-container">
      <section className="product-container">
        <div className="left-sidebar">
          <p className="product-title">{product.name}</p>
          <p id="vendor">{product.vendor}</p>
          <img
            className="product-image"
            src={product.image}
            alt="white-tee"
          ></img>
        </div>
        <div className="right-side">
          <p id="product-description">{product.description}</p>
          <div id="btn-container">
            {/* <button id='cart-btn' className='single-btn' onClick={cartAddHandler}>Add to cart!</button> */}
            <button onClick={addToCart}>{cartBtn}</button>
            <button id="review-btn" className="single-btn">
              Reviews
            </button>
          </div>
        </div>
      </section>
      <h1 id="review-header">Reviews</h1>
      <section id="review-container">
        <ul id="reviews">
          {product.reviews
            ? product.reviews.map((review, index) => (
                <div className="review-container" key={index}>
                  <div className="stars-and-authors">
                    <label className="review-author">{review.username}</label>
                    <span className="rate">
                      <input type="radio" id="star5" name="rate" value="5" />
                      <label htmlFor="star5" title="text">
                        5 stars
                      </label>
                      <input type="radio" id="star4" name="rate" value="4" />
                      <label htmlFor="star4" title="text">
                        4 stars
                      </label>
                      <input type="radio" id="star3" name="rate" value="3" />
                      <label htmlFor="star3" title="text">
                        3 stars
                      </label>
                      <input type="radio" id="star2" name="rate" value="2" />
                      <label htmlFor="star2" title="text">
                        2 stars
                      </label>
                      <input type="radio" id="star1" name="rate" value="1" />
                      <label htmlFor="star1" title="text">
                        1 star
                      </label>
                    </span>
                  </div>
                  <li className="single-review">{review.text}</li>
                  <div id="review-divider"></div>
                </div>
              ))
            : null}
        </ul>
      </section>
    </div>
  );
};
