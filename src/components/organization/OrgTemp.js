import './OrgTemp.css';
import React, { useState,useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import DropDownProfile from '../DropDownProfile';
import userEvent from '@testing-library/user-event';
import ORCards from './ORCards';
import { useNavigate } from 'react-router-dom';

function OrgTemp(){


    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        console.log(isVisible);
        setIsVisible(!isVisible);
    };

//tatos:
 
const[openProfile, setOpenProfile] = useState(false);

//TODO: handle click outside

    // const refOne = useRef(null); //used to mark a DOM element
    // useEffect(() => {
    //     document.addEventListener("click",handleClickOutside, true)
    // },[])

    // const handleClickOutside = (e) => {
    //     if(!refOne.current.contains(e.target)){
    //         console.log("Clicked outside");
    //     }
    //     else{
    //         console.log("Clicked inside Div");
    //     }
    // }

    //REPLACE THE LINE AT THE BOTTOM WITH THIS: <button className='home-profilebutton' onClick = {() => setOpenProfile((prev) => !prev)}><img className='home-profile-icon'src='profileEnhanced.png' alt='logo' ref = {refOne}></img></button>

    const navigate = useNavigate();
    const handleButtonHome = () =>{
    navigate('/org-home');
    }
    const handleButtonDon = () =>{
    navigate('/rep-don');
    }
    const handleButtonNot = () =>{
    navigate('/rep-notifications');
    }
return(
    <>
        <div className='org-temp-navbar'>
            <div className='org-temp-leftside'>
                <img className='org-temp-logo-navbar'src='logo2.png' alt='logo'></img>
                <img className='org-temp-logo-navbar-name'src='name.png' alt='logo'></img>
                {/* <button className='org-temp-donate-button' >Donate</button> */}
            </div>
            <div className='org-temp-middleside'>
                <button className='main-temp-middleside-button'style={{ marginRight: '10%' }}key={'org-home'} onClick={()=>handleButtonHome('org-home')}>Home</button>   
                <button className='main-temp-middleside-button'style={{ marginRight: '1%' }}key={'rep-don'} onClick={()=>handleButtonDon('rep-don')}>Requests</button>
                <button className='main-temp-middleside-button'style={{ marginLeft: '10%' }}>About Us</button>
                <button className='main-temp-middleside-button'style={{ marginLeft: '10%' }} key={'rep-notifications'} onClick={()=>handleButtonNot('rep-notifications')}>Notifications</button>
                
            </div>
            <div className='org-temp-rightside'>
                <div >
                <input  className="org-temp-search-container" type="text" placeholder="Search..."></input>
                </div>
            <button className='org-temp-searchbutton'><img className='org-temp-search-icon'src='searchicon.png' alt='logo'></img></button>
            <button className='org-temp-profilebutton' onClick = {() => setOpenProfile((prev) => !prev)}><img className='org-temp-profile-icon'src='profileEnhanced.png' alt='logo'></img></button>
            
            </div>
           </div>
        
       <div className='org-temp-nd'>
       </div>
       {openProfile && <DropDownProfile role="org"/> }
    
    </>
)
}
export default OrgTemp;
