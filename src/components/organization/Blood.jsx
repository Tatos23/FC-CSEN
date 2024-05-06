import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import OrgTemp from './OrgTemp';
const Blood = () => {
    const [selectedOption, setSelectedOption,] = useState('');
    const handleSelectChange = (event)=> {setSelectedOption (event.target.option)};
  return (
    <div>
        <OrgTemp />
        <form className='bg-gray-200 rounded-lg'>
        <h2 className='text-2xl text-green-500'>Blood Request Form </h2>
                <br/>
                <div style={{ display:'block', alignItems: 'center' }}>
                <label className='text-2xl text-green-800'>Patient Name: </label>
                <input type="text"  style={{ maxWidth: '200px', maxHeight: '30px', textAlign:'center' }} required/>
                </div>
                <br />
                <div style={{ display:'block', alignItems: 'center' }}>
                <label className='text-2xl text-green-800'>Quantity: </label>
                <input type="number" max={"10"} onChange={(event)=> {const val = Math.min(event.target.value,10); event.target.value=val;
                  }} style={{ maxWidth: '100px', maxHeight: '30px', textAlign:'center' }} placeholder='in liters' required></input>
                </div>
                <br />
                <div style={{ display:'block', alignItems: 'center' }}>
                  <label className='text-2xl text-green-800 mr-20'>
                    Blood Type:  
                    <select value={selectedOption} onChange={handleSelectChange} required>
                      <option value = "A+">A+</option>
                      <option value = "A-">A-</option>
                      <option value = "B+">B+</option>
                      <option value = "B-">B-</option>
                      <option value = "AB+">AB+</option>
                      <option value = "AB-">AB-</option>
                      <option value = "O+">O+</option>
                      <option value = "O+">O-</option>
                    </select>
                  </label>
                  </div>
                  <br />
                  <div style={{ display:'block', alignItems: 'center' }}>
                <label className='text-2xl text-green-800'>Hospital Name: </label>
                <input type="text"  style={{ maxWidth: '200px', maxHeight: '30px', textAlign:'center' }} placeholder=" El Nozha/Saudi German/... etc." required/>
                </div>
                <br />
                <div style={{ display:'block', alignItems: 'center' }}>
                <label className='text-2xl text-green-800'>Hospital Area: </label>
                <input type="text"  style={{ maxWidth: '200px', maxHeight: '30px', textAlign:'center' }} placeholder="Sheraton/ 5th Settelment" required/>
                </div>
                <br />
                <div style={{ display:'block', alignItems: 'center' }}>
                <label className='text-2xl text-green-800'>Governate: </label>
                <input type="text"  style={{ maxWidth: '200px', maxHeight: '30px', textAlign:'center' }} placeholder="Cairo/Giza/... etc." required/>
                </div>
                <br />
                <div style={{ display:'block', alignItems: 'center' }}>
                <label className='text-2xl text-green-800'>Address: </label>
                <input type="text"  style={{ maxWidth: '200px', maxHeight: '30px', textAlign:'center' }} placeholder="Street Name" required/>
                </div>
                  <br />
                  <br />
                  <button className='bg-green-500 rounded-lg px-4 py-2 text-white text-3xl mt-2 mb-4 hover:bg-green-700 '>Submit For Approval</button>

        </form>
    </div>
  )
}

export default Blood