import './landing.css';
function Landing(){
return(
    <>
    <div className='navbar'>
        <div className='leftside'>
            <img className='logo-navbar'src='logo512.png' alt='logo'></img>
            
        </div>
        <div className='middleside'>
            <button className='middleside-button'style={{ marginRight: '0.5%' }}>Home</button>   
            <button className='middleside-button'style={{ marginRight: '1%' }}>Donations</button>
            <button className='middleside-button'style={{ marginLeft: '4%' }}>Categories</button>

        </div>
        <div className='rightside'>
        <button className='searchbutton'><img className='search-icon'src='searchicon.png' alt='logo'></img></button>
        <button className='singin-up'>signin/up</button>
        
        </div>
        
    </div>
    <div><img src='R.jpeg' className='homephoto'></img></div>
    
    
    
    
    
    
    
    
    </>
)
}
export default Landing;