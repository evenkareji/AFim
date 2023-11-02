import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';
import { AppDispatch } from '../redux/store';
import { SignInData } from '../types';

export const useLogin = () => {
  const dispatch: AppDispatch = useDispatch();
  const [isError, setIsError] = useState(false);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    let timer;
    if (isError) {
      setShowError(true);
      timer = setTimeout(() => {
        setShowError(false); // 5秒後にエラーメッセージを非表示にする
      }, 5000);
    }
    return () => clearTimeout(timer); // コンポーネントのアンマウント時にタイマーをクリアする
  }, [isError]);
  const loginSubmit = async (data: Readonly<SignInData>) => {
    const { email, password } = data;
    setIsError(false);
    console.log(data);

    try {
      await dispatch(login({ email, password })).unwrap();
    } catch (error) {
      console.log(error);
      setIsError(true);
    }
  };
  return {
    loginSubmit,
    showError,
  };
};
