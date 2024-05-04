import './Home.css';
import React, { useState,useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import DropDownProfile from '../DropDownProfile';
import userEvent from '@testing-library/user-event';

function Home(){


    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        console.log(isVisible);
        setIsVisible(!isVisible);
    };

//tatos
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
    <div className='home-main'>
        <div className='home-navbar'>
            <div className='home-leftside'>
                <img className='home-logo-navbar'src='logo2.png' alt='logo'></img>
                <img className='home-logo-navbar-name'src='name.png' alt='logo'></img>
                <button className='home-donate-button' >Donate</button>
            </div>
            <div className='home-middleside'>
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
            <button className='home-profilebutton' onClick = {() => setOpenProfile((prev) => !prev)}><img className='home-profile-icon'src='profileEnhanced.png' alt='logo'></img></button>
            

            <div className='home-quote'>"The best way to find yourself is to lose yourself in the service of others."
            </div>

            
            </div>

           </div>
        
       <footer className='home-nd'>
        <div className='home-words'>Connects Donors,Oganizations <br></br>&amp; much more in every country<br></br> around the world. </div>
       <div className='home-no'><div className='landin'><img className='home-foodicon'src='healthicon.png' alt='logo'></img><span className='home-title' >Medical supplies</span></div></div>
       <div className='home-y'> <img className='home-foodicon'src='education.png' alt='logo'></img><span className='home-title' >Educaion</span></div>
       <div className='home-f'><img className='home-foodicon'src='foodicon.png' alt='logo'></img><span className='home-title' >Food</span> <span className='home-saying' >Every plate shared is a gift of hope and nourishment. Your food donation can make a difference in someone's life. Give generously, 
       and let's share the blessings of good food together.</span></div>
       
       </footer>
       </div>

    {/* tatos */}
       {
        openProfile && <DropDownProfile/> 
       
       }
    
       
    
    </>
)
}
export default Home;

