import {createSlice, PayloadAction } from '@reduxjs/toolkit';


export interface TravelData {
  from: string;
  where: string;
  whenDeparture: string;
  whenArrival: string;
  travelers: number;
}

export const initialState: TravelData = {
  from: '',
  where: '',
  whenDeparture: '',
  whenArrival: '',
  travelers: 0
};

export const travelSlice = createSlice({
  name: 'createTraveler',
  initialState,
  reducers: {
    handleTravelers: (state: TravelData, action: PayloadAction<number>) => {
      state.travelers = action.payload;
    },
    handleDestination: (state: TravelData, action) => {
      state.where = action.payload;
    },
    handleArrival: (state: TravelData, action) => {
      state.from = action.payload;
    },
    handleDepartureDate: (state: TravelData, action) => {
      state.whenDeparture = action.payload;
    },
    handleArrivalDate: (state: TravelData, action) => {
      state.whenArrival = action.payload;
  }
}
});

export const { handleTravelers, handleDestination, handleArrival, handleDepartureDate, handleArrivalDate } = travelSlice.actions;

export const selectTravelers = (state: any): number => state.travelers;

export const selectAllTravelData = (state: TravelData): any => {
  const travelers = state.travelers;
  const from = state.from;
  const where = state.where;
  const whenDeparture = state.whenDeparture;
  const whenArrival = state.whenArrival;
  return {
    travelers,
    from,
    where,
    whenDeparture,
    whenArrival
  };
};

export default travelSlice.reducer;
