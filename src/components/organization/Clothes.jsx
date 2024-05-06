import React from 'react'
import { Link } from 'react-router-dom';
import OrgTemp from './OrgTemp';
import { useState } from 'react';

const Clothes = () => {
    const [selectedOption, setSelectedOption,] = useState('');
    const handleSelectChange = (event)=> {setSelectedOption (event.target.option)};
    const [selectedGender, setSelectedGender] = useState("");

    const handleChange = (event) => {
    setSelectedGender(event.target.value);
  };
 
  return (
    <div>
        <OrgTemp/>
        <form className='bg-gray-200 rounded-lg mr-20 ml-20' >
        <h2 className='text-2xl text-green-500'>Clothes Request Form </h2>
                <br/>
                <div style={{ display:'block', alignItems: 'center' }}>
                  <label className='text-2xl text-green-800 mr-20'>
                    Item Type:  
                    <select value={selectedOption} onChange={handleSelectChange} required>
                      <option value = "t-shirt">T-Shirt</option>
                      <option value = "pants">Pants</option>
                      <option value = "shoes">Shoes</option>
                      <option value = "jacket">Jacket</option>
                      <option value = "pullover">Pullover</option>
                      <option value = "skirt">Skirt</option>
                      <option value = "hoodie">Hoodie</option>
                      <option value = "dress">Dress</option>
                    </select>
                  </label>
                  </div>
                  <br />
                  <label style={{alignItems:'center'}} className='text-2xl text-green-800'> State the Gender:</label>
                  <br />
                    <label style={{display:'inline-table', alignItems:'center'}} className='text-2xl text-green-800 mr-20'>Male<input type="radio" id="male" value="male"  checked= {selectedGender === "male"} onChange={handleChange} /></label>
                    <label style={{display:'inline-table', alignItems:'center'}} className='text-2xl text-green-800'>Female<input type="radio" id="female" value="female" checked= {selectedGender === "female"} onChange={handleChange}/></label>    
                <br />
                <div style={{ display:'block', alignItems: 'center' }}>
                <label className='text-2xl text-green-800'>Suitable for age(s): </label>
                <input type="text"  style={{ maxWidth: '200px', maxHeight: '30px', textAlign:'center' }} placeholder='1 to 3/ 2 to 5/... etc.' required/>
                </div>
                <br />
                <div style={{ display:'block', alignItems: 'center' }}>
                <label className='text-2xl text-green-800'>Quantity: </label>
                <input type="number" max={"100"} onChange={(event)=> {const val = Math.min(event.target.value,100); event.target.value=val;
                  }} style={{ maxWidth: '100px', maxHeight: '30px', textAlign:'center' }}  required></input>
                </div>
                  <br />
                  <div style={{ display:'block', alignItems: 'center' }}>
                <label className='text-2xl text-green-800'>Season:
                <select value={selectedOption} onChange={handleSelectChange} required>
                      <option value = "autumn">Autumn</option>
                      <option value = "spring">Spring</option>
                      <option value = "summer">Summer</option>
                      <option value = "winter">Winter</option>
                      
                    </select>
                </label>
                </div>
                <br />
                <div style={{ display:'block', alignItems: 'center' }}>
                <label className='text-2xl text-green-800'>Material: </label>
                <input type="text"  style={{ maxWidth: '200px', maxHeight: '30px', textAlign:'center' }} placeholder="Cotton/Polyester/... etc." required />
                </div>
                <br />
                <br />
                  <button className='bg-green-500 rounded-lg px-4 py-2 text-white text-3xl mt-2 mb-4 hover:bg-green-700 '>Submit For Approval</button>

        </form>
    </div>
  )
}

export default Clothes