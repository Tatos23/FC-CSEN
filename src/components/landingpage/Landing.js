import './landing.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Landing(){


    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        console.log(isVisible);
        setIsVisible(!isVisible);
    };
return(
    <>
   
        
    <div className='landing-main'>
        <div className='landing-navbar'>
            <div className='landing-leftside'>
                <img className='landing-logo-navbar'src='logo2.png' alt='logo'></img>
                <img className='landing-logo-navbar-name'src='name.png' alt='logo'></img>
                <button className='landing-donate-button' >Donate</button>
            </div>
            <div className='landing-middleside'>
                <button className='landing-middleside-button'style={{ marginRight: '10%' }}>Home</button>   
                <button className='landing-middleside-button'style={{ marginRight: '1%' }}>Donations</button>
                <button className='landing-middleside-button'style={{ marginLeft: '10%' }}>About Us</button>
                <div className="landing-dropdown">
            <button onClick={toggleVisibility}>Categories</button>
            {isVisible && (
                <div className="landing-dropdown-content">
                    <button className='landing-action-button'>Action 1</button>
                    <button className='landing-action-button'>Action 2</button>
                    <button className='landing-action-button'>Action 3</button>
                </div>
            )}
        </div>
            </div>
            <div className='landing-rightside'>
                <div >
                <input  className="landing-search-container" type="text" placeholder="Search..."></input>
                </div>

            <button className='landing-searchbutton'><img className='landing-search-icon'src='searchicon.png' alt='logo'></img></button>
            

<Link to={"/home"} className='landing-singin-up' >Login/Register</Link>

            <div className='landing-quote'>"The best way to find yourself is to lose yourself in the service of others."
            </div>

            
            </div>

           </div>
        
       <div className='landing-nd'>
        <div className='landing-words'>Connects Donors,Oganizations <br></br>&amp; much more in every country<br></br> around the world. </div>
       <div className='landing-no'><div className='landing-icon-title'><img className='landing-foodicon'src='healthicon.png' alt='logo'></img><span className='landing-title' >Medical supplies</span></div>
       <div className='landing-saying'>Access to medical supplies is a basic human right. Your donation can bridge the gap between illness and recovery
       . Join us in providing essential care to those in need.</div></div>
       <div className='landing-no'><div className='landing-icon-title'><img className='landing-foodicon'src='foodicon.png' alt='logo'></img><span className='landing-title' >Food&amp;Nutrition</span></div>
       <div className='landing-saying'>Every plate shared is a gift of hope and nourishment. Your food donation can make a difference in someone's life. Give generously, and let's share the blessings of good food together.</div></div>
       <div className='landing-no'><div className='landing-icon-title'><img className='landing-foodicon'src='education.png' alt='logo'></img><span className='landing-title'style={{ marginRight: '12%' }} >Education</span></div>
       <div className='landing-saying'>Empowering minds through education. Support a child's future with your donation today.</div></div>
       
       </div>
       </div>

       
      
    
    
    
    
    
    
    
    
    
    </>
)
}
export default Landing;

