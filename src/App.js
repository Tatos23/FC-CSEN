import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Authentication from './components/authentication/Authentication.js';
import HomePage from './components/HomePage.js';
import Landing from './components/landingpage/Landing.js';
import AdminHomePage from './components/admin/admin_home_page/AdminHomePage.js';
import Home from './components/donor/Home.js';
import Donationselect from './components/donor/Donationselect.js';
import AdminDashBoard from './components/admin/admin-dashboard/AdminDashBoard.js';
import AdminUsers from './components/admin/admin-users/AdminUsers';
import Requests from './components/admin/requests/Requests.js';
import UserSubmissions from './components/admin/user-submissions/UserSubmissions.js';
import Header from './components/donor/Header.js';
import PickUp from './components/donor/PickUp.js';
import DocUpload from './components/authentication/DocUpload.js';
import EtaSection from './components/donor/EtaSection.js';
import Blood from './components/organization/Blood.jsx';
import Book from './components/organization/Book.jsx';
import Notifications from './components/Notifications.js';
import ViewRequests from './components/donor/ViewRequests.js';
import RegisterCard from './components/authentication/RegisterCard.js';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Donationselect id={18}/>} />
          <Route path="/admin-dashboard" element={<AdminDashBoard />} >
            <Route index element={<AdminHomePage />} />
            <Route path="system-users" element={<AdminUsers />} />
            <Route path="user-submissions" element={<UserSubmissions />} />
            <Route path="requests" element={<Requests />} />
          </Route>
          <Route path="/admin-login" element={<Authentication role="Admin" />} />
          <Route path="/donor-login" element={<Authentication role="Donor" />} />
          <Route path="/representative-login" element={<Authentication role="Representative" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/home-donor" element={<Home />} />
          <Route path="/donation-select" element={<Donationselect />} />
          <Route path="/blood" element={<Blood />} />
          <Route path="/book" element={<Book />} />
          <Route path="/view-requests" element={<ViewRequests />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/Donor-document-upload" element={<DocUpload role={"Donor"} />} />
          <Route path="/Representative-document-upload" element={<DocUpload role={"Representative"} />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;