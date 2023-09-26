import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from '../types';

type InitialStateUser = {
  loading: boolean;
  user: User | null;
  error: boolean;
};
const initialStateUser: InitialStateUser = {
  loading: true,
  user: null,
  error: false,
};

export const fetchInitialUser = createAsyncThunk(
  'user/getUser',
  async (_, { dispatch, getState }) => {
    try {
      const response = await axios.get('/api/users/getUser');

      return response.data;
    } catch (err) {
      console.log(err);
      return null;
    }
  },
);

type YourErrorType = any; // ここを適切なエラー型に変更してください

export const login = createAsyncThunk<
  User,
  { email: string | undefined; password: string | undefined },
  { rejectValue: YourErrorType }
>('user/login', async ({ email, password }, { rejectWithValue }) => {
  try {
    const response = await axios.post('/api/auth/login', {
      email,
      password,
    });
    return response.data as User;
  } catch (err) {
    console.log(err);
    // rejectWithValueを使ってエラー情報を返す
    return rejectWithValue(err.response.data);
  }
});
export const logout = createAsyncThunk(
  'user/logout',
  async (_, { dispatch, getState }) => {
    try {
      const response = await axios.get('/api/auth/logout');

      return response.data;
    } catch (err) {
      console.log(err);
    }
  },
);

export const toggleFollow = createAsyncThunk(
  'user/toggleFollow',
  async (userInfo, { dispatch, getState }) => {
    dispatch(userSlice.actions.toggleFollow(userInfo));

    // const state = getState();
  },
);

export const userSlice = createSlice({
  name: 'user',

  initialState: initialStateUser,
  reducers: {
    toggleFollow: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    // userState
    builder.addCase(fetchInitialUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchInitialUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchInitialUser.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });

    // login
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
    // logout
    builder.addCase(logout.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(logout.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = false;
    });
    builder.addCase(logout.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
  },
});
// export const {} = userSlice.actions;
export default userSlice.reducer;
