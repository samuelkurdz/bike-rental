import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { users } from '../data';
import { User } from '../interfaces';

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
  },
})

// Action creators are generated for each case reducer function
export const { addUser, removeUser } = usersSlice.actions;

export default usersSlice.reducer;
