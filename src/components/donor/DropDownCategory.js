import { Link } from 'react-router-dom';
import './DropDownCategory.css';
import { useNavigate } from 'react-router-dom';

const DropDownCategory = () => {

    const navigate = useNavigate();


   
    const handleButtonClickClothes = () => {
        console.log('sdf');
    }

    const handleButtonClickToys = () => {
        console.log('sdf');      
    }

    const handleButtonClickFood = () => {
        console.log('sdf');
    }

    const handleButtonClickMSupplies = () => {
        console.log('sdf');
    }

    const handleButtonClickSSupplies = () => {
        console.log('sdf');      
    }

    const handleButtonClickBDonations = () => {
        console.log('sdf');
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

            </ul>
        </div>
    );
}

export default DropDownCategory;