import './UserCard.css';
import { FaTrash } from 'react-icons/fa';

const defaultOnClick = () => { };

export default function UserCard({ usersData, setUsersData, type, name, organizationType, onClick = defaultOnClick }) {
    const isClickable = onClick !== defaultOnClick;

    const handleDeleteClick = (event) => {
        event.stopPropagation();
        const updatedUsersData = type === 'Donor' ? usersData.filter(user => user.username !== name) : usersData.filter(user => user.name !== name);
        setUsersData(updatedUsersData);
    };

    return (
        <button className={`user-card ${isClickable ? '' : 'user-card-no-click'}`} onClick={onClick}>
            <div className='user-card-left'>
                <h2 className="user-card-type">{type}</h2>
                <h1 className="user-card-name">{type == 'Donor' ? 'Username: ' : 'Organization name: '}{name}</h1>
                {type == 'Organization' ? <h2 className="user-card-name">Organization Type: {organizationType}</h2> : null}
            </div>
            <div className='user-card-right'>
                <button onClick={handleDeleteClick}><FaTrash size={50} fill='#397e07' /></button>
            </div>
        </button>
    )
};