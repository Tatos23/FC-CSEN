import './HomePage.css'; // Importing CSS for styling

const logo = "logo192.png";
const HomePage  = () => {
    return (
        <div className="container">
            <header className='homepage-header'>
                <div className="logo">
                    <h1 className='header-title'> Welcome to Herzensbrücke </h1>
                    <img src={logo} alt="HomePage Logo" />

                </div>
            </header>

            <nav>
                <h2> Register/Login as </h2>
                <ul>
                    <li><a href="#Admin">Admin</a></li>

                    <li><a href="#Donor">Donor</a></li>

                    <li><a href="#Org/Rep">Organization/Representative</a></li>
                </ul>
            </nav>


        </div>
    );
}
 
export default HomePage;

