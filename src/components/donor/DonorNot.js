import React from 'react';
import Header from './Header';
import './DonorNot.css';
import { Navigate } from 'react-router-dom';
import EtaSection from './EtaSection';

const DonorNot = () => {
    const [notifications, setNotifications] = React.useState([
        {
            id: 1,
            title: 'Pickup Request accepted',
            description: `A driver is on the way to pick up your donation id 1.
            Please hand over the donation to the driver when he/she arrives`,
            TimeToMeet: '2024-05-31T23:59:59.999Z',
        },
        {
            id: 2,
            title: 'Driver Arrived!',
            description: `The driver has arriced to pick up your dontion id 2 at the specified location.
            Please hand over the donation to the driver. `,
            TimeToMeet: '2024-05-31T23:59:59.999Z',
        },
    ]);

    const handleView = () => {
        console.log("View is clicked");
    }

    const handleDelete = (id) => {
        const newNotifications = notifications.filter(notification => notification.id !== id);
        setNotifications(newNotifications);
    }

    
    return (
        <div className="DonorNot">
            <Header loggedIn={true} role="Donor"/>
            <h2 className='DonorNot-title'>Notifications</h2>
            <div className='DonorNot-notifications'>
            {notifications.map(notification => (
                <div className="donation-preview" key={notification.id} >
                    <h2 className='DonorNot-notifications-title'>{ notification.title }</h2>
                    <div className="DonorNot-notifications-details">
                    <br/>
                    <p>
                    {notification.description}
                    </p>
                    <br/>
                    </div>
                    <div className="DonorNot-notifications-buttons">
                        
                        <button className="DonorNot-notifications-delete-button" onClick={() => handleDelete(notification.id)}>Delete</button>
                    </div>
                  {notification.id === 1 &&
                  <EtaSection timeToMeet={notification.TimeToMeet}></EtaSection>}  
                </div>
                ))}
            {notifications.length === 0 && <h2 className='DonorNot-notifications-title'>No Notifications</h2>}
            </div>
            
        </div>
    );
};

export default DonorNot;