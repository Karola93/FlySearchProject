import { combineReducers, configureStore } from '@reduxjs/toolkit';
import store from 'App/store/index';
import createTravelerReducer from 'App/components/SearchBox/createTravelerSlice';

const rootReducer = combineReducers({
  createTraveler: createTravelerReducer
});

export const AppDispatch = typeof store.dispatch;
// export const RootState = ReturnType<typeof store.getState>;
