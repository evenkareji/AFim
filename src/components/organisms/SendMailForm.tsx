import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { sendVerificationEmail } from '../../utils/validationSchema';
import axios from 'axios';
const SendMailForm = ({ setEmail, setError, Error, setVisible }) => {
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(sendVerificationEmail),
  });
  const sendMail = async (data) => {
    const { email } = data;

    try {
      const response = await axios.post('api/auth/sendResetPasswordCode', {
        email,
      });

      setEmail(email);
      alert(response.data.message);
      setVisible(1);
    } catch (error) {
      console.log(error);
      setError(error.response.data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(sendMail)}>
      <input id="email" type="email" {...register('email')} />
      <button type="submit">sendMail</button>
      <div>{Error}</div>
    </form>
  );
};

export default SendMailForm;
