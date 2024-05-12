import React from 'react'
import './PickUp.css'
import Header from './Header'
import LoginCard from '../authentication/LoginCard'
import { useState } from 'react'

function PickUp (){
    const [transporType, setTransporType] = useState('');
    const [date, setDate] = useState('');
    const [timeSlot, setTimeSlot] = useState('');

    return (
        <div className='PickUp'>
            <Header loggedIn={true} role="donor"/>
            <div className='PickUp-Container'>
                <h1 className='PickUp-Title'>Schedule Pick Up Information</h1>
                <h2 className='PickUp-SubTitle'>Please fill out the following information:</h2>
                <label className='PickUp-DateEntry-label'>Select the transportation type</label>
                <select
                    className="PickUp-transportation-select"
                    value={transporType}
                    onChange={e => setTransporType(e.target.value)}
                >
                    <option value="">Select Transportation Type</option>
                    <option value="car">Car</option>
                    <option value="motorcycle">Motorcycle</option>
                    <option value="truck">Truck</option>
                </select>
                <div className="PickUp-DateEntry"></div>
                <label className='PickUp-DateEntry-label'>Select the appropriate day</label>
                <input
                        type="date"
                        placeholder="Username"
                        className="PickUp-transportation-select"
                        required
                        value={date}
                        onChange={e => setDate(e.target.value)}
                        />
                <label className='PickUp-DateEntry-label'>Select the appropriate time slot</label>
                <select
                    className="PickUp-transportation-select"
                    value={timeSlot}
                    onChange={e =>setTimeSlot(e.target.value)}
                >
                    <option value="">Select Time Slot</option>
                    <option value="car">Morning (8am : 12pm)</option>
                    <option value="motorcycle">Afternoon (12pm : 7pm)</option>
                    <option value="truck">Evening (7pm : 11pm)</option>
                </select>

                <button className='PickUp-Submit'>Submit</button>
                
            </div>
        </div>
        
    )
}

export default PickUp