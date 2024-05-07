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
    const handleButtonStat=()=>{
        navigate('/station');
    }
    const [isVisible, setIsVisible]  = useState(true);

    const handleButtonDelete=()=>{
        const userResponse = window.confirm("Are you sure you want to delete this request?");
        if (userResponse) {
            setIsVisible(false);
        }
    };
    const handleButtonTut=()=>{
        navigate('/tut');
    }
    const handleButtonBlood = () =>{
        navigate('/blood');
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
            <div>
                {isVisible&& (
            <Card bg='bg-gray-200 mb-2 mr-80 ml-80'>
                <h2 class="text-2xl font-bold text-green-800">Stationary Request</h2>
                <p style={{display:'inline'}} class="mt-2 mb-4 text-green-800">
                    Type: Pens <br />
                    Quantity: 20
                </p>
                <br />
                <button className="inline-block bg-cyan-500 text-white rounded-lg px-4 py-2 hover:bg-cyan-700 mr-5" onClick={()=>handleButtonStat('station')} >Edit</button> 
                <button className="inline-block bg-red-500 text-white rounded-lg px-4 py-2 hover:bg-red-700" onClick={handleButtonDelete}>Delete</button>
            </Card>)}
            </div>
            <div>
                {isVisible&& (
            <Card bg='bg-gray-200 mb-2 mr-80 ml-80'>
                <h2 class="text-2xl font-bold text-green-800">Blood Request</h2>
                <p style={{display:'ruby-base-container'}} class="mr-8 ml-10 mt-2 mb-4 text-green-800">
                    Name: Ali  Type: O+
                    Hospital: El Nozha Area: Sheraton Gov: Cairo Quantity: 6   
                </p>
                <br />
                <button className="inline-block bg-cyan-500 text-white rounded-lg px-4 py-2 hover:bg-cyan-700 mr-5" onClick={()=>handleButtonBlood('blood')} >Edit</button> 
                <button className="inline-block bg-red-500 text-white rounded-lg px-4 py-2 hover:bg-red-700" onClick={handleButtonDelete}>Delete</button>
            </Card>)}
            </div>
            <div>
                {isVisible&& (
            <Card bg='bg-gray-200 mr-80 ml-80'>
                <h2 class="text-2xl font-bold text-green-800">Tutor Request</h2>
                <p style={{display:'inline'}} class="mt-2 mb-4 text-green-800">
                    Students: 50 Addres: 6th of October City subjects: Math
                </p>
                <br />
                <button className="inline-block bg-cyan-500 text-white rounded-lg px-4 py-2 hover:bg-cyan-700 mr-5" onClick={()=>handleButtonTut('tut')} >Edit</button> 
                <button className="inline-block bg-red-500 text-white rounded-lg px-4 py-2 hover:bg-red-700" onClick={handleButtonDelete}>Delete</button>
            </Card>)}
            </div>
            </Tab>
            <Tab label="Completed Requests"> </Tab>
         </Tabs>
    </div>
  )
}

export default RepDon