import axios from 'axios';

export const getPosts = async () => {
  const response = await axios.get(`${process.env.API_URL}/posts`);
  return response.data.sort((post1, post2) => {
    return (
      new Date(post2.createdAt).valueOf() - new Date(post1.createdAt).valueOf()
    );
  });
};
