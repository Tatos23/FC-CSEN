import './ViewRequests.css';
import React, { useState,useEffect, useRef } from 'react';
import { Link , useNavigate} from 'react-router-dom';
import DropDownProfile from '../DropDownProfile';
import userEvent from '@testing-library/user-event';
import DonationsList from './DonationsList';




function ViewRequests(){


    const [donations, setDonatation] = useState([
        {title: 'Clothes Donation', quantity: '5', age: '2 to 3 years', category: 'clothes', author: 'tatos', id: 1},
        {title: 'Food Donation', quantity: '2', age: 'null', category: 'food', author: 'mario', id: 2},
        {title: 'Toys Donation', quantity: '3', age: 'null', category: 'toys', author: 'luigi', id: 3}

    ])
    const navigate=useNavigate();

    const handleView = (id) => {
        // const tempDonations = donations.filter(donations => donations.id == id);
        // setDonatation(tempDonations);
        navigate('/donation-select');    
    }

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs);
    // }
    

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
    <div className='view-requests-main'>
        <div className='view-requests-navbar'>
            <div className='view-requests-leftside'>
                <img className='view-requests-logo-navbar'src='logo2.png' alt='logo'></img>
                <img className='view-requests-logo-navbar-name'src='name.png' alt='logo'></img>
                {/* <button className='view-requests-donate-button' >Donate</button> */}
            </div>
            <div className='view-requests-middleside'>
                <button className='view-requests-middleside-button'style={{ marginRight: '10%' }}>Home</button>   
                <button className='view-requests-middleside-button'style={{ marginRight: '1%' }}>Donations</button>
                <button className='view-requests-middleside-button'style={{ marginLeft: '10%' }}>About Us</button>
                <div className="view-requests-dropdown">
            <button onClick={toggleVisibility}>Categories</button>
            {isVisible && (
                <div className="view-requests-dropdown-content">
                    <button className='view-requests-action-button'>Action 1</button>
                    <button className='view-requests-action-button'>Action 2</button>
                    <button className='view-requests-action-button'>Action 3</button>
                </div>
            )}
        </div>
            </div>
            <div className='view-requests-rightside'>
                <div >
                <input  className="view-requests-search-container" type="text" placeholder="Search..."></input>
                </div>

            <button className='view-requests-searchbutton'><img className='view-requests-search-icon'src='searchicon.png' alt='logo'></img></button>
            
            
            {/* <Link to={"/home"} className='singin-up' >Login/Register</Link> */}
{/* tatos */}
            <button className='view-requests-profilebutton' onClick = {() => setOpenProfile((prev) => !prev)}><img className='view-requests-profile-icon'src='profileEnhanced.png' alt='logo'></img></button>

            
            {/* <div className='view-requests-quote'>"The best way to find yourself is to lose yourself in the service of others."
            </div> */}

            
            </div>
           </div>
           {/* //title="Donation Requests" */}
    <div className="donations-title">Donation Requests</div>
    <div className="donations-home">
      <DonationsList donations={donations} handleView={handleView}/>
      {/* <button onClick={() => setName('luigi')}>change name</button> */}
    </div>
           

       <div className='view-requests-nd'>
        <div className='view-requests-words'>Connects Donors,Oganizations <br></br>&amp; much more in every country<br></br> around the world. </div>
       <div className='view-requests-no'><div className='landin'><img className='view-requests-foodicon'src='healthicon.png' alt='logo'></img><span className='view-requests-title' >Medical supplies</span></div></div>
       <div className='view-requests-y'> <img className='view-requests-foodicon'src='education.png' alt='logo'></img><span className='view-requests-title' >Educaion</span></div>
       <div className='view-requests-f'><img className='view-requests-foodicon'src='foodicon.png' alt='logo'></img><span className='view-requests-title' >Food</span> <span className='view-requests-saying' >Every plate shared is a gift of hope and nourishment. Your food donation can make a difference in someone's life. Give generously, 
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
export default ViewRequests;

