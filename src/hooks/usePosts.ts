import axios from 'axios';
import { useState } from 'react';

export const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const getPosts = async () => {
    const response = await axios.get('/posts');

    setPosts(
      response.data.sort((post1, post2) => {
        return (
          new Date(post2.createdAt).valueOf() -
          new Date(post1.createdAt).valueOf()
        );
      }),
    );
  };

  return { getPosts, posts };
};
