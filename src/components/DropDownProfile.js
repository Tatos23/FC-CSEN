import { Link } from 'react-router-dom';
import './DropDownProfile.css';

const DropDownProfile = () => {
    return ( 
        <div className = 'flex flex-col DropDownProfile'>
            <ul className = 'flex flex-col gap-4'>
                <button onClick={() => handleButtonClick('Profile')}>Profile</button>
                <button onClick={() => handleButtonClick('Settings')}>Settings</button>

                {/* <Link to={"/home"}>  */}
                <button onClick={() => handleButtonClick('Logout')}>Logout</button>
                {/* </Link> */}
            </ul>
        </div>
     );
}
 
export default DropDownProfile;