import React, { useState } from 'react';
import './PasswordChange.css';

export default function PasswordChange({ onClose }) {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const handleCloseClick = (event) => {
        event.stopPropagation();
        onClose();
    };

    return (
        <div className="password-change">
            <h2 className="password-change-title">Change Password</h2>
            <input
                type="password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                className="password-change-input"
                placeholder="Old Password"
            />
            <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="password-change-input"
                placeholder="New Password"
            />
            <button onClick={handleCloseClick} className="password-change-button">Submit</button>
            <button onClick={handleCloseClick} className="password-change-close">X</button>
        </div>
    )
};