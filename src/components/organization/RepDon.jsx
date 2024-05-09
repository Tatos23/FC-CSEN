import React from 'react'
import { useState } from 'react'
import OrgTemp from './OrgTemp'
import Card from '../Card'
import { useNavigate } from 'react-router-dom'
import Tabs from './Tabs'
import Tab from './Tab'
import Labe from './Labe'
import Label from './Label'

const RepDon = ({children}) => {
    const navigate = useNavigate();
    const handleButtonReq = () =>{
        navigate('/request-post');
      }


    const [labe, setLabe] = useState([
        { id: 1, text1: 'Stationary Request', text2:'Type: Pens Quantity: 20 ' ,url:'/station' },
        { id: 2, text1: 'Blood Request', text2: 'Name: Ali Type: O+ Hospital: El Nozha Area: Sheraton Gov: Cairo Quantity: 6', url:'/blood' },
        { id: 3, text1: 'Tutor Request' ,text2:'Students: 50 Addres: 6th of October City Subjects: Math' ,url:'/tut' },
        // Add more labels as needed
      ]);
      const [label, setLabel] = useState([
        { id: 1, text1: 'Stationary Request', text2:'Type: Pens   Quantity: 20 '},
        
        // Add more labels as needed
      ]);
   
      const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this Request?")) {
          setLabe(labe.filter(labe => labe.id !== id));
        }
        };
        const handleDeleteOnTab = (id) => {
          if (window.confirm("Are you sure you want to remove this Fulfilled Request?")) {
            setLabel(label.filter(label => label.id !== id));
          }
          };
    const handleButton = (url) => {
        if(url==='/station')
        navigate(url);
        else if(url==='/blood')
        navigate('/blood');
        else if(url==='/tut')
            navigate('/tut');
      };

    const handleButtonDon = () =>{
      window.alert('Donor Details: \nName: Ahmed \nPhone: 01111111111 \nEmail:Ahmed.User@hotmail.com');
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
                {labe.map(labe => (
                <Labe key={labe.id} id={labe.id} text1={labe.text1} text2={labe.text2} handleDelete={handleDelete} handleButton={handleButton} url={labe.url}/>
                 ))}
            </div>
            </Tab>
            <Tab label="Completed Requests">
            <div>
                {label.map(label => (
                <Label key={label.id} id={label.id} text1={label.text1} text2={label.text2} handleDelete={handleDeleteOnTab} handleButtonDon={handleButtonDon}/>
                 ))}
            </div>
            </Tab>
         </Tabs>
    </div>
  )
}

export default RepDon