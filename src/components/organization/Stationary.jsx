import React from 'react'
import OrgTemp from './OrgTemp'
import { useNavigate } from 'react-router-dom';
const Stationary = () => {
  
const navigate = useNavigate();
const handleButtonSubmitted = () =>{
    navigate('/submitted');
  }

  return (
    <div>
        <OrgTemp/>
        <form className='bg-gray-200 rounded-lg mr-20 ml-20'>
        <h2 className='text-2xl text-green-500'>Stationary Request Form </h2>
        <br/>
            <div style={{ display:'block', alignItems: 'center' }}>
            <label className='text-2xl text-green-800'>Type of Stationary: </label>
            <input type="text"  style={{ maxWidth: '200px', maxHeight: '30px', textAlign:'center' }} placeholder='pencil/pen/... etc.' required/>
            </div>
            <br/>
            <div style={{ display:'block', alignItems: 'center' }}>
                <label className='text-2xl text-green-800'>Quantity: </label>
                <input type="number" max={"100"} onChange={(event)=> {const val = Math.min(event.target.value,100); event.target.value=val;
                  }} style={{ maxWidth: '100px', maxHeight: '30px', textAlign:'center' }} placeholder='up to 100' required></input>
                </div>
                <br />
                <br />
                <button className='bg-green-500 rounded-lg px-4 py-2 text-white text-3xl mt-2 mb-4 hover:bg-green-700' key={'submitted'} onClick={() => handleButtonSubmitted('submitted')}>Submit For Approval</button>        </form>
    </div>
  )
}

export default Stationary