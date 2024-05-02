import { ImOpt } from 'react-icons/im';
import './App.css';
import Authentication from './components/authentication/Authentication.js'
// import HomePage from './components/HomePage.js';
// import NavigationL from './components/NavigationL.js';
// import Landing from './components/landingpage/Landing.js';
// import Hero from './components/Hero.jsx';
import AdminHomePage from './components/admin/admin_home_page/AdminHomePage.js';
function App() {
  return (
    <div className="App">
      {/* <AdminHomePage /> */}
      <Authentication role="Donor" />
      {/* <Landing /> */}
      {/* <HomePage /> */}
      {/* <NavigationL/> */}
    </div>
  );
}

export default App;