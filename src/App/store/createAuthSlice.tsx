import { createSlice } from '@reduxjs/toolkit';

export interface AuthData {
  isAuthenticated: boolean
}

const initialAuthState: AuthData = {
  isAuthenticated: false
};

const authSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthState,
  reducers: {
    login(state: AuthData) {
      state.isAuthenticated = true;
    },
    logout(state: AuthData) {
      state.isAuthenticated = false;
    }
  }
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
