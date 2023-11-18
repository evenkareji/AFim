export type User = {
  _id: string;
  username: string;

  profileImg: string;

  followers: string[];
  followings: string[];

  updatedAt: number | null;
};

export type Post = {
  _id: string;
  userId: string;
  desc: string;
  likes: string[];
  createdAt: string;
  updatedAt: number | null;
  img: string;
};

export type Profile = {
  username: string;
  desc: string;
  followings: string[];
  followers: string[];
};

export type AddPost = {
  userId: string;
  desc: string | undefined;
  img?: string;
};
export type SignInData = {
  email: string;
  password: string;
};
