import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Bike } from '../interfaces/index';

const initialState: Bike[] = [];

export const bikesSlice = createSlice({
  name: 'bikes',
  initialState,
  reducers: {
    // increment: (state) => {
    //   state.users += 1
    // },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.users += action.payload
    // },
    addBike: (state, action: PayloadAction<Bike>) => {
      state.push(action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { addBike } = bikesSlice.actions

export default bikesSlice.reducer