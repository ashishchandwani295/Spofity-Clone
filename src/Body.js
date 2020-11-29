import React from 'react';
import Header from './Header';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import './Body.css';
import { useDataLayerValue } from './DataLayer';
import SongBar from './SongBar';

function Body({spotify}) {

    const [{ tracks, token }] = useDataLayerValue();
    console.log(tracks);
    console.log(spotify)
     
    const playPause = ({id}) => {
        console.log(tracks);
        spotify.play({
            "uri" : [`spotify:track:${id}`],
            "Authorization" : `Bearer ${token}`
        })
        .then(response => {
            console.log(response)
        })
        .catch(err => console.log(err))
    }

    return(
        <div className="body">
            <Header spotify={spotify} />
            <div className="body__info">
                <img src={tracks?.images[0].url} alt="DW" />
                <div className="body__description">
                    <h4>PLAYLIST</h4>
                    <p>Discover Weekly</p>
                    <h4>{tracks?.description}</h4>
                </div>
            </div>
            <div className="body__icons">
                <PlayCircleFilledIcon fontSize="large" className="body__iconPlay" />
                <FavoriteBorderIcon fontSize="large" className="body__iconFav" />
                <MoreHorizIcon fontSize="large" className="body__iconHorizon" />
            </div>
            <div className="body__songsTitle">
                <p className="body__index">#</p>
                <p className="body__title">TITLE</p>
                <p className="body__album">ALBUM</p>
                <AccessTimeIcon className="body__time" />
            </div>
            <hr />
            <div className="body__tracks">
                {tracks?.tracks?.items.map((item, index) => (
                    <div key={index} className="body__songs">
                        <SongBar className="body__song" track={item.track} serial={index + 1} playPause={playPause} />
                        <p className="body__songAlbumName">{item.track.album.name}</p>
                        <p className="body__songDuration">{((item.track.duration_ms)/60000).toFixed(2)}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Body;