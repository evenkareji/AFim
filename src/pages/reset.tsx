import { useState } from 'react';
import SendMailForm from '../components/organisms/SendMailForm';
import VerifyCode from '../components/organisms/VerifyCode';
import ChangePassword from '../components/organisms/ChangePassword';

const Reset = () => {
  const [Error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [visible, setVisible] = useState(0);
  // const { register, handleSubmit } = useForm({
  //   resolver: zodResolver(resetPasswordValidationSchema),
  // });
  console.log('email');

  // const verifyCode = async (data) => {
  //   console.log(data);
  //   console.log(email, 'verifyCode');

  //   const { code } = data;
  //   console.log(code);

  //   try {
  //     axios.post('api/auth/validateResetCode', { email, code });
  //   } catch (error) {
  //     console.log(error);
  //     setError(error.response.data.message);
  //   }
  // };

  return (
    <div>
      {visible === 0 && (
        <SendMailForm
          setVisible={setVisible}
          setEmail={setEmail}
          setError={setError}
          Error={Error}
        />
      )}
      {visible === 1 && (
        <VerifyCode
          email={email}
          setError={setError}
          Error={Error}
          setVisible={setVisible}
        />
      )}
      {visible === 2 && (
        <ChangePassword email={email} setError={setError} Error={Error} />
      )}
    </div>
  );
};

export default Reset;
