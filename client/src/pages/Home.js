import React from 'react';

import Header from '../components/Header';
import { CategoryList } from '../components/CategoryList';
import { HeroCard } from '../components/HeroCard';

const Home = () => {

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
