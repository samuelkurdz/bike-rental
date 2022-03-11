import { users } from '@databases';
import { User } from '@interfaces';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UsersState {
  data: User[]
}

const initialState: UsersState = {
  data: [...users],
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.data.push(action.payload)
    },
    removeUser: (state, action: PayloadAction<string>) => {
      state.data = state.data.filter(user => user.id !== action.payload);
    },
    updateUser: (state, action: PayloadAction<User>) => {
      const index = state.data.findIndex(user => user.id === action.payload.id);

      if (index === -1) return;
      state.data[index] = action.payload;

    }
  },
})

// Action creators are generated for each case reducer function
export const { addUser, removeUser, updateUser } = usersSlice.actions;

export default usersSlice.reducer;
