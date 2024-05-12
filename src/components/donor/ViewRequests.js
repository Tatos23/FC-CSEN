import './ViewRequests.css';
import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import DropDownProfile from '../DropDownProfile';
import userEvent from '@testing-library/user-event';
import DonationsList from './DonationsList';
import DropDownCategory from './DropDownCategory';
import { PiButterflyDuotone } from 'react-icons/pi';
import Donationselect from './Donationselect';



function ViewRequests() {

    /* [
        {title: 'Clothes Donation', quantity: '5', age: '2 to 3 years', category: 'clothes', author: 'tatos', id: 1},
        {title: 'Food Donation', quantity: '2', age: 'null', category: 'food', author: 'mario', id: 2},
        {title: 'Toys Donation', quantity: '3', age: 'null', category: 'toys', author: 'luigi', id: 3}

    ] */

    const [searchTerm, setSearchTerm] = useState('');

    const [donations, setDonation] = useState(null);

    const [selectedCategory, setSelectedCategory] = useState('Select Category ▼'); // Initialize with default text

    useEffect(() => {
        fetch('http://localhost:8000/donations')
            .then(res => {
                return res.json()
            })
            .then(data => {
                setDonation(data)
            })
    }, []);


    const navigate = useNavigate();

    const resetStateCategory = () => {
        fetch('http://localhost:8000/donations')
            .then(res => {
                return res.json()
            })
            .then(data => {
                setDonation(data)
            })
        setSelectedCategory("Select Category ▼")
    }
    //clothes category button
    const resetStateClothes = () => {
        fetch('http://localhost:8000/donations')
            .then(res => {
                return res.json()
            })
            .then(data => {
                setDonation(data)
                const newDonations = data.filter(donations => donations.category == 'clothes');
                setDonation(newDonations);
            })
        setSelectedCategory("Clothes Category")
    }

    // toys category button
    const resetStateToys = () => {
        fetch('http://localhost:8000/donations')
            .then(res => {
                return res.json()
            })
            .then(data => {
                setDonation(data)
                const newDonations = data.filter(donations => donations.category == 'toys');
                setDonation(newDonations);
            })
        setSelectedCategory("Toys Category")

    }

    // food category button
    const resetStateFood = () => {
        fetch('http://localhost:8000/donations')
            .then(res => {
                return res.json()
            })
            .then(data => {
                setDonation(data)
                const newDonations = data.filter(donations => donations.category == 'food');
                setDonation(newDonations);
            })
        setSelectedCategory("Food Category")

    }

    // medical supplies category button
    const resetStateMedical = () => {
        fetch('http://localhost:8000/donations')
            .then(res => {
                return res.json()
            })
            .then(data => {
                setDonation(data)
                const newDonations = data.filter(donations => donations.category == 'medical supplies');
                setDonation(newDonations);
            })
        setSelectedCategory("Medical Supplies Category")

    }

    // school supplies category button
    const resetStateSchool = () => {
        fetch('http://localhost:8000/donations')
            .then(res => {
                return res.json()
            })
            .then(data => {
                setDonation(data)
                const newDonations = data.filter(donations => donations.category == 'school supplies');
                setDonation(newDonations);
            })
        setSelectedCategory("School Supplies Category")

    }
    // blood donations category button
    const resetStateBlood = () => {
        fetch('http://localhost:8000/donations')
            .then(res => {
                return res.json()
            })
            .then(data => {
                const newDonations = data.filter(donations => donations.category == 'blood donations');
                setDonation(newDonations);
            })
        setSelectedCategory("Blood Donations Category")

    }
    // teaching posts category button
    const resetStateTPosts = () => {
        fetch('http://localhost:8000/donations')
            .then(res => {
                return res.json()
            })
            .then(data => {
                const newDonations = data.filter(donations => donations.category == 'teaching posts');
                setDonation(newDonations);
            })
        setSelectedCategory("Teaching Posts Category")

    }
    // medical cases category button
    const resetStateMCases = () => {
        fetch('http://localhost:8000/donations')
            .then(res => {
                return res.json()
            })
            .then(data => {
                const newDonations = data.filter(donations => donations.category == 'medical cases');
                setDonation(newDonations);
            })
        setSelectedCategory("Medical Cases Category")

    }
    const handleButtonClickHome = () => {
        navigate('/home-donor');
    }
    const handleButtonClickDonations = () => {
        navigate('/view-requests');
    }
    const handleButtonClickOrganizations = () => {
        navigate('/view-reg-org');
    }

    const handleButtonClickNotifications = () => {
        navigate('/notifications');
    }




    const handleView = (id) => {
        navigate(`/donation-select/${id}`);


    }


    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs);
    // }


    const [isVisible, setIsVisible] = useState(false);



    //tatos 
    const [openProfile, setOpenProfile] = useState(false);
    const [openCategory, setOpenCategory] = useState(false);


    //TODO: handle click outside

    // const refOne = useRef(null); //used to mark a DOM element
    // useEffect(() => {
    //     document.addEventListener("click",handleClickOutside, true)
    // },[])

    // const handleClickOutside = (e) => {
    //     if(!refOne.current.contains(e.target)){
    //         console.log("Clicked outside");
    //     }
    //     else{
    //         console.log("Clicked inside Div");
    //     }
    // }

    //REPLACE THE LINE AT THE BOTTOM WITH THIS: <button className='home-profilebutton' onClick = {() => setOpenProfile((prev) => !prev)}><img className='home-profile-icon'src='profileEnhanced.png' alt='logo' ref = {refOne}></img></button>

    //filter states to use 
    const [gender, setGender] = useState('');
    const [hospitalName, setHospitalName] = useState('');
    const [selectedSeason, setSelectedSeason] = useState('None');
    const [selectedFruitType, setSelectedFruitType] = useState('None');
    const [selectedGovernorate, setSelectedGovernorate] = useState('None');
    const [selectedArea, setSelectedArea] = useState('None');
    const [medicalSpeciality, setMedicalSpeciality] = useState('');
    const [organizationName, setOrganizationName] = useState('');
    const [subject, setSubject] = useState('');

    const [selectedCategoryX, setSelectedCategoryX] = useState(''); // Initialize with an empty string
    const [selectedSubcategory, setSelectedSubcategory] = useState('');

    const handleGenderChange = (event) => {
        const newValue = event.target.value;
        const isChecked = event.target.checked;
    
        // If the checkbox was already checked, uncheck it; otherwise, set the new value
        setGender((prevGender) => (prevGender === newValue ? '' : newValue));
    
        // Assign the value to the 'gender' variable
        const gender = isChecked ? newValue : '';
    
        console.log(gender);
    };

    const handleCategoryChangeX = (event) => {
        setSelectedCategoryX(event.target.value);
        setSelectedSubcategory(''); // Reset subcategory when category changes
    };
    // Handle subcategory change
    const handleSubcategoryChange = (event) => {
        setSelectedSubcategory(event.target.value);
    };

    const categoryOptions = ['clothes','school supplies','toys', 'food', 'medical supplies','blood donations','teaching posts','medical cases','None'];
    const schoolSubcategories = ['book', 'stationary','None'];
    const toySubcategories = ['board games', 'stuffed toys', 'dolls','sports','cars','outdoor','None'];
    const medicalSubcategories = ['medical devices', 'medical equipment', 'medication','None'];
    const foodSubCategories = ['fruits','vegetables','canned foods','fresh meal','baked goods','None'];
    





    function handleSeasonChange(e) {
        const selectedSeason = e.target.value
        console.log(selectedSeason.toLowerCase());
        // Custom logic based on the selected season
        switch (selectedSeason) {
            case 'Winter':
                // Execute specific code for Winter Season
                console.log('Winter season selected');
                break;
            case 'Spring':
                // Execute specific code for Spring Season
                console.log('Spring season selected');
                break;
            case 'Summer':
                // Execute specific code for Summer Season
                console.log('Summer season selected');
                break;
            case 'Fall':
                // Execute specific code for Fall Season
                console.log('Fall season selected');
                break;
            case 'None':
                // Execute specific code for None
                console.log('None selected');
                break;
            default:
                console.log('Invalid selection');
        }

        setSelectedSeason(selectedSeason);
    }

    //fruit type
    function handleFruitTypeChange(e) {
        const selectedFruitType = e.target.value;

        // Custom logic based on the selected fruit type
        switch (selectedFruitType) {
            case 'Fruits':
                // Execute specific code for None
                console.log('None selected');
                break;
            case 'Vegetables':
                // Execute specific code for Winter Season
                console.log('Winter season selected');
                break;
            case 'Canned Foods':
                // Execute specific code for Spring Season
                console.log('Spring season selected');
                break;
            case 'Fresh Meals':
                // Execute specific code for Summer Season
                console.log('Summer season selected');
                break;
            case 'Baked Goods':
                // Execute specific code for Fall Season
                console.log('Fall season selected');
                break;
            case 'None':
                // Execute specific code for None
                console.log('None selected');
                break;
            default:
                console.log('Invalid selection');
        }

        setSelectedFruitType(selectedFruitType);
        setSelectedSubcategory(selectedFruitType);
    }
    
    function handleGovernorateChange(e) {
        const selectedGovernorate = e.target.value;

        // Custom logic based on the selected governorate
        switch (selectedGovernorate) {
            case 'Alexandria':
                // Execute specific code for Alexandria
                console.log('Alexandria selected');
                break;
            case 'Assiut':
                // Execute specific code for Assiut
                console.log('Assiut selected');
                break;
            case 'Aswan':
                // Execute specific code for Aswan
                console.log('Aswan selected');
                break;
            case 'Beheira':
                // Execute specific code for Beheira
                console.log('Beheira selected');
                break;
            case 'Bani Suef':
                // Execute specific code for Bani Suef
                console.log('Bani Suef selected');
                break;
            case 'Cairo':
                // Execute specific code for Cairo
                console.log('Cairo selected');
                break;
            case 'Daqahliya':
                // Execute specific code for Daqahliya
                console.log('Daqahliya selected');
                break;
            case 'Damietta':
                // Execute specific code for Damietta
                console.log('Damietta selected');
                break;
            case 'Fayyoum':
                // Execute specific code for Fayyoum
                console.log('Fayyoum selected');
                break;
            case 'Gharbiya':
                // Execute specific code for Gharbiya
                console.log('Gharbiya selected');
                break;
            case 'Giza':
                // Execute specific code for Giza
                console.log('Giza selected');
                break;
            case 'Helwan':
                // Execute specific code for Helwan
                console.log('Helwan selected');
                break;
            case 'Ismailia':
                // Execute specific code for Ismailia
                console.log('Ismailia selected');
                break;
            case 'Kafr El Sheikh':
                // Execute specific code for Kafr El Sheikh
                console.log('Kafr El Sheikh selected');
                break;
            case 'Luxor':
                // Execute specific code for Luxor
                console.log('Luxor selected');
                break;
            case 'Marsa Matrouh':
                // Execute specific code for Marsa Matrouh
                console.log('Marsa Matrouh selected');
                break;
            case 'Minya':
                // Execute specific code for Minya
                console.log('Minya selected');
                break;
            case 'Monofiya':
                // Execute specific code for Monofiya
                console.log('Monofiya selected');
                break;
            case 'New Valley':
                // Execute specific code for New Valley
                console.log('New Valley selected');
                break;
            case 'North Sinai':
                // Execute specific code for North Sinai
                console.log('North Sinai selected');
                break;
            case 'Port Said':
                // Execute specific code for Port Said
                console.log('Port Said selected');
                break;
            case 'Qalioubiya':
                // Execute specific code for Qalioubiya
                console.log('Qalioubiya selected');
                break;
            case 'Qena':
                // Execute specific code for Qena
                console.log('Qena selected');
                break;
            case 'Red Sea':
                // Execute specific code for Red Sea
                console.log('Red Sea selected');
                break;
            case 'Sharqiya':
                // Execute specific code for Sharqiya
                console.log('Sharqiya selected');
                break;
            case 'Sohag':
                // Execute specific code for Sohag
                console.log('Sohag selected');
                break;
            case 'South Sinai':
                // Execute specific code for South Sinai
                console.log('South Sinai selected');
                break;
            case 'Suez':
                // Execute specific code for Suez
                console.log('Suez selected');
                break;
            case 'Tanta':
                // Execute specific code for Tanta
                console.log('Tanta selected');
                break;
            default:
                console.log('Invalid selection');
        }
        

        setSelectedGovernorate(selectedGovernorate);
    }

    function handleAreaChange(e) {
        const selectedArea = e.target.value;

        // Custom logic based on the selected area
        switch (selectedArea) {
            case 'Agouza':
                // Execute specific code for Agouza
                console.log('Agouza selected');
                break;
            case 'Ain El Sira':
                // Execute specific code for Ain El Sira
                console.log('Ain El Sira selected');
                break;
            case 'Bulaq':
                // Execute specific code for Bulaq
                console.log('Bulaq selected');
                break;
            case 'Citadel':
                // Execute specific code for Citadel
                console.log('Citadel selected');
                break;
            case 'City of the Dead':
                // Execute specific code for City of the Dead
                console.log('City of the Dead selected');
                break;
            case 'Dokki':
                // Execute specific code for Dokki
                console.log('Dokki selected');
                break;
            case 'Fustat':
                // Execute specific code for Fustat
                console.log('Fustat selected');
                break;
            case 'Garden City':
                // Execute specific code for Garden City
                console.log('Garden City selected');
                break;
            case 'Heliopolis':
                // Execute specific code for Heliopolis
                console.log('Heliopolis selected');
                break;
            case 'Imbaba':
                // Execute specific code for Imbaba
                console.log('Imbaba selected');
                break;
            case 'Islamic Cairo':
                // Execute specific code for Islamic Cairo
                console.log('Islamic Cairo selected');
                break;
            case 'Katameya':
                // Execute specific code for Katameya
                console.log('Katameya selected');
                break;
            case 'Khan El-Khalili':
                // Execute specific code for Khan El-Khalili
                console.log('Khan El-Khalili selected');
                break;
            case 'Mohandiseen':
                // Execute specific code for Mohandiseen
                console.log('Mohandiseen selected');
                break;
            case 'Mokattam Hills':
                // Execute specific code for Mokattam Hills
                console.log('Mokattam Hills selected');
                break;
            case 'Nasr City':
                // Execute specific code for Nasr City
                console.log('Nasr City selected');
                break;
            case 'New Cairo':
                // Execute specific code for New Cairo
                console.log('New Cairo selected');
                break;
            case 'Old Cairo':
                // Execute specific code for Old Cairo
                console.log('Old Cairo selected');
                break;
            case 'Pyramids area':
                // Execute specific code for Pyramids area
                console.log('Pyramids area selected');
                break;
            case 'Ramses':
                // Execute specific code for Ramses
                console.log('Ramses selected');
                break;
            case 'Al Rehab':
                // Execute specific code for Al Rehab
                console.log('Al Rehab selected');
                break;
            case 'Rhoda Island':
                // Execute specific code for Rhoda Island
                console.log('Rhoda Island selected');
                break;
            case 'Saqqara':
                // Execute specific code for Saqqara
                console.log('Saqqara selected');
                break;
            case 'Sayeda Zeinab':
                // Execute specific code for Sayeda Zeinab
                console.log('Sayeda Zeinab selected');
                break;
            case 'Shubra':
                // Execute specific code for Shubra
                console.log('Shubra selected');
                break;
            case 'Tahrir Square':
                // Execute specific code for Tahrir Square
                console.log('Tahrir Square selected');
                break;
            case 'Zamalek':
                // Execute specific code for Zamalek
                console.log('Zamalek selected');
                break;
            default:
                console.log('Invalid selection');
        }
        

        setSelectedArea(selectedArea);
    }

    
    function handleButtonClickRemoveFilters() {
        setGender('');
        setHospitalName('');
        setSelectedSeason('None');
        setSelectedFruitType('None');
        setSelectedGovernorate('None');
        setSelectedArea('None');
        setMedicalSpeciality('');
        setOrganizationName('');
        setSubject('');
        setSelectedCategoryX('None');
        setSelectedSubcategory('None');
        fetch('http://localhost:8000/donations')
            .then(res => {
                return res.json()
            })
            .then(data => {
                setDonation(data)
            })

    }
    

    function handleButtonClickApplyFilters() {
        console.log('apply filters');
        fetch('http://localhost:8000/donations')
            .then(res => res.json())
            .then(data => {
                setDonation(data);
    
                // Apply filters based on selected values
                let filteredDonations = data;
    
                if (selectedSeason !== 'None') {
                    filteredDonations = filteredDonations.filter(donation => donation.season === selectedSeason);
                    console.log('season filtered donations: ',filteredDonations);
                }
    
                if (gender !== '') {
                    filteredDonations = filteredDonations.filter(donation => donation.gender === gender);
                    console.log('gender filtered donations: ',filteredDonations);
                }
    
                if (hospitalName !== '') {
                    filteredDonations = filteredDonations.filter(donation => donation.hospitalName === hospitalName);
                }
    
                if (selectedGovernorate !== 'None') {
                    filteredDonations = filteredDonations.filter(donation => donation.governorate === selectedGovernorate);
                }
    
                if (selectedArea !== 'None') {
                    filteredDonations = filteredDonations.filter(donation => donation.area === selectedArea);
                }
    
                if (medicalSpeciality !== '') {
                    filteredDonations = filteredDonations.filter(donation => donation.medicalSpecialty === medicalSpeciality);
                }
    
                if (organizationName !== '') {
                    filteredDonations = filteredDonations.filter(donation => donation.organizationName === organizationName);
                }
    
                if (subject !== '') {
                    filteredDonations = filteredDonations.filter(donation => donation.subject === subject);
                }

                if (selectedCategoryX !== 'None') {
                    if (selectedSubcategory && selectedSubcategory !== 'None') {
                        // Both category and subcategory are selected
                        filteredDonations = filteredDonations.filter(donation => donation.category === selectedCategoryX && donation.subcategory === selectedSubcategory);
                    } else {
                        // Only category is selected
                        filteredDonations = filteredDonations.filter(donation => donation.category === selectedCategoryX);
                    }
                }
                if (searchTerm) {
                    filteredDonations = filteredDonations.filter(donation => donation.category.toLowerCase().includes(searchTerm.toLowerCase()));
                }  
                // Update the state with the filtered donations
                setDonation(filteredDonations);
                console.log('Filtered donations final:', filteredDonations);
            });
    }
    
    



    return (
        <>
            <div className='view-requests-main'>
                <div className='view-requests-navbar'>
                    <div className='view-requests-leftside'>
                        <img className='view-requests-logo-navbar' src='logo2.png' alt='logo'></img>
                        <img className='view-requests-logo-navbar-name' src='name.png' alt='logo'></img>
                        {/* <button className='view-requests-donate-button' >Donate</button> */}
                    </div>
                    <div className='view-requests-middleside'>
                        <button className='view-requests-middleside-button' onClick={() => handleButtonClickHome('Home')} style={{ marginRight: '10%' }}>Home</button>
                        <button className='view-requests-middleside-button' onClick={() => handleButtonClickDonations('Donations')} style={{ marginRight: '1%' }}>Donations</button>
                        <button className='view-requests-middleside-button' onClick={() => handleButtonClickOrganizations('Organizations')} style={{ marginLeft: '10%' }}>Organizations</button>
                        <button className='view-requests-middleside-button' onClick={() => handleButtonClickNotifications('Notifications')} style={{ marginLeft: '10%' }}>Notifications</button>

                    </div>
                    <div className='view-requests-rightside'>

                        


                        {/* <Link to={"/home"} className='singin-up' >Login/Register</Link> */}
                        {/* tatos */}
                        <button className='view-requests-profilebutton' onClick={() => setOpenProfile((prev) => !prev)}><img className='view-requests-profile-icon' src='profileEnhanced.png' alt='logo'></img></button>


                        {/* <div className='view-requests-quote'>"The best way to find yourself is to lose yourself in the service of others."
                        </div> */}


                    </div>
                </div>
                {/* onClick = {() => setOpenCategory((prev) => !prev)} */}
                <div className="view-requests-body">


                    <div className="view-requests-left">
                        <div className="donations-title">Donation Requests</div>

                        <div className="donations-home">
                            {donations && <DonationsList donations={donations} handleView={handleView} />}
                        </div>
                    </div>

                <div className='view-requests-right'>
                    <div className="search-title">Search</div>
                    <div className="right-subSection-search">
                        <input className="ViewRequests-search-bar" type="text" placeholder="Search..." onChange={e => setSearchTerm(e.target.value)}/>
                    </div>
                    <div className="filter-title">Filter</div>
                        <div className="right-subSection">

                            <div className="LR-subSection">
                            <label htmlFor='Category' style={{ display: 'block', fontWeight:'bold' }}>
                                        Category:
                                    </label>
                                    <div className='categories'>
                                        <select value={selectedCategoryX} onChange={handleCategoryChangeX}>
                                            <option value=''>Select...</option>
                                            {categoryOptions.map((categoryX) => (
                                                <option key={categoryX} value={categoryX}>
                                                    {categoryX}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    {selectedCategoryX && (
                                        ['toys', 'medical supplies', 'school supplies', 'food'].includes(selectedCategoryX) && (
                                            <>
                                            <label htmlFor='Sub-Category' style={{ display: 'block', fontWeight:'bold' }}>
                                                    Sub-Category:
                                                </label>
                                            <div className='subCategories'>
                                                
                                                <select value={selectedSubcategory} onChange={handleSubcategoryChange}>
                                                    <option value=''>Select...</option>
                                                    {selectedCategoryX === 'toys' &&
                                                        toySubcategories.map((subcategory) => (
                                                            <option key={subcategory} value={subcategory}>
                                                                {subcategory}
                                                            </option>
                                                        ))}
                                                    {selectedCategoryX === 'medical supplies' &&
                                                        medicalSubcategories.map((subcategory) => (
                                                            <option key={subcategory} value={subcategory}>
                                                                {subcategory}
                                                            </option>
                                                        ))}
                                                    {selectedCategoryX === 'school supplies' &&
                                                        schoolSubcategories.map((subcategory) => (
                                                            <option key={subcategory} value={subcategory}>
                                                                {subcategory}
                                                            </option>
                                                        ))}
                                                    {selectedCategoryX === 'food' &&
                                                        foodSubCategories.map((subcategory) => (
                                                            <option key={subcategory} value={subcategory}>
                                                                {subcategory}
                                                            </option>
                                                        ))}
                                                </select>
                                            </div>
                                            </>
                                        )
                                    )}
                                
                                <label htmlFor="Gender" style={{ display: 'block', color: '#265305', fontWeight: 'bold'}}>Gender:</label>
                                <div className="view-requests-gender-input">
                                    <label htmlFor="male" style={{color: '#265305', fontWeight: 'normal'}}>
                                        <input type="checkbox" id="male" name="gender" value="male" checked={gender === 'male'} onChange={handleGenderChange}/>
                                        Male
                                    </label>
                                    <label htmlFor="female" style={{color: '#265305', fontWeight: 'normal'}}>
                                        <input type="checkbox" id="female" name="gender" value="female" checked={gender === 'female'} onChange={handleGenderChange} />
                                        Female
                                    </label>
                                </div>
                                <label htmlFor="Season" style={{ display: 'block', color: '#265305', fontWeight: 'bold' }}>Season:</label>
                                <div className="selectSeason">
                                    <select value={selectedSeason} onChange={handleSeasonChange}>
                                        <option value="Winter">Winter</option>
                                        <option value="Spring">Spring</option>
                                        <option value="Summer">Summer</option>
                                        <option value="Fall">Fall</option>
                                        <option value="None">None</option>
                                    </select>
                                </div>
                                {/* <label htmlFor="Fruit Type" style={{ display: 'block' }}>Fruit Type:</label> */}
                                <label htmlFor="Hospital Name" style={{ display: 'block', color: '#265305', fontWeight: 'bold'  }}>Hospital Name:</label>
                                <div className="setHospitalName">
                                <textarea className='view-requests-hospitalName-textarea' required value={hospitalName} onChange={(e) => setHospitalName(e.target.value)}></textarea>
                                </div>
                                <label htmlFor="Governorate" style={{ display: 'block', fontWeight:'bold' }}>Governorate:</label>
                                <div className="selectGovernorate">
                                <select value={selectedGovernorate} onChange={handleGovernorateChange}>
                                    <option value="Alexandria">Alexandria</option>
                                    <option value="Assiut">Assiut</option>
                                    <option value="Aswan">Aswan</option>
                                    <option value="Beheira">Beheira</option>
                                    <option value="Bani Suef">Bani Suef</option>
                                    <option value="Cairo">Cairo</option>
                                    <option value="Daqahliya">Daqahliya</option>
                                    <option value="Damietta">Damietta</option>
                                    <option value="Fayyoum">Fayyoum</option>
                                    <option value="Gharbiya">Gharbiya</option>
                                    <option value="Giza">Giza</option>
                                    <option value="Helwan">Helwan</option>
                                    <option value="Ismailia">Ismailia</option>
                                    <option value="Kafr El Sheikh">Kafr El Sheikh</option>
                                    <option value="Luxor">Luxor</option>
                                    <option value="Marsa Matrouh">Marsa Matrouh</option>
                                    <option value="Minya">Minya</option>
                                    <option value="Monofiya">Monofiya</option>
                                    <option value="New Valley">New Valley</option>
                                    <option value="North Sinai">North Sinai</option>
                                    <option value="Port Said">Port Said</option>
                                    <option value="Qalioubiya">Qalioubiya</option>
                                    <option value="Qena">Qena</option>
                                    <option value="Red Sea">Red Sea</option>
                                    <option value="Sharqiya">Sharqiya</option>
                                    <option value="Sohag">Sohag</option>
                                    <option value="South Sinai">South Sinai</option>
                                    <option value="Suez">Suez</option>
                                    <option value="Tanta">Tanta</option>
                                    <option value="None">None</option>
                                </select>
                                </div>
                                <label htmlFor="Area" style={{ display: 'block', fontWeight:'bold' }}>Area:</label>
                                <div className="selectArea">
                                    <select value={selectedArea} onChange={handleAreaChange}>
                                        <option value="Agouza">Agouza</option>
                                        <option value="Ain El Sira">Ain El Sira</option>
                                        <option value="Bulaq">Bulaq</option>
                                        <option value="Citadel">Citadel</option>
                                        <option value="City of the Dead">City of the Dead</option>
                                        <option value="Dokki">Dokki</option>
                                        <option value="Fustat">Fustat</option>
                                        <option value="Garden City">Garden City</option>
                                        <option value="Heliopolis">Heliopolis</option>
                                        <option value="Imbaba">Imbaba</option>
                                        <option value="Islamic Cairo">Islamic Cairo</option>
                                        <option value="Katameya">Katameya</option>
                                        <option value="Khan El-Khalili">Khan El-Khalili</option>
                                        <option value="Mohandiseen">Mohandiseen</option>
                                        <option value="Mokattam Hills">Mokattam Hills</option>
                                        <option value="Nasr City">Nasr City</option>
                                        <option value="New Cairo">New Cairo</option>
                                        <option value="Old Cairo">Old Cairo</option>
                                        <option value="Pyramids area">Pyramids area</option>
                                        <option value="Ramses">Ramses</option>
                                        <option value="Al Rehab">Al Rehab</option>
                                        <option value="Rhoda Island">Rhoda Island</option>
                                        <option value="Saqqara">Saqqara</option>
                                        <option value="Sayeda Zeinab">Sayeda Zeinab</option>
                                        <option value="Shubra">Shubra</option>
                                        <option value="Tahrir Square">Tahrir Square</option>
                                        <option value="Zamalek">Zamalek</option>
                                        <option value="None">None</option>
                                    </select>
                                </div>

                                    <label htmlFor='Medical Specialty' style={{ display: 'block', fontWeight:'bold' }}>
                                        Medical Specialty:
                                    </label>
                                    <div className='setMedicalSpeciality'>
                                        <textarea required value={medicalSpeciality} onChange={(e) => setMedicalSpeciality(e.target.value)}></textarea>
                                    </div>

                                    <label htmlFor='Organization Name' style={{ display: 'block', fontWeight:'bold' }}>
                                        Organization Name:
                                    </label>
                                    <div className='setOrganizationName'>
                                        <textarea required value={organizationName} onChange={(e) => setOrganizationName(e.target.value)}></textarea>
                                    </div>

                                    <label htmlFor='Subject' style={{ display: 'block', fontWeight:'bold' }}>
                                        Subject:
                                    </label>
                                    <div className='setSubject'>
                                        <textarea required value={subject} onChange={(e) => setSubject(e.target.value)}></textarea>
                                    </div>

                                </div>


                            </div>

                            <div className="ViewRequests-view-buttons">
                                <button className='apply-view-button' onClick={() => handleButtonClickApplyFilters('Apply Filters')}>Apply</button>
                                <button className='remove-view-button' onClick={() => handleButtonClickRemoveFilters('Remove Filters')}>Remove</button>
                            </div>

                            

                        </div>
                    </div>
                </div>

                {/* <button onClick={() => setName('luigi')}>change name</button> */}




                                                        <footer className='view-requests-nd'>
                    <div className='view-requests-words'>Connects Donors,Oganizations <br></br>&amp; much more in every country<br></br> around the world. </div>

                    <div className='view-requests-no'><div className='view-requests-icon-title'><img className='view-requests-foodicon' src='healthicon.png' alt='logo'></img><span className='view-requests-title' >Medical supplies</span></div>
                        <div className='view-requests-saying'>Access to medical supplies is a basic human right. Your donation can bridge the gap between illness and recovery
                            . Join us in providing essential care to those in need.</div></div>
                    <div className='view-requests-no'><div className='view-requests-icon-title'><img className='view-requests-foodicon' src='foodicon.png' alt='logo'></img><span className='view-requests-title' >Food&amp;Nutrition</span></div>
                        <div className='view-requests-saying'>Every plate shared is a gift of hope and nourishment. Your food donation can make a difference in someone's life. Give generously, and let's share the blessings of good food together.</div></div>
                    <div className='view-requests-no'><div className='view-requests-icon-title'><img className='view-requests-foodicon' src='education.png' alt='logo'></img><span className='view-requests-title' style={{ marginRight: '6%' }} >Education</span></div>
                        <div className='view-requests-saying'>Empowering minds through education. Support a child's future with your donation today.</div></div>
                </footer>


            {/* tatos */}
            {
                openProfile && <DropDownProfile role="Donor"/>

            }
            {/* {
                openCategory && <DropDownCategory resetStateCategory={resetStateCategory} resetStateClothes={resetStateClothes} resetStateToys={resetStateToys} resetStateFood={resetStateFood} resetStateMedical={resetStateMedical} resetStateSchool={resetStateSchool} resetStateBlood={resetStateBlood} resetStateTPosts={resetStateTPosts} resetStateMCases={resetStateMCases} />
            } */}
 


        </>
    )
}
export default ViewRequests;