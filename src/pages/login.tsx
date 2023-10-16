import Link from 'next/link';
import styled from 'styled-components';

import { useLogin } from '../hooks/useLogin';
import { ErrorMessage } from '../components/atoms/ErrorMessage';
import { Hr } from '../components/atoms/Hr';
import { LoginForm } from '../components/atoms/LoginForm';
import { useRouter } from 'next/router';
import { useSelector } from '../redux/store';
import { useForm } from 'react-hook-form';
const Login = () => {
  const { register, handleSubmit } = useForm();
  const { loginSubmit, isError } = useLogin();
  const router = useRouter();
  const { user, loading } = useSelector((state) => state.user);

  const googleLogin = () => {
    window.open('http://localhost:8000/auth/google', '_self');
  };

  if (user && !loading) {
    router.push('/');
  }
  return (
    <>
      <SLoginBack>
        <SLoginBorder>
          <SForm onSubmit={handleSubmit(loginSubmit)}>
            <SFormHead>SNS</SFormHead>
            <p>メールアドレス :test@gmail.com</p>
            <p>パスワード　　 :test</p>
            <SEmail
              id="email"
              {...register('email')}
              email="email"
              placeholder="メールアドレス"
              autoFocus
            />
            <SPassword
              id="password"
              {...register('password')}
              type="password"
              placeholder="パスワード"
            />
            {isError ? (
              <SErrorMessage style={{ opacity: '1' }}>
                メールアドレスかパスワードが間違っています
              </SErrorMessage>
            ) : (
              <SErrorMessage style={{ opacity: '0' }}>
                メールアドレスかパスワードが間違っています
              </SErrorMessage>
            )}
            <SSubmit type="submit">ログイン</SSubmit>
            <button onClick={() => googleLogin()} type="button">
              googleでログイン
            </button>
            <SHr />
            <STextFlex>
              <SAcountQuestion>アカウントをお持ちでないですか?</SAcountQuestion>
              <Link href="/register" style={{ textDecoration: 'none' }}>
                登録する
              </Link>
            </STextFlex>
          </SForm>
        </SLoginBorder>
      </SLoginBack>
    </>
  );
};

const SAcountQuestion = styled.p`
  @media (max-width: 432px) {
    font-size: 14px;
  }
  font-size: 16px;
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

  height: -webkit-fill-available;
  @supports (-webkit-touch-callout: none) {
    & {
      /* The hack for Safari */
      height: -webkit-fill-available;
    }
  }
  border-radius: 0px;
  position: relative;
  background-color: #fff;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 432px) {
    width: 60%;
    min-width: 394px;
    max-width: 640px;

    height: 80vh;
    border-radius: 16px;
  }
`;
const SForm = styled.form`
  width: 85%;
  height: 60vh;
  max-width: 400px;
  margin: 0 auto;
  padding: 40px 0px;
`;
const SFormHead = styled.div`
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 40px;
`;
const SEmail = styled(LoginForm)`
  margin-bottom: 14px;
`;

const SPassword = styled(LoginForm)``;

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
  margin-left: auto;
  justify-content: center;
  align-items: center;
`;

const STextFlex = styled.div`
  display: flex;
  justify-content: space-between;
  a {
    color: #ed6103;
  }
`;
const SHr = styled(Hr)``;

export default Login;
