import './landing.css';
import React, { useState } from 'react';
function Landing(){


    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };
return(
    <>
        
    <div className='main'>
        <div className='navbar'>
            <div className='leftside'>
                <img className='logo-navbar'src='logo2.png' alt='logo'></img>
                <img className='logo-navbar-name'src='name.png' alt='logo'></img>
                <button className='donate-button' >Donate</button>
            </div>
            <div className='middleside'>
                <button className='middleside-button'style={{ marginRight: '10%' }}>Home</button>   
                <button className='middleside-button'style={{ marginRight: '1%' }}>Donations</button>
                <button className='middleside-button'style={{ marginLeft: '10%' }}>About Us</button>
                <div className="dropdown">
            <button onClick={toggleVisibility}>Categories</button>
            {isVisible && (
                <div className="dropdown-content">
                    <button className='action-button'>Action 1</button>
                    <button className='action-button'>Action 2</button>
                    <button className='action-button'>Action 3</button>
                </div>
            )}
        </div>
            </div>
            <div className='rightside'>
                <div >
                <input  class="search-container" type="text" placeholder="Search..."></input>
                </div>

            <button className='searchbutton'><img className='search-icon'src='searchicon.png' alt='logo'></img></button>
            <button className='singin-up' >Login/Register</button>
            <div className='quote'>"The best way to find yourself is to lose yourself in the service of others."
            </div>

            
            </div>

           </div>
        
       <div className='nd'>
        <div className='words'>Connects Donors,Oganizations <br></br>&amp; much more in every country<br></br> around the world. </div>
       <div className='no'><img className='foodicon'src='healthicon.png' alt='logo'></img><span className='title' >Medical supplies</span></div>
       <div className='y'> <img className='foodicon'src='education.png' alt='logo'></img><span className='title' >Educaion</span></div>
       <div className='f'><img className='foodicon'src='foodicon.png' alt='logo'></img><span className='title' >Food</span></div>
       
       </div>
       </div>

       
      
    
    
    
    
    
    
    
    
    
    </>
)
}
export default Landing;