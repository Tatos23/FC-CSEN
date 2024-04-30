import React from 'react';
import loginStyles from "./LoginCard.css";
import { FiEye, FiEyeOff } from 'react-icons/fi';

function LoginCard({ isRegistering, toggleForm, showPassword, toggleShowPassword, role }) {
    return (
        <div className="right-side-inner" style={loginStyles}>
            <div className="login-header">
                <img src="logo2.png" alt="logo"></img>
                <p>HERZENSBRÜKE</p>
            </div>
            <div className="right-side-actions">
                <div className="login-inputs">
                    <h1 className="login-title"> {role} Log in </h1>
                    <input type="text" placeholder="Username" class="username-input" required></input>
                    <br />
                    <div className="password-wrapper">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            className="password-input"
                            required
                        />
                        <i onClick={toggleShowPassword} className="toggle-password">
                            {showPassword ? <FiEye /> : <FiEyeOff />}
                        </i>
                    </div>
                </div>
                <div className="login-buttons">
                    <button className="login-button"> Login </button>
                    { role != "Admin" && <p className="register-redirect">
                        Don't have an account? &nbsp;
                        <a onClick={toggleForm} style={{ cursor: 'pointer' }}>Register</a>
                    </p>
                    }
                </div>
            </div>
        </div>
    )
}

export default LoginCard;