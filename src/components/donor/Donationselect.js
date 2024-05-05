import React, { useState } from 'react';
import Header from './Header'; // Import the Header component
import './Donationselect.css';

function Donationselect() {
  const [quantity, setQuantity] = useState(0);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
      
      <div className='Donationselect-main'>
      <Header />
      <div className='Donationselect-container'>
        <div className='Donationselect-title'>Book donation request</div>
        <img className='Donationselect-picture' src='book.png' alt='Book' />
        <div className='Donationselect-description'>I want a very nice book about science fiction</div>
        <div className='Donationselect-counter'>
        <span className='Donationselect-label'>Quantity:</span>
          <button className='Donationselect-increment'onClick={handleDecrement}>-</button>
          <span>{quantity}</span>
          <button  className='Donationselect-increment'onClick={handleIncrement}>+</button>

        </div>
        <button className='Donationselect-Donate'>Donate</button>
      </div></div>
    </>
  );
}

export default Donationselect;
