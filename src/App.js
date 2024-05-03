import './App.css';
import Authentication from './components/authentication/Authentication.js'
import HomePage from './components/HomePage.js';
import NavigationL from './components/NavigationL.js';
import Landing from './components/landingpage/Landing.js';
import ORHome from './components/organization/ORHome.js';
import RequestPost from './components/organization/RequestPost.js';
function App() {
  return (
    <div className="App">
      <RequestPost />
      {/*<ORHome user = "Adham" role = "Rep"/>*/}
      {/* <Authentication role="Admin" /> */}
      {/* <Landing /> */}
      {/* <HomePage /> */}
      {/* <NavigationL/> */}
    </div>
  );
}

export default App;