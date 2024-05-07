import './HomePage.css'; // Importing CSS for styling
import { Link } from 'react-router-dom';

const logo = "logo192.png";
const HomePage = () => {
    return (
        <div className="home-container">
            <header className='homepage-header'>
                <div className="logo">
                    <h1 className='header-title'> Welcome to Herzensbrücke </h1>
                    <img src={logo} alt="HomePage Logo" />

                </div>
            </header>

            <nav>
                <h2 style={{color: '#EDF6F1', fontWeight: 'bold',}}> Register/Login as </h2>
                <ul>
                    <li><Link to={"/admin-login"} href="#Admin">Admin</Link></li>

                    <li><Link to={"/donor-login"} href="#Donor">Donor</Link></li>

                    <li><Link to={"/representative-login"} href="#Org/Rep">Organization Representative</Link></li>
                </ul>
            </nav>


        </div>
    );
}

export default HomePage;

