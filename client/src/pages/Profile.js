import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_USER, QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';

const Profile = () => {
  const { username: userParam } = useParams();

  console.log(`UserParam: ${userParam}`)

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  console.log(`Data: ${data}`)

  const user = data?.me || data?.user || {};
  console.log(`User: ${user}`)
  // navigate to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

  // let urlPath = `/product/${productId}`

  return (
    <div>
      <div className="flex-row mb-3">
        <h2 id="profile-header">
          Welcome back, {user.username}!
        </h2>
        <div
          className="col-12 col-md-10 mb-3 p-3 custom-profile-section"
        >
          <p className='recently-viewed-label'>Continue shopping: </p>
          <div className='recently-viewed-container'>
            <div className='recently-viewed-card'>
              <p>Afterburner Car Set</p>
              <a href='https://www.google.com'>View</a>
              {/* <Link >View now!</Link> */}
            </div>
            <div className='recently-viewed-card'>
              <p>Glactatron Defenders 4-Pack</p>
              <a href='https://www.google.com'>View</a>
              {/* <Link >View now!</Link> */}
            </div>
            <div className='recently-viewed-card'>
              <p>Darbie Dream Home</p>
              <a href='https://www.google.com'>View</a>
              {/* <Link >View now!</Link> */}
            </div>
            
          </div>
        </div>

        <div
            className="col-12 col-md-10 mb-3 p-3 custom-profile-section"
          >
            <p className='recently-viewed-label'>What about this? </p>
            <div className='recently-viewed-container'>
              <div className='recently-viewed-card'>
                <p>SpyFiction: The Espionage Boardgame</p>
                <a href='https://www.google.com'>View</a>
                {/* <Link >View now!</Link> */}
              </div>
              <div className='recently-viewed-card'>
                <p>2020 Silver 800</p>
                <a href='https://www.google.com'>View</a>
                {/* <Link >View now!</Link> */}
              </div>
              <div className='recently-viewed-card'>
                <p>Dynamo Off Road</p>
                <a href='https://www.google.com'>View</a>
                {/* <Link >View now!</Link> */}
              </div>
              
            </div>
          </div>


      </div>
    </div>
  );
};

export default Profile;
