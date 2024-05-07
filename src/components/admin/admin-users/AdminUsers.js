import React, { useState } from 'react';
import './AdminUsers.css'
import UserCard from '../components/user_card/UserCard';
import { mockUsers } from '../admin-users-data.js';

function AdminUsers() {
    const users = mockUsers;
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(9);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = users.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(users.length / itemsPerPage);

    const handleClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    return (
        <div className='admin-users'>
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
            <div className='pagination'>
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