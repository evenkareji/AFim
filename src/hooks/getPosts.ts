import axios from 'axios';
// getServerSideProps;

export const getPosts = async () => {
  const response = await axios.get('http://localhost:8000/posts');
  return response.data.sort((post1, post2) => {
    return (
      new Date(post2.createdAt).valueOf() - new Date(post1.createdAt).valueOf()
    );
  });
};
