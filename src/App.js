import './App.css';
import Authentication from './components/authentication/Authentication.js'
import HomePage from './components/HomePage.js';
import NavigationL from './components/NavigationL.js';
import Landing from './components/landingpage/Landing.js';
function App() {
  return (
    <div className="App">
      <Authentication role="Admin" />
      {/* <Landing/> */}
      {/* <HomePage /> */}
      {/* <NavigationL/> */}
    </div>
  );
}

export default App;