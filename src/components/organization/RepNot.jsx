import React from 'react'
import { useState } from 'react'
import OrgTemp from './OrgTemp'
import { useNavigate } from 'react-router-dom'
import './Floating-Form.css'
import Tabs from './Tabs'
import Tab from './Tab'
const RepNot = () => {
  const navigate = useNavigate();
  const [liner, setLiner] = useState([
    { id: 1, text1: 'Stationary Request', text2:'Type: Pens   Quantity: 20 '},       
  ]);
  const [module, setModule] = useState([
    { id: 1, text1: 'Toy Request', text2:'Type: Optimus Prime Figure   Quantity: 5 '},
    { id: 2, text1: 'Medical Case Request', text2:'Name: Ahmed Age:44 Male Weight: 70kgs Location: Cairo Address: Sheraton Organization-Name: El-Nozha-Medical Speciality-Required: Cardiology'},

  ]);
  
  const handleButtonDon = () =>{
    window.alert('Donor Details: \nName: Ahmed \nPhone: 01111111111 \nEmail:Ahmed.User@hotmail.com');
  } 
  const handleConfirmation = (id) => {
    <div>
      <h2 class="text-2xl font-bold text-green-800">That's all for now! </h2>
      <button key={'/ORHome'} onClick={()=>handleButton('/ORHome')} className="inline-block bg-cyan-500 text-white rounded-lg px-4 py-2 hover:bg-cyan-700"> Home </button>
      </div>
      if (window.confirm("By clicking 'ok' you will post the schedule for this request drop-off \nYou will be redirected to the home page")) {
      setLiner(liner.filter(liner => liner.id !== id));
      navigate('/org-home');
    }
    };
  const [showForm, setShowForm] = useState(false);
  const handleForm = () => {
    setShowForm(!showForm);
  }
  const handleButton = (url) => {
    navigate(url);
  }
  const handleButtonIg = (id) =>{
    setModule(module.filter(module => module.id !== id));
}
const handleButtonDoc = () =>{
  window.alert('Doctor Details: \nName: Nezam \nPhone: 0111111555444 \nEmail: Nezam.User@hotmail.com');
}
  
  
  function Liner ({id, text1, text2}) {
    return (
     <div>
        <div  className='bg-gray-200 mr-20 ml-20 rounded-md'>
        <h2 class="text-2xl font-bold text-green-800">{text1}</h2>
        <br />
        <p class="mt-2 mb-4 text-green-800"> {text2}</p>
        <br />
        <button className="inline-block bg-cyan-500 text-white rounded-lg px-4 py-2 hover:bg-cyan-700 mb-2 " onClick={()=>handleButtonDon()} >View Donor Details</button> 
        <br />
          <button className="inline-block bg-green-500 text-white rounded-lg px-4 py-2 hover:bg-green-700 mr-4 ml-2 mb-2" onClick={handleForm}>{showForm ? 'Close Schedule Form' : 'Schedule'}</button>
        {showForm && (
        <div className="floating-form">
          <form>
            <h1 class="text-2xl font-bold text-green-800">Schedule Drop-off</h1>
            <label>
              Location:
              <input type="url" style={{width:300, alignContent:'center' }} name="url-drop-off" placeholder='Enter your google maps location' required/>
            </label>
            <br />
            <label>
              Enter Date of Drop-off:
              <input type="Date" style={{width:300, alignContent:'center' }} name="date-drop-off" placeholder='Enter your google maps location' required/>
            </label>
            <br />
            <label>
              Enter Time of Drop-off:
              <input type="Time" style={{width:300, alignContent:'center', marginBottom: 5}} name="time-drop-off" placeholder='Enter your google maps location' required/>
            </label>
            <br />
            <button className="inline-block bg-green-500 text-white rounded-lg px-4 py-2 hover:bg-green-700 mr-4 ml-4" onClick={()=>handleConfirmation(id)}>Confirm</button>
          </form>
          </div>
      )}
      </div>
      
    </div> 
  );
  }
  function Module ({id, text1, text2}) {
    return (
     <div>
      <div  className='bg-gray-200 mr-20 ml-20 rounded-md'>
        <h2 class="text-2xl font-bold text-green-800">{text1}</h2>
        <br />
        <p class="mt-2 mb-4 text-green-800"> {text2}</p>
        <br />
        <button className="inline-block bg-cyan-500 text-white rounded-lg px-4 py-2 hover:bg-cyan-700 mb-2 " onClick={()=> (id==1) ? handleButtonDon() : handleButtonDoc()} >View Donor Details</button>
        <br />
        <button className="inline-block bg-red-500 text-white rounded-lg px-4 py-2 hover:bg-red-700 mr-4 ml-2 mb-2" onClick={()=>handleButtonIg(id)}>Ignore</button>
     </div>
     </div>
    );
  }


  return (
    <div>
        <OrgTemp/>
        <div>
        <h2 class="text-2xl font-bold text-green-800">Notifications</h2>
        <h2 class="text-xl text-green-800 mb-4">Your updates will be displayed here</h2>
        <Tabs>
          <Tab label={'To be Scheduled'}>
          <div>
                {liner.map(liner => (
                <Liner key={liner.id} id={liner.id} text1={liner.text1} text2={liner.text2} handleButton={handleForm}/>
                 ))}
                
            </div>
          </Tab>
          <Tab label={'Completed'}>
          {module.map(module => (
            <div className='mb-4'>
                <Module key={module.id} id={module.id} text1={module.text1} text2={module.text2} handleButton={handleButtonIg}/>
                </div>))}
          </Tab>
        </Tabs>
        </div>
    </div>
  )
}

export default RepNot;