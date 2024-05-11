import './profile.css'
import './Home.css'
import Header from './Header';
function Profile(){


return(
    <>
    <div className='profile-main'>
        <Header></Header>
        <div className='profile-background'>
        </div>
        <div className='profile-container'>
            <div className='profile-username'>
                User name
            </div>
            <div className='Profile-user-details'>
                Name : the first and last<br></br>
                

            </div>
        </div>
        <img className='profile-image'src='profileEnhanced.png' alt='logo'></img>
    </div>
    
    
    
    
    </>
)


}

export default Profile;