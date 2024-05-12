import './Home.css';
import React, { useState,useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import DropDownProfile from '../DropDownProfile';
import userEvent from '@testing-library/user-event';
import { useNavigate } from 'react-router-dom';

function Home(){


    const [isVisible, setIsVisible] = useState(false);
    


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
    const navigate = useNavigate();
    const handleButtonClickNotifications1 = () => {
        navigate('/notifications');
    }


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
                <button className='view-requests-middleside-button' onClick={() => handleButtonClickNotifications1('Notifications')}style={{ marginLeft: '10%' } }>Notifications</button>
 

            </div>
            <div className='home-rightside'>

            <button className='home-searchbutton'><img className='home-search-icon'src='searchicon.png' alt='logo'></img></button>
            
            
            {/* <Link to={"/home"} className='singin-up' >Login/Register</Link> */}
{/* tatos */}
            <button className='home-profilebutton' onClick = {() => setOpenProfile((prev) => !prev)}><img className='home-profile-icon'src='profileEnhanced.png' alt='logo'></img></button>
            

            <div className='home-quote'>"The best way to find yourself is to lose yourself in the service of others."
            </div>

            
            </div>

           </div>
        
        <footer className='landing-nd'>
        <div className='landing-words'>Connects Donors,Oganizations <br></br>&amp; much more in every country<br></br> around the world. </div>

       <div className='landing-no'><div className='landing-icon-title'><img className='landing-foodicon'src='healthicon.png' alt='logo'></img><span className='landing-title' >Medical supplies</span></div>
       <div className='landing-saying'>Access to medical supplies is a basic human right. Your donation can bridge the gap between illness and recovery
       . Join us in providing essential care to those in need.</div></div>
       <div className='landing-no'><div className='landing-icon-title'><img className='landing-foodicon'src='foodicon.png' alt='logo'></img><span className='landing-title' >Food&amp;Nutrition</span></div>
       <div className='landing-saying'>Every plate shared is a gift of hope and nourishment. Your food donation can make a difference in someone's life. Give generously, and let's share the blessings of good food together.</div></div>
       <div className='landing-no'><div className='landing-icon-title'><img className='landing-foodicon'src='education.png' alt='logo'></img><span className='landing-title'style={{ marginRight: '12%' }} >Education</span></div>
       <div className='landing-saying'>Empowering minds through education. Support a child's future with your donation today.</div></div>
       </footer>
       </div>

    {/* tatos */}
       {
        openProfile && <DropDownProfile role="Donor"/> 
       
       }
    
       
    
    </>
)
}
export default Home;

