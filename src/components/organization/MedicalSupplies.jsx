import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import OrgTemp from './OrgTemp'
import { Navigate } from 'react-router-dom'
const MedicalSupplies = () => {
    const handleFileChange = (e) => {
        if (e.target.files[0] && e.target.files[0].type !== 'image/*') {
            alert('Only images are allowed');
            e.target.value = ''; 
        }
    };
    const navigate = useNavigate();
    const handleButtonSubmitted = () =>{
        navigate('/submitted');
      }
  return (
    <div>
        <OrgTemp/>
        <form className='bg-gray-200 rounded-lg mr-20 ml-20'>
        <h2 className='text-2xl text-green-500'>Medical Supplies Request Form </h2>
                <br/>
                <div style={{ display:'block', alignItems: 'center' }}>
                <label className='text-2xl text-green-800'>Device Type: </label>
                <input type="text"  style={{ maxWidth: '200px', maxHeight: '30px', textAlign:'center' }} placeholder='' required/>
                </div>
                <br/>
                <div style={{ display:'block', alignItems: 'center' }}>
                <label className='text-2xl text-green-800'>Use: </label>
                <input type="text"  style={{ maxWidth: '200px', maxHeight: '30px', textAlign:'center' }} required/>
                </div>
                <br />
                <div style={{ display:'block', alignItems: 'center' }}>
                <label className='text-2xl text-green-800'>Quantity: </label>
                <input type="number" max={"10"} onChange={(event)=> {const val = Math.min(event.target.value,10); event.target.value=val;
                  }} style={{ maxWidth: '100px', maxHeight: '30px', textAlign:'center' }} placeholder='' required></input>
                </div>
                <br />
                <div className="Book-Img">
            <div className='Book-Img-Container'>
                <h1 className="Book-Img-Title">Upload an image of the Medical Supply(if possible)</h1>
                <input type="file" name="file"  className='Book-Img-document-input' onChange={handleFileChange}/>
            </div>
        </div>
                  <br />
                  <br />
                  <button className='bg-green-500 rounded-lg px-4 py-2 text-white text-3xl mt-2 mb-4 hover:bg-green-700' key={'submitted'} onClick={() => handleButtonSubmitted('submitted')}>Submit For Approval</button>

        </form>
    </div>
  )
}

export default MedicalSupplies