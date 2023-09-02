import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

async function user() {
  try {
    const response = await axios.get('/api/getUser');
    console.log(response.data, 'inside user()');
    return response.data;
  } catch (err) {
    console.log(err);
  }
}
console.log(user(), 'user()');
const initialStateUser = user();

console.log(user(), 'initialStateUser');
console.log(initialStateUser, 'initialStateUser');

export const login = createAsyncThunk(
  'user/login' /**userSliceのlogin reducer */,
  async ({ email, password }, { dispatch, getState }) => {
    try {
      const response = await axios.post('/api/auth/login', {
        email,
        password,
      });

      console.log(user(), 'response login');

      return user();
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
  },
);

export const userSlice = createSlice({
  name: 'user',
  // stateのこと
  initialState: {
    loading: initialStateUser ? false : true,
    user: initialStateUser,
    error: false,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.loading = false;
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
