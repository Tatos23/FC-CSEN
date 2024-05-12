import React, { useState } from 'react';
import './ViewRegisteredOrganizations.css'
import { mockUsers } from '../admin/admin-users-data.js';
import UserSubmissionCard2 from './UserSubmissionCard2.js';
import Header from './Header.js';
function ViewRegisteredOrganizations() {
    const users = mockUsers.slice();
    const [usersData, setUsersData] = useState(users);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(6);
    const [filter, setFilter] = useState('Organization');
    const [searchTerm, setSearchTerm] = useState('');
    const [dropdownOpenArea, setDropdownOpenArea] = useState(false);
    const [dropdownOpenGovernorate, setDropdownOpenGovernorate] = useState(false);
    const [dropdownOpenType, setDropdownOpenType] = useState(false);
    const [selectedTypes, setSelectedTypes] = useState([]);
    const [selectedArea, setSelectedArea] = useState([]);
    const [selectedGovernorate, setSelectedGovernorate] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);

    const filteredUsers = usersData.filter(user => {
        const matchesFilter = 
            (filter === 'Organization' && (user.type === 'Organization' && (selectedTypes.length === 0 || selectedTypes.includes(user.organizationType)) &&
                (selectedArea.length === 0 || selectedArea.includes(user.organizationArea)) &&
                (selectedGovernorate.length === 0 || selectedGovernorate.includes(user.organizationGovernorate))));
        const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredUsers.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);

    const handleClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    const handleTypeSelect = (type) => {
        setSelectedTypes(prevTypes =>
            prevTypes.includes(type) ? prevTypes.filter(t => t !== type) : [...prevTypes, type]
        );
    }

    const handleDone = () => {
        setFilter('Organization');
        setDropdownOpenArea(false);
        setDropdownOpenGovernorate(false);
        setDropdownOpenType(false);
    }

    const handleClear = () => {
        setSelectedTypes([]);
        setSelectedArea([]);
        setSelectedGovernorate([]);
        setDropdownOpenArea(false);
        setDropdownOpenGovernorate(false);
        setDropdownOpenType(false);
        setFilter('Organization');
    }

    const handleUserClick = (user) => {
        setSelectedUser(user);
    };

    const handleCloseDialog = () => {
        setSelectedUser(null);
    };

    return (   <> <Header></Header>
        <div className='user-submissions' style={{marginTop:"0px"}}>

            <div className='user-submissions-top-bar'>
                <div className='user-submissions-showing'>
                    <span>Show: </span>
                     <button className={filter === 'Organization' ? 'user-submissions-selected' : ''} onClick={() => { setFilter('Organization'); setCurrentPage(1); }}>Organizations</button>
                </div>
                <input type="text" placeholder="Search..." onChange={e => setSearchTerm(e.target.value)} />
                <div className='user-submissions-dropdowns'>
                    <div className='user-submissions-dropdown'>
                        <button className={selectedArea.length !== 0 ? 'user-submissions-dropdown-selected' : 'user-submissions-dropdown-button'} onClick={() => setDropdownOpenArea(!dropdownOpenArea)}>Filter by Area</button>
                        {dropdownOpenArea && (
                            <div className='user-submissions-dropdown-menu'>
                                <div className='user-submissions-dropdown-menu-types'>
                                    {['A1', 'A2', 'A3', 'A4'].map(area => (
                                        <button
                                            key={area}
                                            className={`user-submissions-dropdown-menu-type ${selectedArea.includes(area) ? 'user-submissions-selected' : ''}`}
                                            onClick={() => setSelectedArea(selectedArea.includes(area) ? selectedArea.filter(a => a !== area) : [...selectedArea, area])}
                                        >
                                            {area}
                                        </button>
                                    ))}
                                </div>
                                <div className='user-submissions-dropdown-menu-buttons'>
                                    <button className='user-submissions-dropdown-menu-buttons-1' onClick={handleDone}>Done</button>
                                    <button className='user-submissions-dropdown-menu-buttons-2' onClick={handleClear}>Clear All</button>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className='user-submissions-dropdown'>
                        <button className={selectedGovernorate.length !== 0 ? 'user-submissions-dropdown-selected' : 'user-submissions-dropdown-button'} onClick={() => setDropdownOpenGovernorate(!dropdownOpenGovernorate)}>Filter by Governorate</button>
                        {dropdownOpenGovernorate && (
                            <div className='user-submissions-dropdown-menu'>
                                <div className='user-submissions-dropdown-menu-types'>
                                    {['G1', 'G2', 'G3', 'G4'].map(governorate => (
                                        <button
                                            key={governorate}
                                            className={`user-submissions-dropdown-menu-type ${selectedGovernorate.includes(governorate) ? 'user-submissions-selected' : ''}`}
                                            onClick={() => setSelectedGovernorate(selectedGovernorate.includes(governorate) ? selectedGovernorate.filter(g => g !== governorate) : [...selectedGovernorate, governorate])}
                                        >
                                            {governorate}
                                        </button>
                                    ))}
                                </div>
                                <div className='user-submissions-dropdown-menu-buttons'>
                                    <button className='user-submissions-dropdown-menu-buttons-1' onClick={handleDone}>Done</button>
                                    <button className='user-submissions-dropdown-menu-buttons-2' onClick={handleClear}>Clear All</button>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className='user-submissions-dropdown'>
                        <button className={selectedTypes.length !== 0 ? 'user-submissions-dropdown-selected' : 'user-submissions-dropdown-button'} onClick={() => setDropdownOpenType(!dropdownOpenType)}>Filter by Type</button>
                        {dropdownOpenType && (
                            <div className='user-submissions-dropdown-menu'>
                                <div className='user-submissions-dropdown-menu-types'>
                                    {['Health', 'Blood', 'Education', 'Orphanage', 'Food', 'Clothing', 'Shelter'].map(type => (
                                        <button
                                            key={type}
                                            className={`user-submissions-dropdown-menu-type ${selectedTypes.includes(type) ? 'user-submissions-selected' : ''}`}
                                            onClick={() => handleTypeSelect(type)}
                                        >
                                            {type}
                                        </button>
                                    ))}
                                </div>
                                <div className='user-submissions-dropdown-menu-buttons'>
                                    <button className='user-submissions-dropdown-menu-buttons-1' onClick={handleDone}>Done</button>
                                    <button className='user-submissions-dropdown-menu-buttons-2' onClick={handleClear}>Clear All</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className='user-submissions-grid'>
                {currentItems.map((user, index) => {
                    if (user.type === 'Donor') {
                        return <UserSubmissionCard2 key={index} usersData={usersData} setUsersData={setUsersData} user={user} />;
                    } else if (user.type === 'Organization') {
                        return <UserSubmissionCard2 key={index} usersData={usersData} setUsersData={setUsersData} user={user} />;
                    } else {
                        return null;
                    }
                })}
            </div>
            <div className='user-submissions-pagination'>
                {currentPage > 3 && <button onClick={() => handleClick(1)}>1</button>}
                {currentPage > 4 && <span>...</span>}
                {[...Array(5)].map((page, i) =>
                    currentPage - 2 + i > 0 && currentPage - 2 + i <= totalPages &&
                    <button
                        key={i}
                        onClick={() => handleClick(currentPage - 2 + i)}
                        className={currentPage - 2 + i === currentPage ? 'user-submissions-selected' : ''}
                    >
                        {currentPage - 2 + i}
                    </button>
                )}
                {currentPage < totalPages - 3 && <span>...</span>}
                {currentPage < totalPages - 2 && <button onClick={() => handleClick(totalPages)}>{totalPages}</button>}
            </div>
        </div>
        </> );
}

export default ViewRegisteredOrganizations;