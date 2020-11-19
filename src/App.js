import React, { useEffect } from 'react';
import './App.css';
import Login from './Login';
import { getAccessTokenFromResponse } from './spotify';

function App() {

  useEffect(() => {
      const hash = getAccessTokenFromResponse();
      window.location.hash = "";
      const token = hash.access_token;
  }, [])

  return (
    <div className="app">
      <Login />
    </div>
  );
}

export default App;
