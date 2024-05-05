import { CSSTransition, SwitchTransition } from 'react-transition-group';
import authenticationStyles from "./Authentication.css";
import React, { useState } from 'react';
import LoginCard from './LoginCard';
import RegisterCard from './RegisterCard';

function Authentication(props) {
    const [showPassword, setShowPassword] = useState(false);
    const [isRegistering, setIsRegistering] = useState(false);
    const [gender, setGender] = useState(false);
    const [donorRole, setDonorRole] = useState("");

    const toggleForm = () => {
        setIsRegistering(!isRegistering);
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleGenderChange = (e) => {
        setGender(e.target.value);
    };

    const handleDonorRole = (e) => {
        setDonorRole(e.target.value);
    };

    return (
        <div className="Authentication" style={authenticationStyles}>
            <div className={`background ${isRegistering ? 'registering' : ''}`}>
                {isRegistering ? (
                    <div>
                        <div className="welcome-text">
                            <h1>Registration</h1>
                            <p>Please fill out your information.</p>
                        </div>
                        <div className="welcome">
                            <img src="signup.svg" alt="My SVG" />
                        </div>
                    </div>
                ) : (
                    <div>
                        <div className="welcome-text">
                            <h1>Welcome</h1>
                            <p>Thank you for visiting our website. Please login.</p>
                        </div>
                        <div className="welcome">
                            <img src="login.svg" alt="My SVG" />
                        </div>
                    </div>
                )}

            </div>
            <div className={`right-side-outer ${isRegistering ? 'registering' : ''}`}>
                {isRegistering ? (
                    <RegisterCard isRegistering={isRegistering} toggleForm={toggleForm} showPassword={showPassword} toggleShowPassword={toggleShowPassword} role={props.role} donorRole={donorRole} gender = {gender} handleGenderChange = {handleGenderChange} handleDonorRole = {handleDonorRole}/>
                ) : (
                    <LoginCard isRegistering={isRegistering} toggleForm={toggleForm} showPassword={showPassword} toggleShowPassword={toggleShowPassword} role={props.role} />
                )}
            </div>
        </div>
    )
}

export default Authentication;