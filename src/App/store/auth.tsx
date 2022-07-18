import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = {
  isAuthenticated: false
};

const authSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      // eslint-disable-next-line no-param-reassign
      state.isAuthenticated = true;
    },
    logout(state) {
      // eslint-disable-next-line no-param-reassign
      state.isAuthenticated = false;
    }
  }
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
