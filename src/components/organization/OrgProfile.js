import React from 'react';
import OrgTemp from './OrgTemp';
import Profile from '../Profile';
import { useNavigate } from 'react-router-dom';
function OrgProfile () {
    const navigate = useNavigate();
    const handleButtonSave = () =>{
        if (window.confirm("You will now be redirected to the home page")) {
            navigate('/org-home');
          }
      }
    const handleButtonDiscard = () =>{
    if (window.confirm("You will now be redirected to the home page")) {
        navigate('/org-home');
      }
    }
    return (
      <div>
          <OrgTemp />
          <Profile />
          <h1 style={{fontFamily:'Roboto'}}  class="text-Roboto text-2xl font-bold text-green-800">Organization Details</h1>
          <div class="bg-gray-200 rounded-lg mr-20 ml-20 mb-5">
          <label class="text-green-800 text-lg ml-4 mt-4">Organization Name:
            <input type="text" style={{width:300, alignContent:'center', fontFamily:'Roboto' }} name="orgname" className='ml-2 mb-2 mt-2' placeholder='Enter your organization name' required/>
            </label>
            <br />
            <label class="text-green-800 text-lg ml-6 mt-4">Organization Type:
            <input type="text" style={{width:300, alignContent:'center', fontFamily:'Roboto' }} name="orgtype" className='ml-2 mb-2 mt-2' placeholder='Enter your organization type' required/>
            </label>
            <br /><label class="text-green-800 text-lg mt-4">Organization Address:
            <input type="url" style={{width:300, alignContent:'center', fontFamily:'Roboto' }} name="orgadd" className='ml-2 mb-2 mt-2' placeholder='Enter your google maps link' required/>
            </label>
            <br />
          </div>

          <button className="inline-block bg-green-500 text-white rounded-lg px-4 py-2 hover:bg-green-700 mr-4 ml-4 mb-5" onClick={()=>handleButtonSave()}ick >Save Changes</button>
          <button className="inline-block bg-red-500 text-white rounded-lg px-4 py-2 hover:bg-red-700 mr-4 ml-4 mb-5" onClick={()=>handleButtonDiscard()} >Discard Changes</button>
      </div>

    );
  }
export default OrgProfile;