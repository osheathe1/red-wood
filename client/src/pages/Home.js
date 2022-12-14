import React from 'react';

import Header from '../components/Header';
import { CategoryList } from '../components/CategoryList';
// import { HeroCard } from '../components/HeroCard';
import { useQuery } from '@apollo/client';
import { QUERY_ALL_PRODUCTS } from '../utils/queries';

const Home = () => {

  // query for all products, then pass into HeroCard
  const { loading, data } = useQuery(QUERY_ALL_PRODUCTS);
  const products = data?.products || [];
  // console.log(`Products outside of query`)
  // console.log(products)
  
  if(loading) {
    return( <div>Loading...</div>)
  } else {

  return (
    <main>
      
      <Header />
      {/* <HeroCard products={products}/> */}
      
      <div className="flex-row justify-center custom-list-container">
        <div
          className="col-12 col-md-10 mb-3 p-3"
        >
          <CategoryList />
        </div>
        {/* <div className="col-12 col-md-8 mb-3">
        </div> */}
      </div>
    </main>
  );
}
}
export default Home;
