import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import { UserIconImg } from '../atoms/UserIconImg';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFollow } from '../../features/userSlice';

export const UserIconWithName = ({ profileUser, profileImage }) => {
  const PUBLIC_FOLDER = process.env.NEXT_PUBLIC_PUBLIC_FOLDER;
  const [file, setFile] = useState<File | null>(null);
  const [frprofileImage, setProfileImage] = useState<string>(profileImage);
  const dispatch = useDispatch();

  const user = useSelector((state: any) => state.user.user);

  useEffect(() => {
    if (file) {
      profileUpload();
    }
  }, [file]);

  // useEffect(() => {
  //   if (profileUser && profileUser.profileImg) {
  //     setProfileImage(`${PUBLIC_FOLDER}person/${profileUser.profileImg}`);
  //   }
  // }, [profileUser]);

  async function profileUpload() {
    const newProfile: { userId: string; profileImg?: string } = {
      userId: user._id,
    };
    if (file) {
      try {
        const data = new FormData();
        const fileName = file.name;
        data.append('name', fileName);
        data.append('profile_image', file);
        newProfile.profileImg = fileName;
        console.log('実行');

        // 画像が日本語であったり、spaceがあると表示されない。だからサーバーで名前を変えてあげるといい
        await axios.post('/api/upload/profile-image', data);
        console.log('実行完了');

        setProfileImage(`${PUBLIC_FOLDER}person/${fileName}`);
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
        <SProfileImg src={frprofileImage} />
        <SAddCircleIcon />
        <input
          type="file"
          id="profile_image"
          name="profile_image"
          style={{ display: 'none' }}
          onChange={(e) => {
            if (e.target.files && e.target.files.length > 0) {
              setFile(e.target.files[0]);
            }
          }}
        />
      </SLabel>

      <SProfileUserName>{profileUser.username}</SProfileUserName>
    </>
  );
};
const SLabel = styled.label`
  position: relative;
  display: block;
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
