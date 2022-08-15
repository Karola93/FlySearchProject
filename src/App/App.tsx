// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from 'App/components/layout/Layout';
import HomePage from 'App/pages/HomePage';
import Auth from './components/User/Auth';

import UserProfile from './components/User/UserProfile';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" exact element={<HomePage />}></Route>
        <Route path="/auth" element={<Auth />}></Route>
        <Route path="/userProfile" element={<UserProfile />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
