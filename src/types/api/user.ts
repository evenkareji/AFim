export type User = {
  _id: string;
  username: string;
  email: string;
  password: string;
  profileImg: string;

  followers: string[];
  followings: string[];
  isAdmin: boolean;

  updatedAt: number;
};

export type UserPost = {
  _id: string;
  userId: string;
  desc: string;
  comments: string[];
  likes: string[];
  __v: number;
  createdAt: string;
  updatedAt: number;
};
