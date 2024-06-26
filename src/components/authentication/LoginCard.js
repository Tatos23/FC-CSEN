import React, { useState } from 'react';
import loginStyles from "./LoginCard.css";
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

function LoginCard({ isRegistering, toggleForm, showPassword, toggleShowPassword, role }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginSuccessful, setLoginSuccessful] = useState(true);
    const navigate = useNavigate();

    const users = [
        { username: 'abdullah', password: 'test', role: 'Admin'},
        { username: 'ahmed', password: 'test1', role: 'Donor' },
        { username: 'adham', password: 'test2', role: 'Organization Representative'},
        {username: 'tatos', password: '0000', role: 'Organization Representative'},
        {username: 'tatos', password: '0000', role: 'Donor'},
        {username: 'tatos', password: '0000', role: 'Admin'}
        // add more users as needed
    ];

    const checkCredentials = () => {
        for (let user of users) {
            if (user.username === username && user.password === password && user.role === role) {
                setLoginSuccessful(true);
                if (role === 'Admin') {
                    navigate('/admin-dashboard');
                    return;
                }
                else if (role === 'Donor') {
                    navigate('/home-donor');
                    return;
                } 
                else if (role === 'Organization Representative') {
                    navigate('/org-home');
                    return;
                }
            }
        }
        setLoginSuccessful(false);
    };

    return (
        <div className="right-side-inner" style={loginStyles}>
            <div className="login-header">
                <img src="logo2.png" alt="logo"></img>
                <p>HERZENSBRÜKE</p>
            </div>
            <div className="right-side-actions">
                <div className="login-inputs">
                    <h1 className="login-title"> {role} Log in </h1>
                    <input
                        type="text"
                        placeholder="Username"
                        className="username-input"
                        required
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                    <br />
                    <div className="password-wrapper">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            className="password-input"
                            required
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <i onClick={toggleShowPassword} className="toggle-password">
                            {showPassword ? <FiEye /> : <FiEyeOff />}
                        </i>
                    </div>
                </div>
                <div className="login-error">
                    {loginSuccessful === false && <p className='LoginCard-error-msg'>Invalid username or password</p>}
                </div>
                <div className="login-buttons">
                    <button className="login-button" onClick={checkCredentials}> Login </button>
                    {role != "Admin" && <p className="register-redirect">
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