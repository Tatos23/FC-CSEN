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
import { useEffect } from 'react';
import DocUpload from './components/authentication/DocUpload.js';
import Blood from './components/organization/Blood.jsx';
import RequestButtons from './components/organization/RequestButtons.jsx';
import Book from './components/organization/Book.jsx';
import DonationsList from './components/donor/DonationsList.js';
function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RequestPost />} />
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

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;