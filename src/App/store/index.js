import { configureStore } from '@reduxjs/toolkit';

// eslint-disable-next-line import/extensions,import/no-unresolved
import counterReducer from './counter';
import authReducer from './auth';

const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer }
});

export default store;
