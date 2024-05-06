import './AdminHomePage.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DropDownProfile from '../../DropDownProfile';

function AdminHomePage() {

    const [isVisible, setIsVisible] = useState(false);
    const [openProfile, setOpenProfile] = useState(false);

    const toggleVisibility = () => {
        console.log(isVisible);
        setIsVisible(!isVisible);
    };

    return (
        <div className='admin-home-main'>
            <div className='admin-home-navbar'>
                <div className='admin-home-leftside'>
                    <img className='admin-home-logo-navbar' src='logo2.png' alt='logo'></img>
                    <img className='admin-home-logo-navbar-name' src='name.png' alt='logo'></img>
                </div>
                <div className='admin-home-middleside'>
                    <button className='admin-home-middleside--selected-button' style={{ marginRight: '4%', color: '#397d08' }}>Home</button>
                    <button className='admin-home-middleside-button' style={{ marginRight: '4%' }}>System Users</button>
                    <button className='admin-home-middleside-button' style={{ marginRight: '4%' }}>User Submissions</button>
                    <button className='admin-home-middleside-button' style={{ marginRight: '4%' }}>Requests</button>
                </div>
                <div className='admin-home-rightside'>
                    <button className='admin-home-profilebutton' onClick={() => setOpenProfile((prev) => !prev)}><img className='home-profile-icon' src='profileEnhanced.png' alt='logo'></img></button>
                </div>

            </div>
            <div className='admin-home-middle-body'>
                <div className='admin-home-quote'>"The best way to find yourself is to lose yourself in the service of others."
                </div>
            </div>
            <footer className='admin-home-nd'>
                <div className='admin-home-words'>Connects Donors,Oganizations <br></br>&amp; much more in every country<br></br> around the world. </div>

                <div className='admin-home-no'><div className='admin-home-icon-title'><img className='admin-home-foodicon' src='healthicon.png' alt='logo'></img><span className='admin-home-title' >Medical supplies</span></div>
                    <div className='admin-home-saying'>Access to medical supplies is a basic human right. Your donation can bridge the gap between illness and recovery
                        . Join us in providing essential care to those in need.</div></div>
                <div className='admin-home-no'><div className='admin-home-icon-title'><img className='admin-home-foodicon' src='foodicon.png' alt='logo'></img><span className='admin-home-title' >Food&amp;Nutrition</span></div>
                    <div className='admin-home-saying'>Every plate shared is a gift of hope and nourishment. Your food donation can make a difference in someone's life. Give generously, and let's share the blessings of good food together.</div></div>
                <div className='admin-home-no'><div className='admin-home-icon-title'><img className='admin-home-foodicon' src='education.png' alt='logo'></img><span className='admin-home-title' style={{ marginRight: '12%' }} >Education</span></div>
                    <div className='admin-home-saying'>Empowering minds through education. Support a child's future with your donation today.</div></div>
            </footer>

        </div>
    )
}
export default AdminHomePage;

