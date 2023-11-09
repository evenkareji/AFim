import axios from 'axios';
import React from 'react';

const Reset = () => {
  const handleSearch = async () => {
    try {
      const { data } = axios.post('/api/findUser', { email });
    } catch (error) {
      console.log(error);
    }
  };
  return <div>Reset</div>;
};

export default Reset;
