import loginStyles from "./Login.css";
import React, { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';

function Login(props) {
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="Login" style={loginStyles}>
            <div className="left-side">
                <div className="welcome-text">
                    <h1>Welcome</h1>
                    <p>Thank you for visiting our website. Please login/register</p>
                </div>
                <div className="welcome">
                    <img src="welcome.svg" alt="My SVG" />
                </div>
                {/* <h1 className="about-section">
                    About Herzenbrüke:
                </h1>
                <h2 className="about-details">
                    A non monetary organization that 
                </h2> */}
            </div>
            <div className="right-side-outer">
                <div className="right-side-inner">
                    <div className="login-header">
                        <img src="logo-test-2.png" alt="logo"></img>
                        <p>HERZENBRÜKE</p>
                    </div>
                    <div className="right-side-actions">
                        <div className="login-inputs">

                            <h1 className="login-title"> {props.role} Log in </h1>
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
                                    {showPassword ? <FiEyeOff /> : <FiEye />}
                                </i>
                            </div>
                        </div>
                        <div className="login-buttons">
                            <button className="login-button"> Login </button>
                            {props.role !== "Admin" && <p className="register-redirect"> Don't have an account? <a>Create an account</a> to join our helpful community.</p>}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login;