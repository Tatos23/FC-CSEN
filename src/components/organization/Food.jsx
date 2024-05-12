import React from 'react'
import OrgTemp from './OrgTemp'
import { useNavigate } from 'react-router-dom';

const Food = () => {
    const navigate = useNavigate();
    const handleButtonSubmitted = () =>{
        navigate('/submitted');
      }
  return (
    <div>
        <OrgTemp/>
        <form className='bg-gray-200 rounded-lg mr-20 ml-20'>
        <h2 className='text-2xl text-green-500'>Food Request Form </h2>
                <br/>
                <div style={{ display:'block', alignItems: 'center' }}>
                <label className='text-2xl text-green-800'>Food Item: </label>
                <input type="text"  style={{ maxWidth: '200px', maxHeight: '30px', textAlign:'center' }} required/>
                </div>
                <br/>
                <div style={{ display:'block', alignItems: 'center' }}>
                <label className='text-2xl text-green-800'>Quantity: </label>
                <input type="number" max={"200"} onChange={(event)=> {const val = Math.min(event.target.value,200); event.target.value=val;
                  }} style={{ maxWidth: '150px', maxHeight: '30px', textAlign:'center' }} placeholder='' required></input>
                </div>
                <br />
                <br />
                <button className='bg-green-500 rounded-lg px-4 py-2 text-white text-3xl mt-2 mb-4 hover:bg-green-700' key={'submitted'} onClick={() => handleButtonSubmitted('submitted')}>Submit For Approval</button>

        </form>
    </div>
  )
}

export default Food