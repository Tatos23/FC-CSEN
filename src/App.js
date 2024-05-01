import './App.css';
import Login from './components/Login.js'
import HomePage from './components/HomePage.js';
<<<<<<< Updated upstream

function App() {
  return (
    <div className="App">
      <Login role="Admin" />
=======
import NavigationL from './components/NavigationL.js';
import Landing from './components/landingpage/Landing.js';
import Hero from './components/Hero.jsx';
import ORHome from './components/organization/ORHome.js';
import Navbar from './components/Navbar.jsx';
function App() {
  return (
    <div className="App">
      {/* <ORHome user = "Adham" role = "Rep"/> */}
      {/* <Navbar /> */}
      {/* <Hero /> */}
      <Authentication role="Donor" />
      {/* <Landing /> */}
>>>>>>> Stashed changes
      {/* <HomePage /> */}

    </div>
  );
}

export default App;
