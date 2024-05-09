import React from 'react';
import registerStyles from "./RegisterCard.css";
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function RegisterCard({ toggleForm, showPassword, toggleShowPassword, handleGenderChange, gender, donorRole, handleDonorRole, role }) {
    return (
        <div className="right-side-inner" style={registerStyles}>
            <div className="register-header">
                <img src="logo2.png" alt="logo"></img>
                <p>HERZENSBRÜKE</p>
            </div>
            <div className="right-side-actions">
                <div className='register-inputs'>
                    <h1 className="register-title"> {role} Registration </h1>
                    <input type="text" placeholder="First Name" className="firstname-input" required></input>
                    <input type="text" placeholder="Last Name" className="lastname-input" required></input>
                    <div className="gender-input">
                        <label htmlFor="male" style={{color: '#2C6B5A'}}>
                            <input type="checkbox" id="male" name="gender" value="male" checked={gender === 'male'} onChange={handleGenderChange}/>
                            Male
                        </label>
                        <label htmlFor="female" style={{color: '#2C6B5A'}}>
                            <input type="checkbox" id="female" name="gender" value="female" checked={gender === 'female'} onChange={handleGenderChange} />
                            Female
                        </label>
                    </div>
                    {role === 'Donor' && <input type="text" placeholder="Address link from google maps" className="address-input" required></input>}
                    <input type="text" placeholder="Contact Number" className="contactnumber-input" required></input>
                    <input type="text" placeholder="Email" className="email-input" required></input>
                    <input type="text" placeholder="Username" className="username-input" required></input>
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
                    {role === 'Donor' &&
                    (
                        <div className="donorRole-input">
                            <label htmlFor="Regular" style={{color: '#2C6B5A'}}>
                                <input type="checkbox" id="Regular" name="donorRole" value="Regular" checked={donorRole === "Regular"} onChange={handleDonorRole} />
                                Regular
                            </label>
                            <label htmlFor="Teacher" style={{color: '#2C6B5A'}}>
                                <input type="checkbox" id="Teacher" name="donorRole" value="Teacher" checked={donorRole === "Teacher"} onChange={handleDonorRole} />
                                Teacher
                            </label>
                            <label htmlFor="Doctor" style={{color: '#2C6B5A'}}>
                                <input type="checkbox" id="Doctor" name="donorRole" value="Doctor" checked={donorRole === "Doctor"} onChange={handleDonorRole} />
                                Doctor
                            </label>
                        </div>
                    )
                    }
                    <br />
                    {role === 'Representative' &&
                        <>
                            <h1 className="register-title"> Organization Registration </h1>
                            <input type="text" placeholder="Organization Name" className="organizationName-input" required></input>
                            <input type="text" placeholder="Organization Type" className="organizationType-input" required></input>
                            <input type="text" placeholder="Organization Address" className="organizationAddress-input" required></input>
                            <input type="text" placeholder="Organization Area" className="organizationArea-input" required></input>
                            <input type="text" placeholder="Organization Governorate" className="organizationGovernorate-input" required></input>
                            <br/><br/>
                        </>
                    }


                </div>
                <div className="register-buttons">
                    <Link to={`/${role}-document-upload`} className='register-button' >Register</Link>
                    <br /><br />
                    <label className="RegisterCard-verification">You will be redirected to upload verification documents</label>
                    <p className="login-redirect">
                        Already have an account? &nbsp;
                        <a onClick={toggleForm} style={{ cursor: 'pointer' }}>Login</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default RegisterCard;