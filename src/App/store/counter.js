import { createSlice } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      // eslint-disable-next-line no-param-reassign,no-plusplus
      state.counter++;
    },
    decrement(state) {
      // eslint-disable-next-line no-param-reassign,no-plusplus
      state.counter--;
    },
    increase(state, action) {
      // eslint-disable-next-line no-param-reassign
      state.counter += action.payload;
    },
    toggleCounter(state) {
      // eslint-disable-next-line no-param-reassign
      state.showCounter = !state.showCounter;
    }
  }
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
