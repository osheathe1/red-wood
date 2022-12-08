import React from 'react';
import { useQuery } from '@apollo/client';

import Header from '../components/Header';
import { CategoryList } from '../components/CategoryList';
import { HeroCard } from '../components/HeroCard';
import Cart from "../components/Cart";
import { QUERY_THOUGHTS } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_THOUGHTS);
  const thoughts = data?.thoughts || [];

  return (
    <main>
      <Header />
      <HeroCard />
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
};

export default Home;
