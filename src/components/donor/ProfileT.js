import './profile.css'
import Profile from '../Profile';
import './Home.css'
import Header from './Header';
import { useNavigate } from 'react-router-dom';
function ProfileT(){
    const navigate = useNavigate();
    const handleButtonSave = () =>{
        if (window.confirm("You will now be redirected to the home page")) {
            navigate('/home-donor');
          }
      }
    const handleButtonDiscard = () =>{
    if (window.confirm("You will now be redirected to the home page")) {
        navigate('/home-donor');
      }
    }
    const handleButtonDelete = () =>{
      if (window.confirm("Are you sure you want to delete your account?")) {
          navigate('/home');
        }
      }


return(
<div>
    <Profile></Profile>
                <button className="inline-block bg-green-500 text-white rounded-lg px-4 py-2 hover:bg-green-700 mr-4 ml-4 mb-5" onClick={()=>handleButtonSave()}ick >Save Changes</button>
                <button className="inline-block bg-red-500 text-white rounded-lg px-4 py-2 hover:bg-red-700 mr-4 ml-4 mb-5" onClick={()=>handleButtonDiscard()} >Discard Changes</button>
                <br/>
                <br/>
                <button className="inline-block bg-red-500 text-white rounded-lg px-4 py-2 hover:bg-red-700 mr-4 ml-4 mb-5" onClick={()=>handleButtonDelete()} >Delete Account</button>


 </div>
)


}

export default ProfileT;