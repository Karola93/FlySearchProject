import { combineReducers, configureStore } from '@reduxjs/toolkit';

import authReducer, {AuthData} from 'App/store/authSlice';
import createTravelerReducer, {TravelData} from "App/store/travelSlice";

export interface RootState {
  auth: AuthData,
  createTraveler: TravelData
}

const store = configureStore({
  reducer: { auth: authReducer, createTraveler: createTravelerReducer }
});

const rootReducer = combineReducers({
  auth: authReducer,
  createTraveler: createTravelerReducer
});

export const AppDispatch = typeof store.dispatch;
export default store;
