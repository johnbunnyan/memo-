import React from 'react'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';




function Header() {
    return (
        <div className="header">
            <div className="header__left">
            <MenuIcon />   
            <img 
            className='header__logo'
            src='https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg' alt="" />
               </div> 
            

<div className="header__input">
<input placeholder="Search" type='text' />
<SearchIcon className="header__inputButton" />
</div>


<div className="header__icons">
<VideoCallIcon className="header__icon" />
<AppsIcon />
<NotificationsIcon />
<Avatar 
alt="Sonny Sangha"
src="https://avatars2.githubusercontent.com/u/24712956?s=400&
u=b71527e605ae1b748fc2d4157a842e57e427ad44&v=4"
/>
</div>


        </div>
    )
}



export default Header
