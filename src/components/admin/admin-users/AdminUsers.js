import './AdminUsers.css'
import UserCard from '../components/user_card/UserCard';


function AdminUsers() {
    return (
        <div className='admin-users'>
            <UserCard type='Donor' name='abdullah' />
        </div>
    );
}

export default AdminUsers;