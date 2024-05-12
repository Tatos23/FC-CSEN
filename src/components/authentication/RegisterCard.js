import { React, useState } from 'react';
import registerStyles from "./RegisterCard.css";
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';


function RegisterCard({ toggleForm, showPassword, toggleShowPassword, donorRole, handleDonorRole, role }) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [organizationName, setOrganizationName] = useState('');
    const [organizationType, setOrganizationType] = useState('');
    const [organizationAddress, setOrganizationAddress] = useState('');
    const [organizationArea, setOrganizationArea] = useState('');
    const [organizationGovernorate, setOrganizationGovernorate] = useState('');
    const [organizationMarker, setOrganizationMarker] = useState('');
    const [gender, setGender] = useState('');
    const navigate = useNavigate();


    const validateForm = () => {
        if (!firstName || !lastName || !contactNumber || !email || !username || !password || !gender) {
            return false;
        }

        if (role === 'Donor' && !address) {
            return false;
        }

        if (role === 'Organization Representative' && (!organizationName || !organizationType || !organizationAddress || !organizationArea || !organizationGovernorate || !organizationMarker)) {
            return false;
        }

        return true;
    };

    const handleRegisterClick = () => {
        if (!validateForm()) {
            alert('Please fill out all required fields.');
            return;
        }

        if (donorRole !== 'Regular') {
            navigate(`/${role}-document-upload`);
        } else {
            toggleForm();
        }
    };
    const handleGenderChange = (event) => {
        const newValue = event.target.value;
        const isChecked = event.target.checked;

        // If the checkbox was already checked, uncheck it; otherwise, set the new value
        setGender((prevGender) => (prevGender === newValue ? '' : newValue));

        // Assign the value to the 'gender' variable
        const gender = isChecked ? newValue : '';

        console.log(gender);
    };
    return (
        <div className="right-side-inner" style={registerStyles}>
            <div className="register-header">
                <img src="logo2.png" alt="logo"></img>
                <p>HERZENSBRÜKE</p>
            </div>
            <div className="right-side-actions">
                <div className='register-inputs'>
                    <h1 className="register-title"> {role} Registration </h1>
                    <input type="text" placeholder="First Name" className="firstname-input" value={firstName} onChange={e => setFirstName(e.target.value)} required />
                    <input type="text" placeholder="Last Name" className="lastname-input" value={lastName} onChange={e => setLastName(e.target.value)} required />
                    <div className="gender-input">
                        <label htmlFor="male" style={{ color: '#2C6B5A' }}>
                            <input type="checkbox" id="male" name="gender" value="male" checked={gender === 'male'} onChange={handleGenderChange} />
                            Male
                        </label>
                        <label htmlFor="female" style={{ color: '#2C6B5A' }}>
                            <input type="checkbox" id="female" name="gender" value="female" checked={gender === 'female'} onChange={handleGenderChange} />
                            Female
                        </label>
                    </div>
                    {role === 'Donor' && <input type="text" placeholder="Address link from google maps" className="address-input" value={address} onChange={e => setAddress(e.target.value)} required />}
                    <input type="text" placeholder="Contact Number" className="contactnumber-input" value={contactNumber} onChange={e => setContactNumber(e.target.value)} required />
                    <input type="text" placeholder="Email" className="email-input" value={email} onChange={e => setEmail(e.target.value)} required />
                    <input type="text" placeholder="Username" className="username-input" value={username} onChange={e => setUsername(e.target.value)} required />
                    <br />
                    <div className="password-wrapper">
                        <input type="password" placeholder="Password" className="password-input" value={password} onChange={e => setPassword(e.target.value)} required />
                        <i onClick={toggleShowPassword} className="toggle-password">
                            {showPassword ? <FiEye /> : <FiEyeOff />}
                        </i>
                    </div>
                    {role === 'Donor' &&
                        (
                            <div className="donorRole-input">
                                <label htmlFor="Regular" style={{ color: '#2C6B5A' }}>
                                    <input type="checkbox" id="Regular" name="donorRole" value="Regular" checked={donorRole === "Regular"} onChange={handleDonorRole} />
                                    Regular
                                </label>
                                <label htmlFor="Teacher" style={{ color: '#2C6B5A' }}>
                                    <input type="checkbox" id="Teacher" name="donorRole" value="Teacher" checked={donorRole === "Teacher"} onChange={handleDonorRole} />
                                    Teacher
                                </label>
                                <label htmlFor="Doctor" style={{ color: '#2C6B5A' }}>
                                    <input type="checkbox" id="Doctor" name="donorRole" value="Doctor" checked={donorRole === "Doctor"} onChange={handleDonorRole} />
                                    Doctor
                                </label>
                            </div>
                        )
                    }
                    {role === 'Donor' && donorRole === 'Doctor' &&
                        <>
                            <input type="text" placeholder="Area" className="organizationName-input" value={organizationName} onChange={e => setOrganizationName(e.target.value)} required />
                            <input type="text" placeholder="Address" className="organizationType-input" value={organizationType} onChange={e => setOrganizationType(e.target.value)} required />
                            <input type="text" placeholder="Governorate" className="organizationAddress-input" value={organizationAddress} onChange={e => setOrganizationAddress(e.target.value)} required />
                            <input type="text" placeholder="Speciality" className="organizationArea-input" value={organizationArea} onChange={e => setOrganizationArea(e.target.value)} required />
                            <input type="text" placeholder="No.of cases" className="organizationGovernorate-input" value={organizationGovernorate} onChange={e => setOrganizationGovernorate(e.target.value)} required />
                            {address && <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27634.171656596554!2d31.42260937431642!3d30.029069099999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145823c7a34c174b%3A0xf517ebc75190ca14!2spyramids%20for%20real%20estate!5e0!3m2!1sen!2seg!4v1715530298712!5m2!1sen!2seg" style={{width:"400px",height:"300px",marginTop:"10px"}} allowfullscreen=""  referrerpolicy="no-referrer-when-downgrade"></iframe>}
                        </>
                    }
                    <br />
                    {role === 'Donor' && donorRole === 'Teacher' &&
                        <>
                            <input type="text" placeholder="Subjects" className="organizationName-input" value={organizationName} onChange={e => setOrganizationName(e.target.value)} required />
                            <input type="text" placeholder="No.of classes" className="organizationType-input" value={organizationType} onChange={e => setOrganizationType(e.target.value)} required />
                            <input type="text" placeholder="No.of students" className="organizationAddress-input" value={organizationAddress} onChange={e => setOrganizationAddress(e.target.value)} required />
                           </>
                    }
                    <br />
                    {role === 'Organization Representative' &&
                        <>
                            <h1 className="register-title"> Organization Registration </h1>
                            <input type="text" placeholder="Organization Name" className="organizationName-input" value={organizationName} onChange={e => setOrganizationName(e.target.value)} required />
                            <input type="text" placeholder="Organization Type" className="organizationType-input" value={organizationType} onChange={e => setOrganizationType(e.target.value)} required />
                            <input type="text" placeholder="Organization Address" className="organizationAddress-input" value={organizationAddress} onChange={e => setOrganizationAddress(e.target.value)} required />
                            <input type="text" placeholder="Organization Area" className="organizationArea-input" value={organizationArea} onChange={e => setOrganizationArea(e.target.value)} required />
                            <input type="text" placeholder="Organization Governorate" className="organizationGovernorate-input" value={organizationGovernorate} onChange={e => setOrganizationGovernorate(e.target.value)} required />
                            <input type='url' placeholder="Organization Marker" className="organizationMarker-input" value={organizationMarker} onChange={e => setOrganizationMarker(e.target.value)} required />

                            <br /><br />
                        </>
                    }


                </div>
                <div className="register-buttons">
                    <button className='register-button' onClick={handleRegisterClick}>Register</button>
                    {/* <Link to={`/${role}-document-upload`} className='register-button' >Register</Link> */}
                    <br /><br />
                    <label className="RegisterCard-verification">{donorRole !== "Regular" ? "You will be redirected to upload verification documents" : "You will be redirected to login page"}</label>
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