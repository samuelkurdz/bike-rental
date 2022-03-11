import { reserves } from '@databases';
import { Reserve } from '@interfaces';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ReservesState {
  data: Reserve[];
}
const initialState: ReservesState = {
  data: [...reserves],
};

export const reservesSlice = createSlice({
  name: 'reserves',
  initialState,
  reducers: {
    addReserve: (state, action: PayloadAction<Reserve>) => {
      state.data.push(action.payload);
    },
    removeReserve: (state, action: PayloadAction<string>) => {
      state.data = state.data.filter((user) => user.id !== action.payload);
    },
    updateReserve: (state, action: PayloadAction<Reserve>) => {
      const index = state.data.findIndex((Reserve) => Reserve.id === action.payload.id);

      if (index === -1) return;
      state.data[index] = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addReserve, removeReserve, updateReserve } = reservesSlice.actions;

export default reservesSlice.reducer;
