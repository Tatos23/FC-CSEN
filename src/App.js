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
import EtaSection from './components/donor/EtaSection.js';
import Blood from './components/organization/Blood.jsx';
import RequestButtons from './components/organization/RequestButtons.jsx';
import Book from './components/organization/Book.jsx';
import Clothes from './components/organization/Clothes.jsx';
import Toy from './components/organization/Toy.jsx';
import Stationary from './components/organization/Stationary.jsx';
import MedicalSupplies from './components/organization/MedicalSupplies.jsx';  
import MedicalAssist from './components/organization/MedicalAssist.jsx';
import Tutorials from './components/organization/Tutorials.jsx';
import Submitted from './components/organization/Submitted.jsx';
import OrgTemp from './components/organization/OrgTemp.js';
import Notifications from './components/Notifications.js';
import DonationsList from './components/donor/DonationsList.js';
import RepDon from './components/organization/RepDon.jsx';
import RepNot from './components/organization/RepNot.jsx';
import Food from './components/organization/Food.jsx';
import AdminDashBoard from './components/admin/admin-dashboard/AdminDashBoard.js';
import AdminUsers from './components/admin/admin-users/AdminUsers.js';
import UserSubmissions from './components/admin/user-submissions/UserSubmissions.js';
import Requests from './components/admin/requests/Requests.js';




function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Requests/>} /> */}
          <Route index element={<Notifications role="Representative"/>} />
          <Route path="/admin-dashboard" element={<AdminDashBoard />} />
          <Route path="system-users" element={<AdminUsers />} />
          <Route path="user-submissions" element={<UserSubmissions />} />
          <Route path="requests" element={<Requests />} />
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
          <Route path="/view-requests" element={<ViewRequests/>} />
          <Route path="/notifications" element={<Notifications/>} />
          <Route path="/clothes" element={<Clothes />} />
          <Route path="/toy" element={<Toy />} />
          <Route path="/station" element={<Stationary />} />
          <Route path="/food" element={<Food />} />
          <Route path="/med" element={<MedicalSupplies />} />
          <Route path="/assist" element={<MedicalAssist />} />
          <Route path="/tut" element={<Tutorials />} />
          <Route path="/request-post" element={<RequestPost />} /> 
          <Route path="/submitted" element={<Submitted/>}/>
          <Route path="/org-home" element={<ORHome />} />
          <Route path="/rep-don" element={<RepDon />} />
          <Route path="/rep-notifications" element={<RepNot />} />



        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;