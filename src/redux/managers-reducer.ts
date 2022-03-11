import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { managers } from '../databases';
import { Manager } from '@interfaces';

export interface ManagersState {
  data: Manager[]
}

const initialState: ManagersState = {
  data: [...managers],
}

export const managersSlice = createSlice({
  name: 'managers',
  initialState,
  reducers: {
    addManager: (state, action: PayloadAction<Manager>) => {
      state.data.push(action.payload)
    },
    removeManager: (state, action: PayloadAction<string>) => {
      state.data = state.data.filter(manager => manager.id !== action.payload);
    },
    updateManager: (state, action: PayloadAction<Manager>) => {
      const index = state.data.findIndex(manager => manager.id === action.payload.id);

      if (index === -1) return;
      state.data[index] = action.payload;

    }
  },
})

// Action creators are generated for each case reducer function
export const { addManager, removeManager, updateManager } = managersSlice.actions

export default managersSlice.reducer