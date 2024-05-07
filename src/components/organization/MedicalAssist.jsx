import React from 'react'
import OrgTemp from './OrgTemp'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom'

const MedicalAssist = () => {
    const [selectedGender, setSelectedGender] = useState("");
    const handleChange = (event) => {
    setSelectedGender(event.target.value);
    };
    const navigate = useNavigate();
    const handleButtonSubmitted = () =>{
        navigate('/submitted');
      }
    return (
    <div>
        <OrgTemp/>
        <form className='bg-gray-200 rounded-lg mr-20 ml-20'>
        <h2 className='text-2xl text-green-500'>Medical Assistance Request Form </h2>
                <br/>
                <div style={{ display:'block', alignItems: 'center' }}>
                <label className='text-2xl text-green-800'>Patient Name: </label>
                <input type="text"  style={{ maxWidth: '200px', maxHeight: '30px', textAlign:'center' }} required/>
                </div>
                <br/>
                <div style={{ display:'block', alignItems: 'center' }}>
                <label className='text-2xl text-green-800'>Age: </label>
                <input type="number" max={"100"} onChange={(event)=> {const val = Math.min(event.target.value,100); event.target.value=val;
                  }} style={{ maxWidth: '200px', maxHeight: '30px', textAlign:'center' }} placeholder='(10/25/36/... etc.)' required></input>
                </div>
                <br />
                <label style={{alignItems:'center'}} className='text-2xl text-green-800'> State the Gender:</label>
                  <br />
                    <label style={{display:'inline-table', alignItems:'center'}} className='text-2xl text-green-800 mr-20'>Male<input type="radio" id="male" value="male"  checked= {selectedGender === "male"} onChange={handleChange} /></label>
                    <label style={{display:'inline-table', alignItems:'center'}} className='text-2xl text-green-800'>Female<input type="radio" id="female" value="female" checked= {selectedGender === "female"} onChange={handleChange}/></label>    
                <br />
                <div style={{ display:'block', alignItems: 'center' }}>
                <label className='text-2xl text-green-800'>Weight: </label>
                <input type="number" max={"1000"} onChange={(event)=> {const val = Math.min(event.target.value,1000); event.target.value=val;
                  }} style={{ maxWidth: '100px', maxHeight: '30px', textAlign:'center' }} placeholder='in kgs' required></input>
                </div>
                <br />
                <div style={{ display:'block', alignItems: 'center' }}>
                <label className='text-2xl text-green-800'>Location: </label>
                <input type="text"  style={{ maxWidth: '200px', maxHeight: '30px', textAlign:'center' }} required/>
                </div>
                <br />
                <div style={{ display:'block', alignItems: 'center' }}>
                <label className='text-2xl text-green-800'>Address: </label>
                <input type="text"  style={{ maxWidth: '200px', maxHeight: '30px', textAlign:'center' }}required/>
                </div>
                <br/>
                <div style={{ display:'block', alignItems: 'center' }}>
                <label className='text-2xl text-green-800'>Organization Name: </label>
                <input type="text"  style={{ maxWidth: '200px', maxHeight: '30px', textAlign:'center' }} required/>
                </div>
                <br/>
                <div style={{ display:'block', alignItems: 'center' }}>
                <label className='text-2xl text-green-800'>Medical Speciality Required: </label>
                <input type="text"  style={{ maxWidth: '300px', maxHeight: '30px', textAlign:'center' }} placeholder='Bones/Nervous System/... etc.' required/>
                </div>
                <br />
                <div style={{ display:'block', alignItems: 'center' }}>
                <label className='text-2xl text-green-800'>Case Description: </label>
                <input type="text"  style={{ maxWidth: '2000px', height: '80px', textAlign:'center' }}required/>
                </div>
                  <br />
                  <br />
                  <button className='bg-green-500 rounded-lg px-4 py-2 text-white text-3xl mt-2 mb-4 hover:bg-green-700' key={'submitted'} onClick={() => handleButtonSubmitted('submitted')}>Submit For Approval</button>
        </form>
    </div>
  )
}

export default MedicalAssist