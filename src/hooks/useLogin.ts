import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';
import { AppDispatch } from '../redux/store';

export const useLogin = () => {
  const dispatch: AppDispatch = useDispatch();

  // const email = useRef<HTMLInputElement>();
  // const password = useRef<HTMLInputElement>(null);
  const [isError, setIsError] = useState(false);

  const loginSubmit = async (data) => {
    try {
      const { email, password } = data;

      dispatch(login({ email, password }));
    } catch (err) {
      console.log(err);

      setIsError(true);
    }
  };
  return {
    loginSubmit,
    setIsError,
    isError,
  };
};
