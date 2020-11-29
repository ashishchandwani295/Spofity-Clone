import React, { useEffect } from 'react';
import './App.css';
import Login from './Login';
import { getAccessTokenFromResponse } from './spotify';
import spotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useDataLayerValue } from './DataLayer';

const spotify = new spotifyWebApi();

function App() {

  const [{ user, token, playlists, tracks }, dispatch ] = useDataLayerValue();
  
  useEffect(() => {
      console.log(spotify)
      const hash = getAccessTokenFromResponse();
      window.location.hash = "";
      const _token = hash.access_token;

      if(_token){
        
        dispatch({
          type: 'SET_TOKEN',
          token: _token
        });

        spotify.setAccessToken(_token);

        spotify.getMe()
        .then( user => {dispatch({
          type: 'SET_USER',
          user: user
          });
        })
        .catch( err => console.log(err));

        spotify.getUserPlaylists()
        .then((playlists) => {

          dispatch({
            type: 'SET_PLAYLIST',
            playlists: playlists
          })
        })
        .catch(err => console.log(err))

        spotify.getPlaylist('37i9dQZEVXcJlH1PVRTh08')
        .then((tracks) => {
          console.log(tracks)
          dispatch({
            type: 'SET_DISCOVER_WEEKLY',
            tracks : tracks
          })
        })
        .catch(err => console.log(err));

      }
  }, [])

  console.log(user)

  return (
    <div className="app">
      { token ? (
      <Player spotify={spotify} />
      ) : (
      <Login />
      )}
    </div>
  );
}

export default App;
