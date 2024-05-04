import './MainTemp.css';
import React, { useState,useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import DropDownProfile from './DropDownProfile';
import userEvent from '@testing-library/user-event';
import ORCards from './organization/ORCards';
function MainTemp(){


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



return(
    <>
    <div className='main-temp-main'>
        <div className='main-temp-navbar'>
            <div className='main-temp-leftside'>
                <img className='main-temp-logo-navbar'src='logo2.png' alt='logo'></img>
                <img className='main-temp-logo-navbar-name'src='name.png' alt='logo'></img>
                {/* <button className='main-temp-donate-button' >Donate</button> */}
            </div>
            <div className='main-temp-middleside'>
                <button className='main-temp-middleside-button'style={{ marginRight: '10%' }}>Home</button>   
                <button className='main-temp-middleside-button'style={{ marginRight: '1%' }}>Donations</button>
                <button className='main-temp-middleside-button'style={{ marginLeft: '10%' }}>About Us</button>
                <div className="main-temp-dropdown">
            <button onClick={toggleVisibility}>Categories</button>
            {isVisible && (
                <div className="main-temp-dropdown-content">
                    <button className='main-temp-action-button'>Action 1</button>
                    <button className='main-temp-action-button'>Action 2</button>
                    <button className='main-temp-action-button'>Action 3</button>
                </div>
            )}
        </div>
            </div>
            <div className='main-temp-rightside'>
                <div >
                <input  className="main-temp-search-container" type="text" placeholder="Search..."></input>
                </div>

            <button className='main-temp-searchbutton'><img className='main-temp-search-icon'src='searchicon.png' alt='logo'></img></button>
            
            
            {/* <Link to={"/home"} className='singin-up' >Login/Register</Link> */}
{/* tatos */}
            <button className='main-temp-profilebutton' onClick = {() => setOpenProfile((prev) => !prev)}>
                <img className='main-temp-profile-icon'src='profileEnhanced.png' alt='logo'></img></button>
            

            <div className='main-temp-quote'>"The best way to find yourself is to lose yourself in the service of others."
            </div>

            
            </div>

           </div>
        
       <div className='main-temp-nd'>
        <ORCards />

        <div className='main-temp-words'>Connects Donors,Oganizations <br></br>&amp; much more in every country<br></br> around the world. </div>
       <div className='main-temp-no'><div className='landin'><img className='main-temp-foodicon'src='healthicon.png' alt='logo'></img><span className='main-temp-title' >Medical supplies</span></div></div>
       <div className='main-temp-y'> <img className='main-temp-foodicon'src='education.png' alt='logo'></img><span className='main-temp-title' >Educaion</span></div>
       <div className='main-temp-f'><img className='main-temp-foodicon'src='foodicon.png' alt='logo'></img><span className='main-temp-title' >Food</span> <span className='main-temp-saying' >Every plate shared is a gift of hope and nourishment. Your food donation can make a difference in someone's life. Give generously, 
       and let's share the blessings of good food together.</span></div>
       
       </div>
       </div>


    {/* tatos */}
       {
        openProfile && <DropDownProfile/> 
       
       }
    
       
    
    </>
)
}
export default MainTemp;

