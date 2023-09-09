import React, { ReactElement, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { TextArea } from '../components/atoms/TextArea';
import { UserIconImg } from '../components/atoms/UserIconImg';
import { useAddPost } from '../hooks/useAddPost';
import Layout from '../components/templates/Layout';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { fetchInitialUser } from '../features/userSlice';
// import { useRouter } from 'next/router';

const AddPost = () => {
  const desc = useRef<HTMLTextAreaElement>(null);
  // const router = useRouter();
  const PUBLIC_FOLDER = process.env.NEXT_PUBLIC_PUBLIC_FOLDER;
  const [isText, setIsText] = useState(false);
  // const [isLoading, setIsLoading] = useState<boolean>(true);
  const [file, setFile] = useState<File | null>(null);
  const { AddPost } = useAddPost();
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user);
  useEffect(() => {
    dispatch(fetchInitialUser());
    console.log('after');
  }, []);
  useEffect(() => {
    if (!user.user && !user.loading) {
      router.push('/login');
    }
  }, [user]);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
    AddPost(e, desc, file);

  const textLimit = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const minText = 0;
    const maxText = 50;

    if (e.target.value.trim().length === minText) {
      setIsText(false);
    } else if (maxText < e.target.value.length) {
      setIsText(false);
    } else {
      setIsText(true);
    }
  };
  // if (isLoading) {
  //   return <>loading</>;
  // }

  return (
    <SPostBox>
      <Scenter>
        <SLabel htmlFor="textForm">
          <SForm method="post">
            <SUserIconImg
              src={
                user.profileImg
                  ? PUBLIC_FOLDER + '/person/' + user.profileImg
                  : PUBLIC_FOLDER + '/person/noAvatar.png'
              }
            />

            <TextArea
              placeholder="50文字以内で入力してください"
              ref={desc}
              onChange={(e) => textLimit(e)}
              id="textForm"
            ></TextArea>
            <input
              type="file"
              id="file"
              name="file"
              // style={{ display: 'none' }}
              onChange={(e) => {
                const target = e.target as HTMLInputElement;
                const file = target.files ? target.files[0] : null;
                setFile(file);
              }}
            />
            <SHr />
            <SSubmit
              isText={isText}
              type="submit"
              onClick={(e) => handleSubmit(e)}
            >
              送信
            </SSubmit>
          </SForm>
        </SLabel>
        {/* <FooterAddPost /> */}
      </Scenter>
    </SPostBox>
  );
};

const SPostBox = styled.div`
  flex: 1;
  @media (min-width: 768px) {
    flex: 0.9;
  }
  @media (min-width: 1264px) {
    flex: 0.8;
  }
`;
const SUserIconImg = styled(UserIconImg)``;
const SLabel = styled.label`
  display: block;
  max-width: 500px;
  width: 70%;
  margin: 0 auto;
  background-color: #fff;
  padding: 32px 0 72px;
  border-radius: 20px;
`;
const SForm = styled.form`
  max-width: 500px;
  width: 90%;
  margin: 0 auto;
  background-color: #fff;
`;

const Scenter = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SSubmit = styled.button<{ isText: boolean }>`
  width: 125px;
  @media (max-width: 425px) {
    & {
      width: 100px;
      font-size: 12px;
    }
  }

  text-align: center;
  font-size: 14px;
  font-weight: bold;
  padding: 10px 15px 10px 17px;
  border-radius: 22px;
  border: none;
  color: #fff;
  background-color: #ed6103;
  border: none;
  margin-left: auto;

  &:hover {
    background-color: #ff6702;
  }
  pointer-events: ${({ isText }) => (isText ? 'auto' : 'none')};
  background-color: ${({ isText }) => (isText ? '#ff6702' : '#9e9c9c')};
  cursor: pointer;
`;
const SHr = styled.hr`
  border: 1px solid rgb(207, 217, 222);
  margin-top: 52px;
  margin-bottom: 42px;
`;

AddPost.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
export default AddPost;
