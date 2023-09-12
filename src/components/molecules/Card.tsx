import React, { FC } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import { Post } from '../../types';

import DeleteIcon from '@mui/icons-material/Delete';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

// 分割代入の中でtypescriptの型宣言をしている
export const Card: FC<{ post: Post }> = (props) => {
  const { post } = props;
  const router = useRouter();
  // const [user, setUser] = useState<User>({
  //   _id: '',
  //   username: '',
  //   email: '',
  //   password: '',
  //   profileImg: '',

  //   followers: [],
  //   followings: [],
  //   isAdmin: false,

  //   updatedAt: null,
  // });

  const { username } = router.query;
  const loginUser = useSelector((state: any) => state.user);

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const response = await axios.get(
  //       `http://localhost:8000/users?userId=${post.userId}`,
  //     );

  //     setUser(response.data);
  //   };
  //   fetchUser();
  // }, [post.userId]);

  const postDelete = async () => {
    try {
      if (window.confirm('本当に削除しますかー？いいの？ほんき？ええ！？')) {
        await axios.delete(`/api/posts/${post._id}`, {
          data: { userId: loginUser.user._id },
        });
        // 変更エラーが起きる
        // window.location.reload();
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <SCard key={post._id}>
      {loginUser.user.username === username && (
        <SDeleteIcon onClick={postDelete} />
      )}
      <SProfileText key={post._id}>{post.desc}</SProfileText>
    </SCard>
  );
};
const SDeleteIcon = styled(DeleteIcon)`
  position: absolute;
  top: 20px;
  right: 20px;
  color: #8d8d8d;
`;
const SCard = styled.div`
  position: relative;
  background-color: #fff;
  border-radius: 3px;
  border: 1px solid #dfdfdf;
  padding: 70px 16px;
  height: 250px;
`;
const SProfileText = styled.div`
  font-family: 'Helvetica';
  margin: 0 auto;
  font-size: 20px;
  width: 80%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow-wrap: break-word;
`;
