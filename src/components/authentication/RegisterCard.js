import React from 'react';
import registerStyles from "./RegisterCard.css";
// import { FiEye, FiEyeOff } from 'react-icons/fi';

function LoginCard({ isRegistering, toggleForm, showPassword, toggleShowPassword, role }) {
    return (
        <div className="right-side-inner" style={registerStyles}>
            <div className="register-header">
                <img src="logo2.png" alt="logo"></img>
                <p>HERZENBRÜKE</p>
            </div>
            <div className="right-side-actions">
                <div className="register-buttons">
                    <button className="register-button"> Register </button>
                    <p className="register-redirect">
                        Already have an account? &nbsp;
                        <a onClick={toggleForm} style={{ cursor: 'pointer' }}>Login</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default LoginCard;