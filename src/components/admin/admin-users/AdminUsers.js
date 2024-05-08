import React, { useState } from 'react';
import './AdminUsers.css'
import UserCard from '../components/user_card/UserCard';
import { mockUsers } from '../admin-users-data.js';

function AdminUsers() {
    const users = mockUsers;
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(9);
    const [filter, setFilter] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');

    const filteredUsers = users.filter(user => {
        const matchesFilter = filter === 'All' || user.type === 'Organization';
        const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (user.organizationType && user.organizationType.toLowerCase().includes(searchTerm.toLowerCase()));
        return matchesFilter && matchesSearch;
    });

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredUsers.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);

    const handleClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    }


    return (
        <div className='admin-users'>
            <div className='admin-users-top-bar'>
                <div className='admin-users-showing'>
                    <span>Show: </span>
                    <button className={filter === 'All' ? 'admin-users-selected' : ''} onClick={() => setFilter('All')}>All</button>
                    <button className={filter === 'Organization' ? 'admin-users-selected' : ''} onClick={() => setFilter('Organization')}>Organizations</button>
                </div>
                <input type="text" placeholder="Search..." onChange={e => setSearchTerm(e.target.value)} />
            </div>

            <div className='admin-users-grid'>
                {currentItems.map((user, index) => {
                    if (user.type === 'Donor') {
                        return <UserCard key={index} type='Donor' name={user.name} />;
                    } else if (user.type === 'Organization') {
                        return <UserCard key={index} type='Organization' name={user.name} organizationType={user.organizationType} />;
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
                    <button key={i} onClick={() => handleClick(currentPage - 2 + i)}>{currentPage - 2 + i}</button>
                )}
                {currentPage < totalPages - 3 && <span>...</span>}
                {currentPage < totalPages - 2 && <button onClick={() => handleClick(totalPages)}>{totalPages}</button>}
            </div>
        </div>
    );
}

export default AdminUsers;