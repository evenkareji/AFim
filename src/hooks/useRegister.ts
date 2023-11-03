import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';

export const useRegister = () => {
  const [isError, setIsError] = useState(false);
  const [emailExist, setEmailExist] = useState(false);
  const router = useRouter();

  const registerSubmit = async (data) => {
    const { username, email, password, passwordConfirmation } = data;

    const user: {
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
        await axios.post('/api/auth/register', user);
        router.push('/login');
      } catch (err) {
        console.log(err);
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
