import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import OrgTemp from './OrgTemp';
import { useState } from 'react';
const Toy = () => {
  const navigate = useNavigate();
    const handleButtonSubmitted = () =>{
        navigate('/submitted');
      }
    const [selectedGender, setSelectedGender] = useState("");
    const handleChange = (event) => {
    setSelectedGender(event.target.value);
    };
    const handleFileChange = (e) => {
    if (e.target.files[0] && e.target.files[0].type !== 'image/*') {
        alert('Only images are allowed');
        e.target.value = ''; 
    }
}
  return (
    <div>
        <OrgTemp/>
        <form className='bg-gray-200 rounded-lg mr-20 ml-20'>
        <h2 className='text-2xl text-green-500'>Toy Request Form </h2>
                <br/>
                <div style={{ display:'block', alignItems: 'center' }}>
                <label className='text-2xl text-green-800'>Type of Toy: </label>
                <input type="text"  style={{ maxWidth: '200px', maxHeight: '30px', textAlign:'center' }} required/>
                </div>
                <br/>
                <div style={{ display:'block', alignItems: 'center' }}>
                <label className='text-2xl text-green-800'>Suitable for age(s): </label>
                <input type="text"  style={{ maxWidth: '200px', maxHeight: '30px', textAlign:'center' }} placeholder='1 to 3/ 2 to 5/... etc.' required/>
                </div>
                <br />
                <label style={{alignItems:'center'}} className='text-2xl text-green-800'> State the Gender:</label>
                  <br />
                    <label style={{display:'inline-table', alignItems:'center'}} className='text-2xl text-green-800 mr-20'>Male<input type="radio" id="male" value="male"  checked= {selectedGender === "male"} onChange={handleChange} /></label>
                    <label style={{display:'inline-table', alignItems:'center'}} className='text-2xl text-green-800'>Female<input type="radio" id="female" value="female" checked= {selectedGender === "female"} onChange={handleChange}/></label>    
                <br />
                <div style={{ display:'block', alignItems: 'center' }}>
                <label className='text-2xl text-green-800'>Category: </label>
                <input type="text"  style={{ maxWidth: '2000px', maxHeight: '3000px', textAlign:'center' }}/>
                </div>
                <br />
                <div style={{ display:'block', alignItems: 'center' }}>
                <label className='text-2xl text-green-800'>Quantity: </label>
                <input type="number" max={"10"} onChange={(event)=> {const val = Math.min(event.target.value,10); event.target.value=val;
                  }} style={{ maxWidth: '100px', maxHeight: '30px', textAlign:'center' }} placeholder='' required></input>
                </div>
                <br />
                <div className="Book-Img">
            <div className='Book-Img-Container'>
                <h1 className="Book-Img-Title">Upload an image of the toy(if possible)</h1>
                <input type="file" name="file"  className='Book-Img-document-input' onChange={handleFileChange}/>
            </div>
        </div>
                  <br />
                  <br />
                  <button className='bg-green-500 rounded-lg px-4 py-2 text-white text-3xl mt-2 mb-4 hover:bg-green-700' key={'submitted'} onClick={() => handleButtonSubmitted('submitted')}>Submit For Approval</button>

        </form>
    </div>
  )
}

export default Toy