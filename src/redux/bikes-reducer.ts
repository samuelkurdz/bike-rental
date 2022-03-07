import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { bikes } from '../data';
import { Bike } from '../interfaces';

export interface BikesState {
  data: Bike[]
}
const initialState: BikesState = {
  data: [...bikes]
};

export const bikesSlice = createSlice({
  name: 'bikes',
  initialState,
  reducers: {
    addBike: (state, action: PayloadAction<Bike>) => {
      state.data.push(action.payload)
    },
    removeBike: (state, action: PayloadAction<string>) => {
      state.data = state.data.filter(user => user.id !== action.payload);
    },
    updateBike: (state, action: PayloadAction<Bike>) => {
      const index = state.data.findIndex(bike => bike.id === action.payload.id);
  
      if (index === -1) return;
      state.data[index] = action.payload;
  
    }
  },
})

// Action creators are generated for each case reducer function
export const { addBike, removeBike, updateBike } = bikesSlice.actions

export default bikesSlice.reducer