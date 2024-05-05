import { Link } from 'react-router-dom';
import './DropDownProfile.css';
import { useNavigate } from 'react-router-dom';

const DropDownProfile = () => {

    const navigate = useNavigate();



    //TODO: functionality of the buttons

    const handleButtonClickProfile = () => {
        navigate('/profile');       //TODO: navigate to the correct pages
    }

    const handleButtonClickSettings = () => {
        navigate('/settings');      //TODO: navigate to the correct pages
    }

    const handleButtonClickLogout = () => {
        navigate('/home');     
    }

    return (
        <div className='flex flex-col DropDownProfile'>
            <ul className='flex flex-col gap-4'>
                <button onClick={() => handleButtonClickProfile('Profile')}>Profile</button>
                <button onClick={() => handleButtonClickSettings('Settings')}>Settings</button>
                <button onClick={() => handleButtonClickLogout('Logout')}>Logout</button>
            </ul>
        </div>
    );
}

export default DropDownProfile;