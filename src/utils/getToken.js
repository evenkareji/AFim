import Cookies from 'js-cookie';
const getToken = () => {
  // クッキー、ローカルストレージ、またはセッションストレージからトークンを取得
  const token = Cookies.get('token');
  return token ? JSON.parse(token) : null;
};
export default getToken;
