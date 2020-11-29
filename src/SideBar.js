import React from 'react';
import SideBarOption from './SideBarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import './SideBar.css'
import { useDataLayerValue } from './DataLayer';

function SideBar() {

    const[{ playlists }] = useDataLayerValue();

    return (
        <div className="sidebar">
            <img 
            src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
            alt="Spotify Logo"
            className="sidebar__logo"
            />
            <SideBarOption title="Home" Icon={HomeIcon} />
            <SideBarOption title="Search" Icon={SearchIcon} />
            <SideBarOption title="Your Library" Icon={LibraryMusicIcon} />
            <br />
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr />
            <div className="sidebar__playlists">
                {playlists && playlists.items 
                ? (
                    playlists.items.map((playlist, index) => (
                    
                        <SideBarOption key={index} title={playlist.name} />
                  )))
                : (
                    <strong className="sidebar__title">NO PLAYLISTS</strong>
                )}
            </div>
        </div>
    )
}

export default SideBar;