import { useQuery } from '@apollo/client';
import { QUERY_ALL_PRODUCTS } from '../../utils/queries';
import React from 'react';
import { Link } from "react-router-dom";

const ProductItem = () => {
    const { loading, data } = useQuery(QUERY_ALL_PRODUCTS);
    if (loading){
        return <div>Loading..</div>
    } else {
        const products = data?.products || [];

    console.log(data);

    

    return (
    <>
        {products && products.map((product) => (
        <div key={product._id}>
            <Link to={`/product/${product._id}`}><img src={product.image} alt='A Product' width={400}/></Link>
        </div>
      ))}
    </>)
}
}
    

export default ProductItem