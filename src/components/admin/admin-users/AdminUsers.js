import React, { useState } from 'react';
import './AdminUsers.css'
import UserCard from '../components/user_card/UserCard';
import { mockUsers } from '../admin-users-data.js';
import OrganizationDetailCard from '../components/organization-detail-card/OrganizationDetailCard.js';

function AdminUsers() {
    const users = mockUsers.slice();
    const [usersData, setUsersData] = useState(users);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(9);
    const [filter, setFilter] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');
    const [dropdownOpenArea, setDropdownOpenArea] = useState(false);
    const [dropdownOpenGovernorate, setDropdownOpenGovernorate] = useState(false);
    const [dropdownOpenType, setDropdownOpenType] = useState(false);
    const [selectedTypes, setSelectedTypes] = useState([]);
    const [selectedArea, setSelectedArea] = useState([]);
    const [selectedGovernorate, setSelectedGovernorate] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);

    const filteredUsers = usersData.filter(user => {
        const matchesFilter = filter === 'All' || (filter === 'Teachers/Doctors' && user.type === 'Donor' && (user.donorRole === 'Teacher' || user.donorRole === 'Doctor')) ||
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
        setFilter('All');
    }
    const handleUserClick = (user) => {
        setSelectedUser(user);
    };

    const handleCloseDialog = () => {
        setSelectedUser(null);
    };

    return (
        <div className='admin-users'>
            <div className='admin-users-top-bar'>
                <div className='admin-users-showing'>
                    <span>Show: </span>
                    <button className={filter === 'All' ? 'admin-users-selected' : ''} onClick={() => { handleClear(); setFilter('All'); setCurrentPage(1); }}>All</button>
                    <button className={filter === 'Teachers/Doctors' ? 'admin-users-selected' : ''} onClick={() => { handleClear(); setFilter('Teachers/Doctors'); setCurrentPage(1); }}>Teachers/Doctors</button>
                    <button className={filter === 'Organization' ? 'admin-users-selected' : ''} onClick={() => { setFilter('Organization'); setCurrentPage(1); }}>Organizations</button>
                </div>
                <input type="text" placeholder="Search..." onChange={e => setSearchTerm(e.target.value)} />
                <div className='admin-users-dropdowns'>
                    <div className='admin-users-dropdown'>
                        <button className={selectedArea.length !== 0 ? 'admin-users-dropdown-selected' : 'admin-users-dropdown-button'} onClick={() => setDropdownOpenArea(!dropdownOpenArea)}>Filter by Area</button>
                        {dropdownOpenArea && (
                            <div className='admin-users-dropdown-menu'>
                                <div className='admin-users-dropdown-menu-types'>
                                    {['A1', 'A2', 'A3', 'A4'].map(area => (
                                        <button
                                            key={area}
                                            className={`admin-users-dropdown-menu-type ${selectedArea.includes(area) ? 'admin-users-selected' : ''}`}
                                            onClick={() => setSelectedArea(selectedArea.includes(area) ? selectedArea.filter(a => a !== area) : [...selectedArea, area])}
                                        >
                                            {area}
                                        </button>
                                    ))}
                                </div>
                                <div className='admin-users-dropdown-menu-buttons'>
                                    <button className='admin-users-dropdown-menu-buttons-1' onClick={handleDone}>Done</button>
                                    <button className='admin-users-dropdown-menu-buttons-2' onClick={handleClear}>Clear All</button>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className='admin-users-dropdown'>
                        <button className={selectedGovernorate.length !== 0 ? 'admin-users-dropdown-selected' : 'admin-users-dropdown-button'} onClick={() => setDropdownOpenGovernorate(!dropdownOpenGovernorate)}>Filter by Governorate</button>
                        {dropdownOpenGovernorate && (
                            <div className='admin-users-dropdown-menu'>
                                <div className='admin-users-dropdown-menu-types'>
                                    {['G1', 'G2', 'G3', 'G4'].map(governorate => (
                                        <button
                                            key={governorate}
                                            className={`admin-users-dropdown-menu-type ${selectedGovernorate.includes(governorate) ? 'admin-users-selected' : ''}`}
                                            onClick={() => setSelectedGovernorate(selectedGovernorate.includes(governorate) ? selectedGovernorate.filter(g => g !== governorate) : [...selectedGovernorate, governorate])}
                                        >
                                            {governorate}
                                        </button>
                                    ))}
                                </div>
                                <div className='admin-users-dropdown-menu-buttons'>
                                    <button className='admin-users-dropdown-menu-buttons-1' onClick={handleDone}>Done</button>
                                    <button className='admin-users-dropdown-menu-buttons-2' onClick={handleClear}>Clear All</button>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className='admin-users-dropdown'>
                        <button className={selectedTypes.length !== 0 ? 'admin-users-dropdown-selected' : 'admin-users-dropdown-button'} onClick={() => setDropdownOpenType(!dropdownOpenType)}>Filter by Type</button>
                        {dropdownOpenType && (
                            <div className='admin-users-dropdown-menu'>
                                <div className='admin-users-dropdown-menu-types'>
                                    {['Health', 'Blood', 'Education', 'Orphanage', 'Food', 'Clothing', 'Shelter'].map(type => (
                                        <button
                                            key={type}
                                            className={`admin-users-dropdown-menu-type ${selectedTypes.includes(type) ? 'admin-users-selected' : ''}`}
                                            onClick={() => handleTypeSelect(type)}
                                        >
                                            {type}
                                        </button>
                                    ))}
                                </div>
                                <div className='admin-users-dropdown-menu-buttons'>
                                    <button className='admin-users-dropdown-menu-buttons-1' onClick={handleDone}>Done</button>
                                    <button className='admin-users-dropdown-menu-buttons-2' onClick={handleClear}>Clear All</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className='admin-users-hint'>
                <span>Hint: Click on an organization to view more details.</span>
            </div>
            <div className='admin-users-grid'>
                {currentItems.map((user, index) => {
                    if (user.type === 'Donor') {
                        return <UserCard key={index} usersData={usersData} setUsersData={setUsersData} type='Donor' name={user.username} />;
                    } else if (user.type === 'Organization') {
                        return <UserCard key={index} usersData={usersData} setUsersData={setUsersData} type='Organization' name={user.name} organizationType={user.organizationType} onClick={() => handleUserClick(user)} />;
                    } else {
                        return null;
                    }
                })}
            </div>
            <div className='admin-users-pagination'>
                {currentPage > 3 && <button onClick={() => handleClick(1)}>1</button>}
                {currentPage > 4 && <span>...</span>}
                {[...Array(5)].map((page, i) =>
                    currentPage - 2 + i > 0 && currentPage - 2 + i <= totalPages &&
                    <button
                        key={i}
                        onClick={() => handleClick(currentPage - 2 + i)}
                        className={currentPage - 2 + i === currentPage ? 'admin-users-selected' : ''}
                    >
                        {currentPage - 2 + i}
                    </button>
                )}
                {currentPage < totalPages - 3 && <span>...</span>}
                {currentPage < totalPages - 2 && <button onClick={() => handleClick(totalPages)}>{totalPages}</button>}
            </div>
            {selectedUser &&
                <div className="overlay">
                    <OrganizationDetailCard onClose={handleCloseDialog} user={selectedUser} />
                </div>
            }
        </div>
    );
}

export default AdminUsers;