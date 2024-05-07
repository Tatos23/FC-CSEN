import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Card from '../Card';
import { Navigate } from 'react-router-dom';
const data = [
    { id: 1, name: 'Blood', url: '/blood' },
    { id: 2, name: 'Book', url: '/book' },
    { id: 3, name: 'Clothing', url: '/clothes' },
    { id: 4, name: 'Medical Assistance', url: '/medas' },
    { id: 5, name: 'Medical Supplies', url: '/supp' },
    { id: 6, name: 'Stationary', url: '/station' },
    { id: 7, name: 'Teaching', url: '/tut' },
    { id: 8, name: 'Toy', url: '/toy' },
  ];


const RequestButtons = () => {  
  const navigate = useNavigate();
  const handleButtonBlood = () =>{
  navigate('/blood');
  }
  const handleButtonBook = () =>{
    navigate('/book');
  }
  const handleButtonClothes = () =>{
    navigate('/clothes');
  }
  const handleButtonAssist = () =>{
    navigate('/assist');
  }
  const handleButtonMed = () =>{
    navigate('/med');
  }
  const handleButtonStat = () =>{
    navigate('/station');
  }
  const handleButtonTut = () =>{
    navigate('/tut');
  }
  const handleButtonToy = () =>{
    navigate('/toy');
  }
  return (
    <div>
    <form className='bg-gray-200 rounded-lg'>
        <h1>Choose Request Type </h1>
    <div style={{display: 'flex',flexDirection: 'column',gap: '1rem'}}>
      <button className='mb-2 ml-20 mr-20 bg-green-400 text-white rounded-md hover:bg-green-700' key={'blood'} onClick={() => handleButtonBlood('blood')}>Blood</button>
      <button className='mb-2 ml-20 mr-20 bg-green-400 text-white rounded-md hover:bg-green-700' key={'book'} onClick={() => handleButtonBook('book')}>Book</button>
    </div> 
    </form>
    </div>
  )
}

export default RequestButtons;