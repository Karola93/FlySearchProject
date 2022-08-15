// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react';
import { Route } from 'react-router-dom';
import Switch from 'react-router';

import Layout from 'App/components/layout/Layout';
import HomePage from 'App/pages/HomePage';
import Auth from './components/User/Auth';

import UserProfile from './components/User/UserProfile';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
        <Route path="/userProfile">
          <UserProfile />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
