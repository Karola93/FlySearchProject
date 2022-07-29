// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react';

import { useSelector } from 'react-redux';
import Auth from './components/User/Auth';
import SearchBox from './components/SearchBox/SearchBox';
import Footer from './components/Footer/Footer';
import BestOffers from './components/BestOffers/BestOffers';
import Header from './components/Header/Header';

import UserProfile from './components/User/UserProfile';

function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  return (
    <>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      <SearchBox />
      <BestOffers />
      <Footer />
    </>
  );
}

export default App;
