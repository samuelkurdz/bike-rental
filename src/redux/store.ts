import { configureStore } from '@reduxjs/toolkit';
import userReducer from './users-reducer';
import bikeReducer from './bikes-reducer';
import managerReducer from './managers-reducer';
import reserveReducer from './reserve-reducer';

export const store = configureStore({
  reducer: {
    users: userReducer,
    bikes: bikeReducer,
    managers: managerReducer,
    reserves: reserveReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
