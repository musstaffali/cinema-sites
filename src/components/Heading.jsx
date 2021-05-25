import React from 'react';
import HomeIcon from '@material-ui/icons/Theaters';
// import LiveTvIcon from '@material-ui/icons/LiveTv';
import YoutubeSearchedForIcon from '@material-ui/icons/QueryBuilder';
import PersonOutlinedIcon from '@material-ui/icons/FlashOn';
import VideoLibraryIcon from '@material-ui/icons/Map';
import '../css/Heading.css'
function Heading() {
    return (
        <div className="heading">
            <div className="heading__icons">
                <div className="heading__icon heading__icon--active">
                <HomeIcon/>
                <p>4 SEASONZ CINEMA</p>
                </div>
                {/* <div className="heading__icon">
                <LiveTvIcon/>
                <p>Live TV</p>
                </div>*/}
                <div className="heading__icon">
                <VideoLibraryIcon/>
                <p>123 Alphabet St Hollywood California</p>
                </div>
                <div className="heading__icon">
                <YoutubeSearchedForIcon/>
                <p>9:00 am - 12:00 am</p>
                </div> 
                <div className="heading__icon">
                <PersonOutlinedIcon/>
                <p>Happy Hours after 8pm :)</p>
                </div>
            </div>
            <h1>Playing Now</h1>
        </div>
    )
}

export default Heading
