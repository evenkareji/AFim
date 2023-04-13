export type User = {
  _id: string;
  username: string;
  email: string;
  password: string;
  profileImg: string;

  followers: [];
  followings: [];
  isAdmin: boolean;

  updatedAt: number;
};

export type UserComment = {
  _id: number;
  userId: string;
  desc: string;
  comments: [];
  likes: [];
  createdAt: string;
  updatedAt: number;
};
