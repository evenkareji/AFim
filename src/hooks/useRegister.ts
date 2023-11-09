import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../features/userSlice';
import { AppDispatch } from '../redux/store';

export const useRegister = () => {
  const [isError, setIsError] = useState(false);
  const [emailExist, setEmailExist] = useState(false);
  const dispatch: AppDispatch = useDispatch();

  const registerSubmit = async (data) => {
    const { username, email, password, passwordConfirmation } = data;

    const authUser: {
      username: string | undefined;
      email: string | undefined;
      password: string | undefined;
    } = {
      username,
      email,
      password,
    };

    if (password !== passwordConfirmation) {
      setIsError(true);
    } else {
      try {
        await dispatch(register(authUser)).unwrap();
      } catch (error) {
        console.log(error);
        setEmailExist(true);
      }
    }
  };
  return {
    registerSubmit,
    emailExist,
    isError,
  };
};
