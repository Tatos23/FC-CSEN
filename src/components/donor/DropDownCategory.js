import { Link } from 'react-router-dom';
import './DropDownCategory.css';
import { useNavigate } from 'react-router-dom';
import ViewRequests from './ViewRequests';
import DonationsList from './DonationsList';


const DropDownCategory = ({resetState,resetStateClothes,resetStateToys,resetStateFood,resetStateMedical,resetStateSchool,resetStateBlood}) => {

    const navigate = useNavigate();

    
    
   
    const handleButtonClickClothes = () => {
        resetStateClothes();
    }

    const handleButtonClickToys = () => {    
        resetStateToys();
    }

    const handleButtonClickFood = () => {
        resetStateFood();
    }

    const handleButtonClickMSupplies = () => {
        resetStateMedical();
    }

    const handleButtonClickSSupplies = () => {
        resetStateSchool();
    }

    const handleButtonClickBDonations = () => {
        resetStateBlood();
    }
    const handleButtonClickAll = () => {
        resetState();
    }
    

    return (
        <div className='flex flex-col DropDownCategory'>
            <ul className='flex flex-col gap-4'>
                <button onClick={() => handleButtonClickClothes('Clothes')}>Clothes</button>
                <button onClick={() => handleButtonClickToys('Toys')}>Toys</button>
                <button onClick={() => handleButtonClickFood('Food')}>Food</button>
                <button onClick={() => handleButtonClickMSupplies('Medical Supplies')}>Medical Supplies</button>
                <button onClick={() => handleButtonClickSSupplies('School Supplies')}>School Supplies</button>
                <button onClick={() => handleButtonClickBDonations('Blood Donations')}>Blood Donations</button>
                <button onClick={() => handleButtonClickAll('Blood Donations')}>All</button>

            </ul>
        </div>
    );
}

export default DropDownCategory;