import React from 'react';

import './App.css';
// eslint-disable-next-line import/extensions
import SearchBox from './components/SearchBox/SearchBox';
// eslint-disable-next-line import/extensions
import Footer from './components/Footer/Footer';
// eslint-disable-next-line import/extensions
import BestOffers from './components/BestOffers/BestOffers';
// eslint-disable-next-line import/extensions
import Header from './components/Header/Header';

function App() {
  return (
    <section className="container">
      <Header />
      <h2>Sialalal</h2>
      <SearchBox />
      <BestOffers />
      <h3>Sialalal</h3>
      <Footer />
    </section>
  );
}

export default App;
