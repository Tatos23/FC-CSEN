import './Donationselect.css';
import './Home.css';
import React, { useState,useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import DropDownProfile from '../DropDownProfile';
import userEvent from '@testing-library/user-event';
function Donationselect(){

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        console.log(isVisible);
        setIsVisible(!isVisible);
    };

    const[openProfile, setOpenProfile] = useState(false);
    const refOne = useRef(null); //used to mark a DOM element
    useEffect(() => {
        document.addEventListener("click",handleClickOutside, true)
    },[])

    const handleClickOutside = (e) => {
        if(!refOne.current.contains(e.target)){
            console.log("Clicked outside");
            if(openProfile){
                //TODO
            }
        }
        else{
            console.log("Clicked inside Div");
        }
    }

return(<>


        <div className='home-navbar'>
            <div className='home-leftside'>
                <img className='home-logo-navbar'src='logo2.png' alt='logo'></img>
                <img className='home-logo-navbar-name'src='name.png' alt='logo'></img>
                </div>            <div className='home-middleside'>
                <button className='home-middleside-button'style={{ marginRight: '10%' }}>Home</button>   
                <button className='home-middleside-button'style={{ marginRight: '1%' }}>Donations</button>
                <button className='home-middleside-button'style={{ marginLeft: '10%' }}>About Us</button>
                <div className="home-dropdown">
            <button onClick={toggleVisibility}>Categories</button>
            {isVisible && (
                <div className="home-dropdown-content">
                    <button className='home-action-button'>Action 1</button>
                    <button className='home-action-button'>Action 2</button>
                    <button className='home-action-button'>Action 3</button>
                </div>
            )}
        </div>
            </div>
            <div className='home-rightside'>
                <div >
                <input  className="home-search-container" type="text" placeholder="Search..."></input>
                </div>

            <button className='home-searchbutton'><img className='home-search-icon'src='searchicon.png' alt='logo'></img></button>
            
            
            {/* <Link to={"/home"} className='singin-up' >Login/Register</Link> */}
{/* tatos */}
            <button className='home-profilebutton' onClick = {() => setOpenProfile((prev) => !prev)}><img className='home-profile-icon'src='profileEnhanced.png' alt='logo' ref = {refOne}></img></button>
            

            
            </div>

           </div>
</>);

}
export default Donationselect;