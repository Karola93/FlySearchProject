import { combineReducers, configureStore } from '@reduxjs/toolkit';

import authReducer from 'App/store/createAuthSlice';
import createTravelerReducer from "App/components/SearchBox/createTravelerSlice";

const store = configureStore({
  reducer: { auth: authReducer, createTraveler: createTravelerReducer }
});

const rootReducer = combineReducers({
  auth: authReducer,
  createTraveler: createTravelerReducer
});

export const AppDispatch = typeof store.dispatch;
export default store;
