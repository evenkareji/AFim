import axios from 'axios';
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import { login } from '../features/userSlice';
import { User } from '../types';
import { useRouter } from 'next/router';

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
      const response = await axios.post<User>(
        'http://localhost:8000/auth/login',
        {
          email: email.current?.value,
          password: password.current?.value,
        },
      );

      dispatch(login(response.data));
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
