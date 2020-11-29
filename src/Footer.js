import React from 'react';
import './Footer.css';
import PlayCircleOutlineOutlinedIcon from '@material-ui/icons/PlayCircleOutlineOutlined';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import { Grid, Slider } from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

function Footer() {
    return (
        <div className="footer">
            <div className="footer__left">
                <img className="footer__albumLogo" src="https://upload.wikimedia.org/wikipedia/en/7/74/Usher_-_Confessions_album_cover.jpg" alt="" />
                <div className="footer__songInfo">
                    <h4>Yeah!</h4>
                    <p>Usher</p>
                </div>
                <FavoriteBorderIcon />
            </div>
            <div className="footer__center">
                <div className="footer__green">
                    <ShuffleIcon  />
               </div>
               <SkipPreviousIcon className="footer__icon" />
               <div className="footer__icon">
                    <PlayCircleOutlineOutlinedIcon fontSize="large" />
               </div>
               <SkipNextIcon className="footer__icon" />
               <RepeatIcon className="footer__green" />
            </div>
            <div className="footer__right">
                <Grid container spacing={2} className="footer_grid">
                    <Grid item >
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item >
                        <VolumeUpIcon />
                    </Grid>
                    <Grid item >
                        <Slider />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer