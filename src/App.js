import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Authentication from './components/authentication/Authentication.js'
import HomePage from './components/HomePage.js';
import Landing from './components/landingpage/Landing.js';
import AdminHomePage from './components/admin/admin_home_page/AdminHomePage.js';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/admin-home" element={<AdminHomePage />} />
          <Route path="/admin-login" element={<Authentication role="Admin" />} />
          <Route path="/donor-login" element={<Authentication role="Donor" />} />
          <Route path="/organization-login" element={<Authentication role="organization" />} />
          <Route path="home" element={<HomePage />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;