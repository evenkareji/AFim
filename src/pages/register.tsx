import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import { useRouter } from 'next/router';
import { LoginForm } from '../components/atoms/LoginForm';
import { ErrorMessage } from '../components/atoms/ErrorMessage';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useRegister } from '../hooks/useRegister';
import { useForm } from 'react-hook-form';
import { registerValidationSchema } from '../utils/validationSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSelector } from '../redux/store';
const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    resolver: zodResolver(registerValidationSchema),
  });
  const router = useRouter();
  const { user, loading } = useSelector((state) => state.user);

  const { registerSubmit, emailExist, isError } = useRegister();
  const [passwordShown, setPasswordShown] = useState(false);
  useEffect(() => {
    if (user && !loading) {
      router.push('/');
    }
  }, [user]);

  const togglePasswordVisiblity = () => {
    setPasswordShown((passwordShown) => !passwordShown);
  };

  return (
    <SLoginBack>
      <SLoginBorder>
        <SForm onSubmit={handleSubmit(registerSubmit)}>
          <SArrowBackIosNewIconBox href={'/login'}>
            <SArrowBackIosNewIcon />
          </SArrowBackIosNewIconBox>
          <SHead>
            新規登録<Sp>本物のメールアドレスは入力しないでください</Sp>
          </SHead>
          <SName
            type="text"
            autoFocus={true}
            placeholder="ユーザー名"
            {...register('username')}
          />
          <p style={{ marginBottom: '14px', color: 'red' }}>
            {errors.username?.message as React.ReactNode}
          </p>
          <SEmail
            type="email"
            placeholder="メールアドレス *本物のメールアドレスは入力しないでください"
            {...register('email')}
          />
          <p style={{ marginBottom: '14px', color: 'red' }}>
            {errors.email?.message as React.ReactNode}
          </p>
          {emailExist ? (
            <SEmailExist style={{ display: 'block' }}>
              そのメールアドレスは使用されています
            </SEmailExist>
          ) : (
            <SEmailExist style={{ display: 'none' }}>
              そのメールアドレスは使用されています
            </SEmailExist>
          )}
          <SPassword
            type={passwordShown ? 'text' : 'password'} // typeを動的に変更
            {...register('password')}
          />
          <button type="button" onClick={togglePasswordVisiblity}>
            表示/非表示
          </button>
          <p style={{ marginBottom: '14px', color: 'red' }}>
            {errors.password?.message as React.ReactNode}
          </p>
          <SPasswordConfirmation
            placeholder="確認用パスワード"
            type="password"
            {...register('passwordConfirmation')}
            isError={isError}
          />
          <p style={{ marginBottom: '14px', color: 'red' }}>
            {errors.password?.message as React.ReactNode}
          </p>
          {isError ? (
            <SErrorMessage style={{ opacity: '1' }}>
              パスワードが一致しません
            </SErrorMessage>
          ) : (
            <SErrorMessage style={{ opacity: '0' }}>
              パスワードが一致しません
            </SErrorMessage>
          )}
          <SSubmit type="submit" formnovalidate>
            登録
          </SSubmit>
        </SForm>
      </SLoginBorder>
    </SLoginBack>
  );
};
const SEmailExist = styled.p`
  color: red;
  font-size: 15px;
  margin-top: -1px;
`;
const Sp = styled.p`
  color: red;
  font-size: 15px;
`;
const SArrowBackIosNewIconBox = styled(Link)`
  display: inline-block;

  height: 30px;
  width: 30px;
  position: absolute;
  top: 80px;
`;
const SArrowBackIosNewIcon = styled(ArrowBackIosNewIcon)`
  width: 92%;
  max-width: 680px;
  margin: 0 auto 20px;
  color: #9a9696;
`;
const SErrorMessage = styled(ErrorMessage)`
  color: red;
  margin-bottom: 38px;
`;
const SLoginBack = styled.div`
  background-color: #d9d9d9;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const SLoginBorder = styled.div`
  width: 100%;
  height: 100vh;
  border-radius: 0px;

  background-color: #fff;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 432px) {
    width: 60%;
    min-width: 394px;
    max-width: 640px;

    height: 90vh;
    border-radius: 16px;
  }
`;
const SForm = styled.form`
  width: 70%;
  height: 60vh;
  max-width: 400px;
  margin: 0 auto;
  padding: 30px 0px;
`;
const SHead = styled.div`
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 40px;
`;
const SName = styled(LoginForm)`
  /* margin-bottom: 18px; */
`;
const SEmail = styled(LoginForm)``;

const SPassword = styled(LoginForm)`
  /* margin-bottom: 18px; */
`;
const SPasswordConfirmation = styled(LoginForm)`
  outline: ${({ isError }) => isError && '#ed0303 auto 2px'};
`;

const SSubmit = styled.button`
  text-decoration: none;
  list-style: none;
  border: none;
  width: 50%;
  height: 40px;
  background-color: #ed6103;
  border-radius: 30px;
  color: #fff;
  display: flex;
  max-width: 150px;
  justify-content: center;
  align-items: center;
  margin-left: auto;
`;

export default Register;
