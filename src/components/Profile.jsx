import React from 'react'
import { useState } from 'react'
const Profile = () => {
    const [selectedGender, setSelectedGender] = useState("");
    const handleChange = (event) => {
    setSelectedGender(event.target.value);
  };
  return (
    <div>
        <h1 style={{fontFamily:'Roboto'}}  class="text-Roboto text-2xl font-bold text-green-800">Profile</h1>
        <div> 
            <div >
            <div class="bg-gray-200 rounded-lg mr-20 ml-20 mb-5">
            <img style={{ display:'block', height:'auto' , width:200, marginLeft:'44.5%'   }}  className="ml-80 mr-80 "  src='profileEnhanced.png' alt="profile" ></img>
                <br />
                <label class="text-green-800 text-lg mt-4">First Name:
                <input type="text" style={{width:300, alignContent:'center', fontFamily:'Roboto' }} name="firstname" className='ml-2 mb-2 mt-2' placeholder='Enter your first name' required/>
                </label>
                <br />
                <label class="text-green-800 text-lg mt-4">Last Name:
                <input type="text" style={{width:300, alignContent:'center', fontFamily:'Roboto'  }} name="lastname" className='ml-2 mb-2 mt-2' placeholder='Enter your last name' required/>
                </label>
                <div style={{alignContent:'center'}}>
                <h2 class="text-green-800 text-2xl mt-4 ml-3">State Your Gender </h2>
                <br />
                <label style={{display:'inline-table', alignItems:'center', fontFamily:'Roboto' }} className='text-2xl text-green-800 ml-12 mr-20'>Male<input type="radio" id="male" value="male"  checked= {selectedGender === "male"} onChange={handleChange} /></label>
                <label style={{display:'inline-table', alignItems:'center', fontFamily:'Roboto' }} className='text-2xl text-green-800'>Female<input type="radio" id="female" value="female" checked= {selectedGender === "female"} onChange={handleChange}/></label>    
                </div>
                <br />
                <label class="text-green-800 text-lg mt-4 ml-12">Email:
                <input type="email" style={{width:300, alignContent:'center', fontFamily:'Roboto'  }} name="email" className='ml-2 mb-2 mt-2' placeholder='Enter your email' required/>
                </label>
                <br />
                <label class="text-green-800 text-lg mt-4 mr-5">Old Password:
                <input type="text" style={{width:300, alignContent:'center', fontFamily:'Roboto'  }} name="old-pass" className='ml-2 mb-2 mt-2' placeholder='Enter your old password' required/>
                </label>
                <br />
                <label class="text-green-800 text-lg mt-4 mr-5">New Password:
                <input type="text" style={{width:300, alignContent:'center', fontFamily:'Roboto'  }} name="new-pass" className='ml-1 mb-2 mt-2' placeholder='Enter your new password' required/>
                </label>
                <br />
                <label class="text-green-800 text-lg mt-4 mr-10">Contact Number:
                <input type='tel' style={{width:300, alignContent:'center', fontFamily:'Roboto'}} name="number" className='ml-2 mb-2 mt-2' placeholder='Enter your contact number' required/>
                </label>
                <br />
                <label class="text-green-800 text-lg mt-4 ml-14">Area:
                <input type="text" style={{width:300, alignContent:'center', fontFamily:'Roboto'}} name="area" className='ml-2 mb-2 mt-2' placeholder='Enter your area' required/>
                </label>
                <br />
                <label class="text-green-800 text-lg mt-4 ml-3">Governate:
                <input type="text" style={{width:300, alignContent:'center', fontFamily:'Roboto'}} name="gov" className='ml-2 mb-2 mt-2' placeholder='Enter your gov' required/>
                </label>
                <br />
            </div>
            </div>
        </div>
    </div>
  )
}

export default Profile