import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import { UserIconImg } from '../atoms/UserIconImg';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useDispatch } from 'react-redux';
import { toggleFollow } from '../../features/userSlice';
import { AppDispatch, useSelector } from '../../redux/store';
import dataURItoBlob from '../../utils/blobConverter';

export const UserIconWithName = ({ profileUser }) => {
  const [image, setImage] = useState<any>();
  const dispatch: AppDispatch = useDispatch();

  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    if (image) {
      profileUpload();
    }
  }, [image]);

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

  async function profileUpload() {
    if (!user) {
      console.error('user情報がありません');
      return;
    }

    const newProfile: { userId: string; profileImg?: string } = {
      userId: user._id,
    };
    if (image) {
      const postImage = dataURItoBlob(image); // 単一の画像をBlobに変換
      const path = `${user.username}/post Image`;
      const formData = new FormData();
      formData.append('path', path);
      formData.append('file', postImage);

      try {
        const { data } = await axios.post('/api/upload/uploadImages', formData);

        newProfile.profileImg = data.url.url;
      } catch (err) {
        console.log(err);
      }

      try {
        const response = await axios.put(`/api/users/${user._id}`, newProfile);
        dispatch(toggleFollow(response.data));
        window.location.reload();
      } catch (err) {
        console.log(err);
      }
    }
  }

  return (
    <>
      <SLabel htmlFor="profile_image">
        {/* この画像のキャッシュは画像にランダムな名前を付与したらできる */}
        <SProfileImg src={profileUser.profileImg} />
        <SAddCircleIcon />
        <input
          type="file"
          id="profile_image"
          name="profile_image"
          hidden
          accept="image/jpeg,image/png,image/gif,image/webp"
          onChange={handleImages}
        />
      </SLabel>

      <SProfileUserName>{profileUser.username}</SProfileUserName>
    </>
  );
};
const SLabel = styled.label`
  position: relative;
  display: block;
  cursor: pointer;
  width: 160px;
  height: 160px;
  margin: 0 auto 14px;
  @media (min-width: 425px) {
    & {
      width: 180px;
      height: 180px;
    }
  }
`;
const SAddCircleIcon = styled(AddCircleIcon)`
  position: absolute;
  bottom: -8px;
  left: 68%;
  font-size: 35px !important;
  color: #ed6103 !important;
  background: #fff;
  border-radius: 2000px;
`;
const SProfileImg = styled(UserIconImg)`
  width: 160px;
  height: 160px;
  margin: 0 auto;
  @media (min-width: 425px) {
    & {
      width: 180px;
      height: 180px;
    }
  }
`;
const SProfileUserName = styled.div`
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 18px;
  text-align: center;
`;
// const Smp = styled.div`
//   color: #545454;
//   margin-bottom: 18px;
//   text-align: center;
// `;
