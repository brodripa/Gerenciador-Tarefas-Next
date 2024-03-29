import type { NextPage } from 'next'
import { useEffect, useState } from 'react';
import { Login } from '../Container/Login';
import { Home } from '../Container/Home';

const Index: NextPage = () => {
  const [accessToken, setToken] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('accessToken');
      if (token) {
        setToken(token);
      }
    }
  }, []);

  return (accessToken ? <Home setToken={setToken} /> : <Login setToken={setToken} />)
}

export default Index
