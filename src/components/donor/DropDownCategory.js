import { Link } from 'react-router-dom';
import './DropDownCategory.css';
import { useNavigate } from 'react-router-dom';
import ViewRequests from './ViewRequests';
import DonationsList from './DonationsList';


const DropDownCategory = ({donations,setDonation,resetState}) => {

    const navigate = useNavigate();

    
    
   
    const handleButtonClickClothes = () => {
        const newDonations = donations.filter(donations => donations.category == 'clothes');
        setDonation(newDonations);
    }

    const handleButtonClickToys = () => {      
        const newDonations = donations.filter(donations => donations.category == 'toys');
        setDonation(newDonations);
    }

    const handleButtonClickFood = () => {
        const newDonations = donations.filter(donations => donations.category == 'food');
        setDonation(newDonations);
    }

    const handleButtonClickMSupplies = () => {
        const newDonations = donations.filter(donations => donations.category == 'medical supplies');
        setDonation(newDonations);
    }

    const handleButtonClickSSupplies = () => {
        const newDonations = donations.filter(donations => donations.category == 'school supplies');
        setDonation(newDonations);
    }

    const handleButtonClickBDonations = () => {
        const newDonations = donations.filter(donations => donations.category == 'blood donations');
        setDonation(newDonations);
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