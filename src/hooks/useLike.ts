// import axios from 'axios';

// export const useLike = () => {
//   const toggleLike = async (isGood, post, loginUser) => {
//     try {
//       !isGood ? ++post.likes.length : --post.likes.length;
//       const response = await axios.put(`/posts/${post._id}/like`, {
//         userId: loginUser._id,
//       });

//       setIsGood(response.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return { toggleLike, setIsGood };
// };
