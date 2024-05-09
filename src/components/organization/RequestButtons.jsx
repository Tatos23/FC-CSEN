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
  const handleButtonFood = () =>{
    navigate('/food');
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
    <form className='bg-gray-200 rounded-lg mr-20 ml-20'>
      <br />
        <h1>Choose Request Type </h1>
        <br />
    <div style={{display: 'flex',flexDirection: 'column',gap: '1rem', alignItems: 'center'}}>
      <button className='mb-5 ml-20 mr-20 bg-green-500 w-40 text-white rounded-lg hover:bg-green-700' key={'blood'} onClick={() => handleButtonBlood('blood')}>Blood</button>
      <button className='mb-5 ml-20 mr-20 bg-green-500 w-40 text-white rounded-lg hover:bg-green-700' key={'book'} onClick={() => handleButtonBook('book')}>Book</button>
      <button className='mb-5 ml-20 mr-20 bg-green-500 w-40 text-white rounded-lg hover:bg-green-700' key={'clothes'} onClick={() => handleButtonClothes('clothes')}>Clothes</button>
      <button className='mb-5 ml-20 mr-20 bg-green-500 w-40 text-white rounded-lg hover:bg-green-700' key={'food'} onClick={() => handleButtonFood('food')}>Food</button>
      <button className='mb-5 ml-20 mr-20 bg-green-500 w-40 text-white rounded-lg hover:bg-green-700' key={'medical-assistance'} onClick={() => handleButtonAssist('assist')}>Medical Assistance</button>
      <button className='mb-5 ml-20 mr-20 bg-green-500 w-40 text-white rounded-lg hover:bg-green-700' key={'medical-supplies'} onClick={() => handleButtonMed('supp')}>Medical Supplies</button>
      <button className='mb-5 ml-20 mr-20 bg-green-500 w-40 text-white rounded-lg hover:bg-green-700' key={'stationary'} onClick={() => handleButtonStat('station')}>Stationary</button>
      <button className='mb-5 ml-20 mr-20 bg-green-500 w-40 text-white rounded-lg hover:bg-green-700' key={'tut'} onClick={() => handleButtonTut('tut')}>Teaching Lessons</button>
      <button className='mb-9 ml-20 mr-20 bg-green-500 w-40 text-white rounded-lg hover:bg-green-700' key={'toy'} onClick={() => handleButtonToy('toy')}>Toy</button>
    </div> 
    </form>
    </div>
  )
}

export default RequestButtons;