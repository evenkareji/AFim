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
  const [isLoading, setIsLoading] = useState(false);

  const loginSubmit = async (e) => {
    try {
      e.preventDefault();
      setIsLoading(true);

      const emailValue = email.current?.value;
      const passwordValue = password.current?.value;

      dispatch(login({ email: emailValue, password: passwordValue }));
      setIsLoading(false);
      router.push('/');
    } catch (e) {
      alert(e);
      setIsError(true);
      setIsLoading(false);
    }
  };
  return {
    loginSubmit,
    setIsError,
    isError,
    setIsLoading,
    isLoading,
    email,
    password,
  };
};
