import { Link } from 'react-router-dom';
import './DropDownProfile.css';
import React, { useRef } from 'react';
const DropDownProfile = () => {

    const refOne = useRef();

//TODO: functionality of the buttons
const handleButtonClickLogout = (e) => {
    if(!refOne.current.contains(e.target)){
        console.log("Clicked outside");
            //TODO
    }
    else{
        console.log("Clicked inside Div");
    }
}
const handleButtonClickProfile = (action) => {
    // Your implementation here
  };
  const handleButtonClickSettings = (action) => {
    // Your implementation here
  };
    return ( 
        <div className = 'flex flex-col DropDownProfile'>
            <ul className = 'flex flex-col gap-4'>
                <button onClick={() => handleButtonClickProfile('Profile')}>Profile</button>
                <button onClick={() => handleButtonClickSettings('Settings')}>Settings</button>
                <button onClick={() => handleButtonClickLogout('Logout')}>Logout</button>
            </ul>
        </div>
     );
}
 
export default DropDownProfile;