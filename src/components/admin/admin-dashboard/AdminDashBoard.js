import './AdminDashBoard.css';
import { useLocation, Link, Outlet } from 'react-router-dom';
import { useState } from 'react';

function AdminDashBoard() {
    const [isVisible, setIsVisible] = useState(false);
    const [openProfile, setOpenProfile] = useState(false);

    const location = useLocation();

    const toggleVisibility = () => {
        console.log(isVisible);
        setIsVisible(!isVisible);
    };

    return (
        <div className='admin-dashboard-main'>
            <header className='admin-dashboard-navbar'>
                <div className='admin-dashboard-leftside'>
                    <img className='admin-dashboard-logo-navbar' src='/logo2.png' alt='logo'></img>
                    <img className='admin-dashboard-logo-navbar-name' src='/name.png' alt='logo'></img>
                </div>
                <div className='admin-dashboard-middleside'>
                    <Link to="/admin-dashboard">
                        <button className={location.pathname === "/admin-dashboard" ? 'admin-dashboard-middleside-selected-button' : 'admin-dashboard-middleside-button'} style={{ marginRight: '2vw' }}>Home</button>
                    </Link>
                    <Link to="/admin-dashboard/system-users">
                        <button className={location.pathname === "/admin-dashboard/system-users" ? 'admin-dashboard-middleside-selected-button' : 'admin-dashboard-middleside-button'} style={{ marginRight: '2vw' }}>System Users</button>
                    </Link>
                    <Link to="/admin-dashboard/user-submissions">
                        <button className={location.pathname === "/admin-dashboard/user-submissions" ? 'admin-dashboard-middleside-selected-button' : 'admin-dashboard-middleside-button'} style={{ marginRight: '2vw' }}>User Submissions</button>
                    </Link>
                    <Link to="/admin-dashboard/requests">
                        <button className={location.pathname === "/admin-dashboard/requests" ? 'admin-dashboard-middleside-selected-button' : 'admin-dashboard-middleside-button'} style={{ marginRight: '2vw' }}>Requests</button>
                    </Link>
                </div>
                <div className='admin-dashboard-rightside'>
                    <button className='admin-dashboard-profilebutton' onClick={() => setOpenProfile((prev) => !prev)}><img className='home-profile-icon' src='/profileEnhanced.png' alt='logo'></img></button>
                </div>

            </header>

            <main>
                <Outlet />
            </main>

        </div>
    )
}
export default AdminDashBoard;

