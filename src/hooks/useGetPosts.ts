import axios from 'axios';
import { useState } from 'react';

export const useGetPosts = () => {
  const [posts, setPosts] = useState([]);
  const getPosts = async () => {
    const response = await axios.get('http://localhost:8000/posts');

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
