import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import YoutubeSearchedForIcon from '@material-ui/icons/YoutubeSearchedFor';
import PersonOutlinedIcon from '@material-ui/icons/PersonOutlined';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import '../css/Heading.css'
function Heading() {
    return (
        <div className="heading">
            <div className="heading__icons">
                <div className="heading__icon heading__icon--active">
                <HomeIcon/>
                <p>Home</p>
                </div>
                <div className="heading__icon">
                <LiveTvIcon/>
                <p>Live TV</p>
                </div>
                <div className="heading__icon">
                <VideoLibraryIcon/>
                <p>Libraries</p>
                </div>
                <div className="heading__icon">
                <YoutubeSearchedForIcon/>
                <p>Search</p>
                </div>
                <div className="heading__icon">
                <PersonOutlinedIcon/>
                <p>Account</p>
                </div>
            </div>
            <h1>Remarkable Flickz</h1>
        </div>
    )
}

export default Heading
