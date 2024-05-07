import React from 'react'
import { useState } from 'react'
import OrgTemp from './OrgTemp'
import Card from '../Card'
import { useNavigate } from 'react-router-dom'
import Tabs from './Tabs'
import Tab from './Tab'

const RepDon = ({children}) => {
    const navigate = useNavigate();
    const handleButtonReq = () =>{
        navigate('/request-post');
      }
   
  return (
    <div>
        <OrgTemp/>
        <Card bg = 'bg-gray-200 mr-60 ml-60'>
          <h2 class="text-2xl font-bold text-green-800">Request Section</h2>
            <p class="mt-2 mb-4 text-green-800">
              Request Donations For Your Organization
            </p>
            <button key={'request-post'} onClick={()=>handleButtonReq('request-post')} className="inline-block bg-cyan-500 text-white rounded-lg px-4 py-2 hover:bg-cyan-700">
              Post Requests
            </button>
         </Card>
         <br />
         <Tabs>
            <Tab label="On-Going Requests"> 
            <Card bg='bg-gray-200 mr-80 ml-80'>
                <h2 class="text-2xl font-bold text-green-800">Stationary Request</h2>
                <p style={{display:'inline'}} class="mt-2 mb-4 text-green-800">
                    Type: Pens <br />
                    Quantity: 20
                </p>
            </Card>

            </Tab>
            <Tab label="Completed Requests"> </Tab>
         </Tabs>
    </div>
  )
}

export default RepDon