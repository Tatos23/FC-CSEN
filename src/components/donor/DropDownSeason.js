import { Link } from 'react-router-dom';
import './DropDownSeason.css';
import ViewRequests from './ViewRequests';
import DonationsList from './DonationsList';


const DropDownSeason = (resetStateSeason,resetStateWinter,resetStateSummer,resetStateSpring,resetStateFall) => {
    
    const handleButtonClickWinter = () => {
         resetStateWinter();
    }

    const handleButtonClickSpring = () => {    
        resetStateSpring();
    }

    const handleButtonClickSummer = () => {
        resetStateSummer();
    }

    const handleButtonClickFall = () => {
        resetStateFall();
    }

    const handleButtonClickAll = () => {
        resetStateSeason();
    }
    

    return (
        <div className='flex flex-col DropDownSeason'>
            <ul className='flex flex-col gap-4'>
                <button onClick={() => handleButtonClickAll('None')}>None</button>
                <button onClick={() => handleButtonClickClothes('Winter')}>Winter</button>
                <button onClick={() => handleButtonClickToys('Spring')}>Spring</button>
                <button onClick={() => handleButtonClickFood('Summer')}>Summer</button>
                <button onClick={() => handleButtonClickMSupplies('Fall')}>Fall</button>

            </ul>
        </div>
    );
}

export default DropDownSeason;