import axios from 'axios';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';

export const useRegister = () => {
  const username = useRef<HTMLInputElement>();
  const email = useRef<HTMLInputElement>();
  const password = useRef<HTMLInputElement>();
  const passwordConfirmation = useRef<HTMLInputElement>();
  const [isError, setIsError] = useState(false);
  const [emailExist, setEmailExist] = useState(false);
  const router = useRouter();

  const registerSubmit = async (e) => {
    e.preventDefault();
    const user: {
      username: string | undefined;
      email: string | undefined;
      password: string | undefined;
    } = {
      username: username.current?.value,
      email: email.current?.value,
      password: password.current?.value,
    };

    if (password.current?.value !== passwordConfirmation.current?.value) {
      setIsError(true);
    } else {
      try {
        await axios.post('http://localhost:8000/auth/register', user);
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
    username,
    email,
    password,
    passwordConfirmation,
  };
};
