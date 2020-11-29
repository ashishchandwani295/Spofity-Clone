import React from 'react';
import './SongBar.css';

function SongBar({ track, serial, playPause }) {
    return (
        <div className="songbar" onClick={() => ( playPause(track.id))}>
            <p>{serial}</p>
            <img className="songbar__images" src={track.album.images[2].url} alt="song"/>
            <div className="songbar__info">
                <p className="songbar__name">{track.name}</p>
                <p className="songbar__artist">
                    {track.artists.map((artist) => artist.name).join(", ")}
                </p>
            </div>
        </div>
    )
}

export default SongBar;