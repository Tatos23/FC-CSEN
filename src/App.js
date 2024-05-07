import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Authentication from './components/authentication/Authentication.js'
import HomePage from './components/HomePage.js';
import Landing from './components/landingpage/Landing.js';
import ORHome from './components/organization/ORHome.js';
import RequestPost from './components/organization/RequestPost.js';
import AdminHomePage from './components/admin/admin_home_page/AdminHomePage.js';
import Home from './components/donor/Home.js';
import ViewRequests from './components/donor/ViewRequests.js';
import MainTemp from './components/MainTemp.js';
import Donationselect from './components/donor/Donationselect.js';
import Header from './components/donor/Header.js';
import PickUp from './components/donor/PickUp.js';
import DocUpload from './components/authentication/DocUpload.js';
import Blood from './components/organization/Blood.jsx';
import RequestButtons from './components/organization/RequestButtons.jsx';
import Book from './components/organization/Book.jsx';
import Clothes from './components/organization/Clothes.jsx';
import Toy from './components/organization/Toy.jsx';
import Stationary from './components/organization/Stationary.jsx';
import MedicalAssist from './components/organization/MedicalAssist.jsx';
import Tutorials from './components/organization/Tutorials.jsx';
import MedicalSupplies from './components/organization/MedicalSupplies.jsx';
import Submitted from './components/organization/Submitted.jsx';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ORHome />} />
          <Route path="/" element={<Donationselect />} />
          <Route path="/admin-home" element={<AdminHomePage />} />
          <Route path="/admin-login" element={<Authentication role="Admin" />} />
          <Route path="/donor-login" element={<Authentication role="Donor" />} />
          <Route path="/representative-login" element={<Authentication role="Representative"/>} />
          <Route path="home" element={<HomePage />} />
          <Route path="/organization-login" element={<Authentication role="organization" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/home-donor" element={<Home />} />
          <Route path="/donation-select" element={<Donationselect />} />
          <Route path="/blood" element={<Blood />} />
          <Route path="/book" element={<Book />} />
          <Route path="/clothes" element={<Clothes />} />
          <Route path="/toy" element={<Toy />} />
          <Route path="/station" element={<Stationary />} />
          <Route path="/med" element={<MedicalSupplies />} />
          <Route path="/assist" element={<MedicalAssist />} />
          <Route path="/tut" element={<Tutorials />} />
          <Route path="/request-post" element={<RequestPost />} /> 
          <Route path="/submitted" element={<Submitted/>}/>


        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;