import { Link } from 'react-router-dom';
import './DropDownProfile.css';

const DropDownProfile = () => {

//TODO: functionality of the buttons
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