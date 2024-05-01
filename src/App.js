import './App.css';
// import Authentication from './components/authentication/Authentication.js'
// import HomePage from './components/HomePage.js';
// import NavigationL from './components/NavigationL.js';
// import Landing from './components/landingpage/Landing.js';
import DocUpload from './components/authentication/DocUpload.js';

function App() {
  return (
    <div className="App">
      <DocUpload role = "representative"/>
      {/* <Authentication role="Donor" /> */}
      {/* <Landing/> */}
      {/* <HomePage /> */}
      {/* <NavigationL/> */}
    </div>
  );
}

export default App;