import React from 'react'
import OrgTemp from './OrgTemp'
import Hero from '../Hero'
import { useNavigate } from 'react-router-dom'

const Submitted = () => {
    const navigate = useNavigate();
    const handleButtonDon = () =>{
        navigate('/rep-donations');
      }

  return (
    <div>
        <OrgTemp/>
        <h1 className='bg-gray-400 mt-20 mr-20 ml-20 font-extrabold text-4xl'>Your Request Has Been Submitted For Approval ! </h1>
        <h2 className='bg-gray-400 mr-20 ml-20 font-extrabold text-2xl'>Pressing the button below will redirect you to the donations page </h2>
        <br />
        <br />
        <button className='bg-cyan-500 rounded-lg px-4 py-2 text-white text-3xl mt-2 mb-4 hover:bg-cyan-700' key={'rep-donations'} onClick={() => handleButtonDon('rep-donations')}>Donations</button>
    </div>
  )
}

export default Submitted