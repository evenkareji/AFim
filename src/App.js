import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';

import { Login } from './components/pages/Login';
import { Register } from './components/pages/Register';

import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { AddPostInfo } from './components/pages/AddPostLayout';
import { PostInfo } from './components/pages/PostInfo';
import { ProfileLayout } from './components/pages/PrfileLayout';
import axios from 'axios';

function App() {
  const user = useSelector((state) => state.user.user);
  useEffect(() => {
    // getでinit　apiを叩いて取得するそしてセッションへ保存する
    // localStorage.setItem('user', JSON.stringify(user));
    const init = async () => {
      try {
        const response = await axios.post('/init-user-data', user);
        console.log(response.data, 'jjjewjkhekhhkkhgfjggf');
      } catch (err) {
        console.log(err);
      }
    };
    init();
  }, [user]);

  return (
    <Routes>
      <Route path="/" element={user ? <PostInfo /> : <Login />} />
      <Route path="/profile/:username" element={<ProfileLayout />} />
      <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/addpost" element={<AddPostInfo />} />
    </Routes>
  );
}

export default App;
