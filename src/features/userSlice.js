import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialStateUser =
  typeof window !== 'undefined'
    ? JSON.parse(localStorage.getItem('user'))
    : null;

export const login = createAsyncThunk(
  'user/login' /**userSliceのlogin reducer */,
  async ({ email, password }, { dispatch, getState }) => {
    try {
      const response = await axios.post('/api/auth/login', {
        email,
        password,
      });

      localStorage.setItem('user', JSON.stringify(response.data));

      return response.data;
    } catch (err) {
      return alert(err);
    }
  },
);

export const toggleFollow = createAsyncThunk(
  'user/toggleFollow',
  async (userInfo, { dispatch, getState }) => {
    dispatch(userSlice.actions.toggleFollow(userInfo));

    const state = getState();
    localStorage.setItem('user', JSON.stringify(state.user.user));
  },
);

export const userSlice = createSlice({
  name: 'user',
  // stateのこと
  initialState: {
    loading: true,
    user: initialStateUser,
    error: false,
  },
  reducers: {
    logout: (state) => {
      console.log('logout action triggered'); // 追加
      state.user = null;
      if (typeof window !== 'undefined') {
        localStorage.removeItem('user');
      }
    },
    toggleFollow: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = false;
    });
    builder.addCase(login.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
  },
});
export const { logout } = userSlice.actions;
export default userSlice.reducer;
