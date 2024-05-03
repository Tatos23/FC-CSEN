import './AdminHomePage.css';
function AdminHomePage({ username }) {
    return (
        <div className='body'>
            <div className='navbar'>
                <div className='leftside'>
                    <img className='logo-navbar' src='logo2.png' alt='logo'></img>
                    <img className='logo-navbar-name' src='name.png' alt='logo'></img>
                    <button className='donate-button' >Donate</button>
                </div>
                <div className='middleside'>
                    <button className='middleside-button' style={{ marginRight: '10%' }}>Home</button>
                    <button className='middleside-button' style={{ marginRight: '1%' }}>Donations</button>
                    <button className='middleside-button' style={{ marginLeft: '10%' }}>About Us</button>
                    <button className='middleside-button' style={{ marginLeft: '10%' }}>Categories</button>
                </div>
                <div className='rightside'>
                    <div >
                        <input class="search-container" type="text" placeholder="Search..."></input>
                    </div>

                    <button className='searchbutton'><img className='search-icon' src='searchicon.png' alt='logo'></img></button>
                    <button className='singin-up' >Login/Register</button>
                    <div className='quote'>"The best way to find yourself is to lose yourself in the service of others."
                    </div>


                </div>

            </div>

            <div className='nd'>lallalal</div>











        </div>
    )
}
export default AdminHomePage;