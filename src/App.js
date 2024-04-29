import './App.css';
import Authentication from './components/authentication/Authentication.js'
import HomePage from './components/HomePage.js';

function App() {
  return (
    <div className="App">
      <Authentication role="Admin" />
      {/* <HomePage /> */}
    </div>
  );
}

export default App;
