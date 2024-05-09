import React from 'react';
import './OrganizationDetailCard.css';

export default function OrganizationDetailCard({ onClose, user }) {
    const handleCloseClick = (event) => {
        event.stopPropagation();
        onClose();
    };

    return (
        <div className="organization-detail-card">
            <div className='organization-detail-card-left'>
                <h2 className="organization-detail-card-type">{user.type}</h2>
                <h1 className="organization-detail-card-name">Organization Name: {user.name}</h1>
                <p className="organization-detail-card-info">Contact Number: {user.contactNumber}</p>
                <p className="organization-detail-card-info">Email: {user.email}</p>
                <p className="organization-detail-card-info">Username: {user.username}</p>
                <p className="organization-detail-card-info">Organization Type: {user.organizationType}</p>
                <p className="organization-detail-card-info">Organization Address: {user.organizationAddress}</p>
                <p className="organization-detail-card-info">Organization Area: {user.organizationArea}</p>
                <p className="organization-detail-card-info">Organization Governorate: {user.organizationGovernorate}</p>
            </div>
            <button className='organization-detail-card-close' onClick={handleCloseClick}>X</button>
        </div>
    )
};