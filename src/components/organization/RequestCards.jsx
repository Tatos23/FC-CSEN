import React from 'react'
import Card from '../Card'
import { useState } from 'react' 

const RequestCards = () => {
    const [selectedOption, setSelectedOption,] = useState('');
    const handleSelectChange = (event)=> {setSelectedOption (event.target.option)};
  return (
    <div>
        <section class="py-4">
         <div class="container-xl lg:container m-auto">
             <Card bg='bg-gray-200'>
                <h2 className='text-2xl text-green-500'>Request Form </h2>
                <br/>
                <form>
                  <label>
                    Type of Request: 
                    <select value={selectedOption} onChange={handleSelectChange}>
                      <option value = "blood">Blood Donation</option>
                      <option value = "clothes">Clothes</option>
                      <option value = "food">Food</option>
                      <option value = "medical supplies">Medical Supplies</option>
                      <option value = "school supplies">School Supplies</option>
                      <option value = "toy">Toy</option>
                    </select>
                  </label>
                  <br/>
                  <label>Give A Brief Description About The Request</label>
                  <br/>
                  <input type="text"/>
                </form>
             </Card>
         </div>
        </section>
    </div>
  )
}

export default RequestCards