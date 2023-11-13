import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { sendVerificationCode } from '../../utils/validationSchema';
import axios from 'axios';
const SendMailForm = ({ email, setError, Error, setVisible }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(sendVerificationCode),
  });

  const verifyCode = async (data) => {
    console.log(data);
    console.log(email, 'verifyCode');

    const { code } = data;
    console.log(code);

    try {
      axios.post('api/auth/validateResetCode', { email, code });
      setVisible(2);
    } catch (error) {
      console.log(error);
      setError(error.response.data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(verifyCode)}>
      <input
        id="code"
        type="number"
        {...register('code', { valueAsNumber: true })}
      />
      <button type="submit">codeを発行</button>
      <div>{Error}</div>
      <p style={{ marginBottom: '14px', color: 'red' }}>
        {errors.code?.message as React.ReactNode}{' '}
      </p>
    </form>
  );
};

export default SendMailForm;
