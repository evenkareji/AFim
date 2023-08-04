import axios from 'axios';
import { useState } from 'react';
import { User, Post } from '../types';

export const useGetAuthor = () => {
  const [user, setUser] = useState<User>();
  const getAuthorByPostId = async (post: Post) => {
    const response = await axios.get(`/api/users/${post.userId}`);

    setUser(response.data);
  };
  return { getAuthorByPostId, user };
};
