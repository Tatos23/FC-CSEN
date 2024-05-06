import React from 'react'
import Card from '../Card'
import { useState } from 'react' 

const RequestCards = ({}) => {
    const [selectedOption, setSelectedOption,] = useState('');
    const handleSelectChange = (event)=> {setSelectedOption (event.target.option)};
  return (
    <div>
        <section className="py-4">
         <div className="container-md lg:container m-auto">
             <form className='bg-gray-200 rounded-lg'>
             
                <h2 className='text-2xl text-green-500'>Request Form </h2>
                <br/>
                <div style={{ display:'block', alignItems: 'center' }}>
                <label className='text-2xl text-green-800'>Title: </label>
                <input type="text"  style={{ maxWidth: '200px', maxHeight: '30px', textAlign:'center' }} placeholder=" Blood/Clothes/... etc. " required/>
                </div>
                <br />
                <div style={{ display:'block', alignItems: 'center' }}>
                <label className='text-2xl text-green-800'>Quantity: </label>
                <input type="number" max={"10"} onChange={(event)=> {const val = Math.min(event.target.value,100); event.target.value=val;
                  }} style={{ maxWidth: '100px', maxHeight: '30px', textAlign:'center' }} placeholder="" required></input>
                </div>
                <br />
                <div style={{ display:'block', alignItems: 'center' }}>
                  <label className='text-2xl text-green-800 mr-20'>
                    Type of Request:  
                    <select value={selectedOption} onChange={handleSelectChange} required>
                      <option value = "blood">Blood Donation</option>
                      <option value = "clothes">Clothes</option>
                      <option value = "food">Food</option>
                      <option value = "medical supplies">Medical Supplies</option>
                      <option value = "school supplies">School Supplies</option>
                      <option value = "toy">Toy</option>
                    </select>
                  </label>
                  </div>
                  <br />
                  <div style={{ display:'block', alignItems: 'center' }}>
                  <label className='text-2xl text-green-800'>Suitable for age(s):</label>
                  <input type="text"  style={{ maxWidth: '100px', maxHeight: '30px', textAlign: 'center'   }} placeholder="1 to 4/3 to 5"required/>
                  </div>
                  <br />
                  <br />
                  <br />
                  <button className='bg-green-300 rounded-lg px-4 py-2 text-white text-3xl mt-2 mb-4 hover:bg-green-700 '>Submit Request</button>
                  
             </form>
         </div>
        </section>
    </div>
  )
}

export default RequestCards
//title quantity age category 