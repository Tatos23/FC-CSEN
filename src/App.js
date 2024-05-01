import './App.css';
import Authentication from './components/authentication/Authentication.js'
import HomePage from './components/HomePage.js';
import NavigationL from './components/NavigationL.js';

function App() {
  return (
    <div className="App">
      <Authentication role="Donor" />
      {/* <Landing/> */}
      {/* <HomePage /> */}
      {/* <NavigationL/> */}
    </div>
  );
}

export default App;