import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getAccessTokenFromResponse } from './spotify';
import spotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useDataLayerValue } from './DataLayer';

const spotify = new spotifyWebApi();

function App() {

  const [token, setToken] = useState(null);

  const [{ user }, dispatch ] = useDataLayerValue();
  
  useEffect(() => {
      const hash = getAccessTokenFromResponse();
      window.location.hash = "";
      const _token = hash.access_token;

      if(_token){
        setToken(_token);

        spotify.setAccessToken(_token);

        spotify.getMe()
        .then( user => {dispatch({
          type: 'SET_USER',
          user: user
          });
        })
        .catch( err => console.log(err));
      }
  }, [])

  console.log(user)

  return (
    <div className="app">
      { token ? (
      <Player />
      ) : (
      <Login />
      )}
    </div>
  );
}

export default App;
