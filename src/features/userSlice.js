import { createSlice } from '@reduxjs/toolkit';
const initialStateUser =
  typeof window !== 'undefined'
    ? JSON.parse(localStorage.getItem('user'))
    : null;
export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: initialStateUser,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
    toggleFollow: (state, action) => {
      state.user = action.payload;
    },
  },
});
export const { login, logout, toggleFollow } = userSlice.actions;
export default userSlice.reducer;
