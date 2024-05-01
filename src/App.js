import './App.css';
import HomePage from './components/HomePage.js';
import Landing from './components/landingpage/Landing.js';
import Hero from './components/Hero.jsx';
import Authentication from './components/authentication/Authentication.js';
function App() {
  return (
    <div className="App">
      {/* <Hero /> */}
      <Authentication role="Donor" />
      {/* <Landing /> */}
      {/* <HomePage /> */}

    </div>
  );
}

export default App;
