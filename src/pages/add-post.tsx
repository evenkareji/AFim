import React, { ReactElement, useEffect, useState } from 'react';
import styled from 'styled-components';
import { TextArea } from '../components/atoms/TextArea';
import { UserIconImg } from '../components/atoms/UserIconImg';
import { useAddPost } from '../hooks/useAddPost';
import Layout from '../components/templates/Layout';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { fetchInitialUser } from '../features/userSlice';
import { AppDispatch, useSelector } from '../redux/store';
import { useForm } from 'react-hook-form';
import RingLoader from 'react-spinners/RingLoader';
import PulseLoader from 'react-spinners/PulseLoader';

const AddPost = () => {
  const [isText, setIsText] = useState(false);
  const [image, setImage] = useState<any>();
  const [isLoadingSubmission, setIsLoadingSubmission] =
    useState<boolean>(false);

  const { register, handleSubmit, watch, setValue } = useForm();

  let descWatch = watch('desc', '');
  useEffect(() => {
    const maxText = 50;
    const textLength = descWatch.trim().length;
    setIsText(textLength > 0 && textLength <= maxText);
  }, [descWatch, setIsText]);

  const { AddPost } = useAddPost(image, setIsLoadingSubmission);
  const router = useRouter();
  const dispatch: AppDispatch = useDispatch();
  const { user, loading } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchInitialUser());
  }, []);
  useEffect(() => {
    if (!user && !loading) {
      router.push('/login');
    }
  }, [user]);

  const handleAddPost = ({ desc }) => AddPost(desc);

  const textLimit = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const maxText = 50;

    const textLength = e.target.value.trim().length;

    setIsText(textLength > 0 && textLength <= maxText);
  };

  const handleImages = (e) => {
    let file = e.target.files[0];
    if (file) {
      const reader: any = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (readerEvent) => {
        setImage(readerEvent.target.result);
      };
    }
  };

  if (loading) {
    return (
      <div className="loader-container">
        <RingLoader color="#ed6103" loading={true} size={50} />
      </div>
    );
  }

  return (
    <SPostBox>
      <Scenter>
        <SLabel htmlFor="textForm">
          <SForm method="post" onSubmit={handleSubmit(handleAddPost)}>
            <SUserIconImg src={user?.profileImg} />
            <TextArea
              placeholder="50文字以内で入力してください"
              {...register('desc')}
              onChange={(e) => {
                textLimit(e);
                setValue('desc', e.target.value);
              }}
            ></TextArea>
            {image && (
              <>
                <img src={image} alt="" />
              </>
            )}

            <input
              type="file"
              accept="image/jpeg,image/png,image/gif,image/webp"
              onChange={handleImages}
            />

            <SHr />
            <p style={{ color: descWatch.length > 50 ? 'red' : 'inherit' }}>
              {descWatch.length}/50
            </p>
            <SSubmit
              isText={isText}
              disabled={isLoadingSubmission}
              type="submit"
            >
              {isLoadingSubmission ? (
                <PulseLoader color="#fff" size={5} />
              ) : (
                '送信'
              )}
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
  position: relative;
  z-index: 2;
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
