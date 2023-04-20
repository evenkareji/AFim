import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import { User, UserPost } from '../../types/api/user';

import DeleteIcon from '@mui/icons-material/Delete';
import { useSelector } from 'react-redux';

// 分割代入の中でtypescriptの型宣言をしている
export const Card: FC<{ post: UserPost }> = (props) => {
  const { post } = props;

  const [user, setUser] = useState<User>({
    _id: '',
    username: '',
    email: '',
    password: '',
    profileImg: '',

    followers: [],
    followings: [],
    isAdmin: false,

    updatedAt: null,
  });
  const username = useParams().username;
  const loginUser = useSelector((state: any) => state.user.user);

  useEffect(() => {
    console.log(user);
    const fetchUser = async () => {
      const response = await axios.get(`/users?userId=${post.userId}`);

      setUser(response.data);
    };
    fetchUser();
  }, [post.userId]);

  const postDelete = async () => {
    try {
      if (window.confirm('本当に削除しますかー？いいの？ほんき？ええ！？')) {
        await axios.delete(`/posts/${post._id}`, {
          data: { userId: loginUser._id },
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
      {loginUser.username === username && <SDeleteIcon onClick={postDelete} />}
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
