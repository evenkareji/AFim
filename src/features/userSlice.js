import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    // sessionに変える
    // reload時にcookieから値を取得
    user: JSON.parse(localStorage.getItem('user')) || null,
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
