import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { changePasswordValidationSchema } from '../../utils/validationSchema';
import axios from 'axios';
import { useRouter } from 'next/router';
const SendMailForm = ({ email, setError, Error }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(changePasswordValidationSchema),
  });
  const router = useRouter();

  const changePassword = async (data) => {
    const { password } = data;
    try {
      axios.post('api/auth/changePassword', { email, password });
      router.push('/login');
    } catch (error) {
      console.log(error);
      setError(error.response.data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(changePassword)}>
      <input id="password" type="password" {...register('password')} />
      <input
        id="password"
        placeholder="確認用パスワード"
        type="password"
        {...register('passwordConfirmation')}
      />

      <button type="submit">パスワードを変更</button>
      <div>{Error}</div>
      <p style={{ marginBottom: '14px', color: 'red' }}>
        {errors.password?.message as React.ReactNode}{' '}
        {errors.passwordConfirmation?.message as React.ReactNode}{' '}
      </p>
    </form>
  );
};

export default SendMailForm;
