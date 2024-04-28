import './HomePage.css'; // Importing CSS for styling

const logo = "logo192.png";
const HomePage  = () => {
    return (
        <div className="container">
            <header>
                <div className="logo">
                
                    <img src={logo} alt="HomePage Logo" />
                    <h1> HerzensBrücke Home Page </h1>

                </div>
            </header>

            <nav>
                <ul>
                    <li><a href="#AdminSystem">Admin System</a></li>

                    <li><a href="#DonorSystem">Donor System</a></li>

                    <li><a href="#Org/RepSystem">Organization/Representative System</a></li>
                </ul>
            </nav>


        </div>
    );
}
 
export default HomePage;

