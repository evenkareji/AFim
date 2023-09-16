import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import { useRouter } from 'next/router';
import { login } from '../features/userSlice';

export const useLogin = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const email = useRef<HTMLInputElement>();
  const password = useRef<HTMLInputElement>(null);
  const [isError, setIsError] = useState(false);

  const loginSubmit = async (e) => {
    try {
      e.preventDefault();

      const emailValue: any = email.current?.value;
      const passwordValue: any = password.current?.value;

      dispatch(login({ email: emailValue, password: passwordValue }));
    } catch (err) {
      console.log(err);

      setIsError(true);
    }
  };
  return {
    loginSubmit,
    setIsError,
    isError,
    email,
    password,
  };
};
