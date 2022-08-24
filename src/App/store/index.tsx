import { combineReducers, configureStore } from '@reduxjs/toolkit';

// import counterReducer from './counter';
import authReducer from './auth';
import createTravelerReducer from "App/components/SearchBox/createTravelerSlice";

const store = configureStore({
  reducer: { auth: authReducer, createTraveler: createTravelerReducer }
});

const rootReducer = combineReducers({});

export default store;
