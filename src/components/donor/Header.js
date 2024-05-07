import './Donationselect.css';
import './Home.css';
import React, { useState,useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import DropDownProfile from '../DropDownProfile';
import userEvent from '@testing-library/user-event';
import { useNavigate } from 'react-router-dom';

function Header({loggedIn}){

    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate();



    const[openProfile, setOpenProfile] = useState(false);
    const handleButtonClickNotifications = () => {
        navigate('/notifications');
    }


    return(
    <>
        <div className='home-navbar'>
            <div className='home-leftside'>
                <img className='home-logo-navbar'src='logo2.png' alt='logo'></img>
                <img className='home-logo-navbar-name'src='name.png' alt='logo'></img>
            </div>
            <div className='home-middleside'>
                <button className='home-middleside-button'style={{ marginRight: '10%' }}>Home</button>   
                <button className='home-middleside-button'style={{ marginRight: '1%' }}>Donations</button>
                <button className='home-middleside-button'style={{ marginLeft: '10%' }}>About Us</button>
                <button className='view-requests-middleside-button' onClick={() => handleButtonClickNotifications('Notifications')}style={{ marginLeft: '10%', fontFamily: 'Roboto' } }>Notifications</button>

            </div>
            <div className='home-rightside'>
                <div>
                    <input  className="home-search-container" type="text" placeholder="Search..."></input>
                </div>
                <button className='home-searchbutton'><img className='home-search-icon'src='searchicon.png' alt='logo'></img></button>
                { loggedIn ? 
                    (<button className='main-temp-profilebutton' onClick = {() => setOpenProfile((prev) => !prev)}>
                    <img className='home-profilebutton'src='profileEnhanced.png' alt='logo'></img></button>)
                    :
                    (<Link to={"/home"} className='home-singin-up' >Login/Register</Link>)
                }
            </div>

        </div>
        {
        openProfile && <DropDownProfile/> 
       }
    </>
    );

}

export default Header;