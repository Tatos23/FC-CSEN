import React from 'react'
import OrgTemp from './OrgTemp'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Tutorials = () => {
    const navigate = useNavigate();
    const handleButtonSubmitted = () =>{
        navigate('/submitted');
      }

  return (
    <div>
        <OrgTemp/>
        <form className='bg-gray-200 rounded-lg mr-20 ml-20'>
        <h2 className='text-2xl text-green-500'>Lesson Request Form </h2>
                <br/>
                <div style={{ display:'block', alignItems: 'center' }}>
                <label className='text-2xl text-green-800'>Number of Students: </label>
                <input type="number" max={"70"} onChange={(event)=> {const val = Math.min(event.target.value,70); event.target.value=val;
                  }} style={{ maxWidth: '300px', maxHeight: '30px', textAlign:'center' }} placeholder='70 students max/lesson ' required></input>
                </div>
                <br />
                <div style={{ display:'block', alignItems: 'center' }}>
                <label className='text-2xl text-green-800'>Address: </label>
                <input type="text"  style={{ maxWidth: '200px', maxHeight: '30px', textAlign:'center' }} placeholder='street name' required/>
                </div>
                <br/>
                <div style={{ display:'block', alignItems: 'center' }}>
                <label className='text-2xl text-green-800'>Location: </label>
                <input type='url'  style={{ maxWidth: '400px', maxHeight: '30px', textAlign:'center' }} placeholder='insert your google maps location' required/>
                </div>
                <br/>
                <div style={{ display:'block', alignItems: 'center' }}>
                <label className='text-2xl text-green-800'>Subjects: </label>
                <input type="text"  style={{ maxWidth: '200px', maxHeight: '30px', textAlign:'center' }} placeholder='Science/Math/... etc.' required/>
                </div>               
                  <br />
                  <br />
                  <button className='bg-green-500 rounded-lg px-4 py-2 text-white text-3xl mt-2 mb-4 hover:bg-green-700' key={'submitted'} onClick={() => handleButtonSubmitted('submitted')}>Submit For Approval</button>
        </form>

    </div>
  )
}

export default Tutorials