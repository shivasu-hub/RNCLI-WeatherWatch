import {createSlice} from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'weatherdetail',
  initialState: {
    data: [],
    location: {
      lat: 0,
      long: 0,
    },
  } as unknown as weatherdetailState,
  reducers: {
    saveLatLong: (state, {payload}: weatherdetailPayload) => {
      state.location.lat = payload.location.lat;
      state.location.long = payload.location.long;
    },
    saveWeatherData: (state, {payload}: weatherdetailPayload) => {
      state.data = payload.data;
    },
  },
});

export const {saveWeatherData, saveLatLong} = slice.actions;

export default slice.reducer;

export type weatherdetailState = {
  data: any[];
  location: {
    lat: number;
    long: number;
  };
};

interface weatherdetailPayload {
  payload: weatherdetailState;
}
