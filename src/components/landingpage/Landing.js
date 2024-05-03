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
            
<Link to={"/home"} className='singin-up' >Login/Register</Link>
            <div className='landing-quote'>"The best way to find yourself is to lose yourself in the service of others."
            </div>

            
            </div>

           </div>
        
       <div className='landing-nd'>
        <div className='landing-words'>Connects Donors,Oganizations <br></br>&amp; much more in every country<br></br> around the world. </div>
       <div className='landing-no'><div className='landin'><img className='landing-foodicon'src='healthicon.png' alt='logo'></img><span className='landing-title' >Medical supplies</span></div></div>
       <div className='landing-y'> <img className='landing-foodicon'src='education.png' alt='logo'></img><span className='landing-title' >Educaion</span></div>
       <div className='landing-f'><img className='landing-foodicon'src='foodicon.png' alt='logo'></img><span className='landing-title' >Food</span> <span className='landing-saying' >Every plate shared is a gift of hope and nourishment. Your food donation can make a difference in someone's life. Give generously, 
       and let's share the blessings of good food together.</span></div>
       
       </div>
       </div>

       
      
    
    
    
    
    
    
    
    
    
    </>
)
}
export default Landing;

