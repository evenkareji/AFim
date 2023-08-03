import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialStateUser =
  typeof window !== 'undefined'
    ? JSON.parse(localStorage.getItem('user'))
    : null;

export const login = createAsyncThunk(
  'user/login' /**userSliceのlogin reducer */,
  async (userInfo, { dispatch, getState }) => {
    // 下の関数が実行された時点でstateが更新される
    dispatch(userSlice.actions.login(userInfo));
    // 更新されたstateを新たに取得
    const state = getState();
    // login関数のresponse.dataをstateに入れたので、stateをlocalStorageにsetしている
    localStorage.setItem('user', JSON.stringify(state.user.user));
  },
);

export const logout = createAsyncThunk(
  'user/logout',
  async (_, { dispatch, getState }) => {
    dispatch(userSlice.actions.logout());

    const state = getState();
    localStorage.setItem('user', JSON.stringify(state.user.user));
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

export default userSlice.reducer;
