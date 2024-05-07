import React from 'react'
import Card from '../Card'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const ORCards = () => {
  const navigate = useNavigate();
    const handleButtonReq = () =>{
        navigate('/request-post');
      }
      const handleButtonRepNot = () =>{
        navigate('/rep-notifications');
      }
  return (
    <section class="py-4">
      <div class="container-xl lg:container m-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <Card bg = 'bg-gray-200'>
          <h2 class="text-2xl font-bold text-green-800">Request Section</h2>
            <p class="mt-2 mb-4 text-green-800">
              Request Donations For Your Organization
            </p>
            <button key={'request-post'} onClick={()=>handleButtonReq('request-post')} className="inline-block bg-cyan-500 text-white rounded-lg px-4 py-2 hover:bg-cyan-700">
              Post Requests
            </button>
         </Card>   
        <Card bg = 'bg-gray-200'>
          <h2 class="text-2xl font-bold text-green-800">Notifications Section</h2>
            <p class="mt-2 mb-4 text-green-800">
              See Your Notifications On Previous Requests
            </p>
            <button key={'rep-notifications'} onClick={()=>handleButtonRepNot('rep-notifications')} className="inline-block bg-cyan-500 text-white rounded-lg px-4 py-2 hover:bg-cyan-700">
              Check Notifications
            </button>
          </Card>  
        </div>
      </div>
    </section>
  )
}

export default ORCards