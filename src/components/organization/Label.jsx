import React, { useState } from 'react';
import Card from '../Card';

const Label = ({ id, text1, text2, handleDelete, handleButtonDon}) => {
    const [buttonText, setButtonText] = useState('Acknowledge Donor Efforts');
    const handleButtonAck = () => {
        setButtonText('Acknowledged!');
    }
  return (
    <div>
      <Card bg = 'bg-gray-200 mr-80 ml-80 mb-2'>
      <h2 class="text-2xl font-bold text-green-800">{text1}</h2>
      <br />
      <p class="mt-2 mb-4 text-green-800"> {text2}</p>
      <br />
      <button className="inline-block bg-cyan-500 text-white rounded-lg px-4 py-2 hover:bg-cyan-700 mb-2 ml-5" onClick={()=>handleButtonDon()} >View Donor Details</button> 
      <br />
      <button className="inline-block bg-green-500 text-white rounded-lg px-4 py-2 hover:bg-green-700 mr-4" onClick={handleButtonAck} >{buttonText}</button> 
      <button className="inline-block bg-red-500 text-white rounded-lg px-4 py-2 hover:bg-red-700 mb-2" onClick={() => handleDelete(id)}>Delete</button>
      </Card>
    </div>
  );
};
export default Label;