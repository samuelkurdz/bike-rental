import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Manager } from '@interfaces';

const initialState: Manager[] = [];

export const managersSlice = createSlice({
  name: 'managers',
  initialState,
  reducers: {
    // increment: (state) => {
    //   state.users += 1
    // },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.users += action.payload
    // },
    addmanager: (state, action: PayloadAction<Manager>) => {
      state.push(action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { addmanager } = managersSlice.actions

export default managersSlice.reducer