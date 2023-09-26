import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../features/userSlice';
import {
  useSelector as rawUseSelector,
  TypedUseSelectorHook,
} from 'react-redux';

export const store = configureStore({
  reducer: {
    user: userSlice,
  },
});

// storeコンポーネントに含まれるgetState関数の戻り値を抽出
// ReturnTypeで戻り値をRootStateという新たな型を定義する
// これによりuseSelectorががstateの型を理解できるようになる
export type RootState = ReturnType<typeof store.getState>;
// 型情報付きのuseSelectorをここで宣言
export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector;

// dispatchの戻り値から新しく型を生成
export type AppDispatch = typeof store.dispatch;
