import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';
import { AppDispatch } from '../redux/store';
import { SignInData } from '../types';

export const useLogin = () => {
  const dispatch: AppDispatch = useDispatch();
  const [isError, setIsError] = useState(false);

  const loginSubmit = async (data: Readonly<SignInData>) => {
    const { email, password } = data;
    setIsError(false);

    try {
      await dispatch(login({ email, password })).unwrap();
    } catch (error) {
      console.log(error);
      setIsError(true);
    }
  };
  return {
    loginSubmit,
    isError,
  };
};
