import { stringify } from 'querystring';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getFlights } from 'App/components/SearchBox/travelersApi';

export interface TravelData {
  from: string;
  where: string;
  when: string;
  travelers: number;
}

export const initialState: TravelData = {
  from: '',
  where: '',
  when: '',
  travelers: 0
};

export const createTravelerSlice = createSlice({
  name: 'createTraveler',
  initialState,
  reducers: {
    handleTravelers: (state: TravelData, action: PayloadAction<number>) => {
      state.travelers = action.payload;
    },
    handleDestination: (state: TravelData, action) => {
      state.where = action.payload;
    },
    handleFrom: (state: TravelData, action) => {
      state.where = action.payload;
    }
  }
});

export const { handleTravelers, handleDestination, handleFrom } = createTravelerSlice.actions;

export const selectTravelers = (state: any): number => state.travelers;

export const selectAllTravelData = (state: any): any => {
  const travelers = state.travelers;
  const from = state.from;
  const where = state.where;
  const when = state.when;
  return {
    travelers,
    from,
    where,
    when
  };
};

export default createTravelerSlice.reducer;
