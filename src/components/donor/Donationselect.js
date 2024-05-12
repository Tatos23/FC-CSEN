import React, { useEffect, useState } from 'react';
import Header from './Header'; // Import the Header component
import './Donationselect.css';
import { useNavigate, useParams } from 'react-router-dom';

function Donationselect({role}) {
  const navigate = useNavigate();
  let { id } = useParams();
  const varID = parseInt(id);
  console.log(id);
  const [donations, setDonations] = useState([]);
  const [donation, setDonation] = useState({}); // Initialize donation state with an empty object
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState(false);

  const handleIncrement = () => {
    if (quantity < donation.quantity) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const filterItems = (data) => {
    const filteredData = data.find((item) => parseInt(item.id) === parseInt(id));
    setDonation(filteredData);


  };

  useEffect(() => {
    fetch('http://localhost:8000/donations')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setDonations(data);
        filterItems(data);
        setQuantity(1);
        
      });
  },[id]);

  switch (parseInt(id)) {
    case 1:
      return (
        <div className="Donationselect-main">
          <Header role="Donor" loggedIn={true}/>
          <div className="Donationselect-container">
            {donation && (
              <>
              <div className="Donationselect-title">{donation.title}</div>
                <img
                  className="Donationselect-picture"
                  src={`/${donation.picture}`}
                  alt="Book"
                />
                <div className="Donationselect-description">
                  Age: {donation.age} <br></br> Gender : {donation.gender}
                  <br></br> Season : {donation.season}<br></br> Material : {donation.material}
                  <br></br> Quantity : {donation.quantity}
                </div>
                <div className="Donationselect-counter">
                  <span className="Donationselect-label">Quantity:</span>
                  <button className="Donationselect-increment" onClick={handleDecrement}>
                    -
                  </button>
                  <span>{quantity}</span>
                  <button className="Donationselect-increment" onClick={handleIncrement}>
                    +
                  </button>
                </div>
                <button className="Donationselect-Donate" onClick={() => navigate('/pickup')}>Donate</button>
              </>
            )}
          </div>
        </div>
      );
    case 2:
      return (
        <div className="Donationselect-main">
          <Header role="Donor" loggedIn={true}/>
          <div className="Donationselect-container">
            {donation && (
              <>
              <div className="Donationselect-title">{donation.title}</div>
                <img
                  className="Donationselect-picture"
                  src={`/${donation.picture}`}
                  alt="Book"
                />
                <div className="Donationselect-description">
                  Age: {donation.age} <br></br> Gender : {donation.gender}
                  <br></br> Season : {donation.season}<br></br> Material : {donation.material}
                  <br></br> Quantity : {donation.quantity}
                </div>
                <div className="Donationselect-counter">
                  <span className="Donationselect-label">Quantity:</span>
                  <button className="Donationselect-increment" onClick={handleDecrement}>
                    -
                  </button>
                  <span>{quantity}</span>
                  <button className="Donationselect-increment" onClick={handleIncrement}>
                    +
                  </button>
                </div>
                <button className="Donationselect-Donate" onClick={() => navigate('/pickup')}>Donate</button>
              </>
            )}
          </div>
        </div>
      );

    case 3:
      return (
        <div className="Donationselect-main">
          <Header role="Donor" loggedIn={true}/>
          <div className="Donationselect-container">
            {donation && (
              <>
              <div className="Donationselect-title">{donation.title}</div>
                <img
                  className="Donationselect-picture"
                  src={`/${donation.picture}`}
                  alt="Book"
                />
                <div className="Donationselect-description">
                  Summary: {donation.summary} <br></br>
                  Name: {donation.name} <br></br> Author : {donation.author}
                  <br></br> Language : {donation.language}<br></br> Edition : {donation.edition}
                  <br></br> Quantity : {donation.quantity}
                </div>
                <div className="Donationselect-counter">
                  <span className="Donationselect-label">Quantity:</span>
                  <button className="Donationselect-increment" onClick={handleDecrement}>
                    -
                  </button>
                  <span>{quantity}</span>
                  <button className="Donationselect-increment" onClick={handleIncrement}>
                    +
                  </button>
                </div>
                <button className="Donationselect-Donate" onClick={() => navigate('/pickup')}>Donate</button>
              </>
            )}
          </div>
        </div>
      );case 4:
      return (
        <div className="Donationselect-main">
          <Header role="Donor" loggedIn={true}/>
          <div className="Donationselect-container">
            {donation && (
              <>
              <div className="Donationselect-title">{donation.title}</div>
                <img
                  className="Donationselect-picture"
                  src={`/${donation.picture}`}
                  alt="Book"
                />
                <div className="Donationselect-description">
                  Type: {donation.type} <br></br>
                  Quantity : {donation.quantity}
                </div>
                <div className="Donationselect-counter">
                  <span className="Donationselect-label">Quantity:</span>
                  <button className="Donationselect-increment" onClick={handleDecrement}>
                    -
                  </button>
                  <span>{quantity}</span>
                  <button className="Donationselect-increment" onClick={handleIncrement}>
                    +
                  </button>
                </div>
                <button className="Donationselect-Donate" onClick={() => navigate('/pickup')}>Donate</button>
              </>
            )}
          </div>
        </div>
      );case 5:
      return (
        <div className="Donationselect-main">
          <Header role="Donor" loggedIn={true}/>
          <div className="Donationselect-container">
            {donation && (
              <>
              <div className="Donationselect-title">{donation.title}</div>
                <img
                  className="Donationselect-picture"
                  src={`/${donation.picture}`}
                  alt="Book"
                />
                <div className="Donationselect-description">
                  Type: {donation.type} <br></br>
                  Age: {donation.age} <br></br> Gender : {donation.gender}
                  <br></br> Category : {donation.toycategory}
                  <br></br> Quantity : {donation.quantity}
                </div>
                <div className="Donationselect-counter">
                  <span className="Donationselect-label">Quantity:</span>
                  <button className="Donationselect-increment" onClick={handleDecrement}>
                    -
                  </button>
                  <span>{quantity}</span>
                  <button className="Donationselect-increment" onClick={handleIncrement}>
                    +
                  </button>
                </div>
                <button className="Donationselect-Donate" onClick={() => navigate('/pickup')}>Donate</button>
              </>
            )}
          </div>
        </div>
      );case 6:
      return (
        <div className="Donationselect-main">
          <Header role="Donor" loggedIn={true}/>
          <div className="Donationselect-container">
            {donation && (
              <>
              <div className="Donationselect-title">{donation.title}</div>
                <img
                  className="Donationselect-picture"
                  src={`/${donation.picture}`}
                  alt="Book"
                />
                <div className="Donationselect-description">
                  Type: {donation.type} <br></br>
                  Age: {donation.age} <br></br> Gender : {donation.gender}
                  <br></br> Category : {donation.toycategory}
                  <br></br> Quantity : {donation.quantity}
                </div>
                <div className="Donationselect-counter">
                  <span className="Donationselect-label">Quantity:</span>
                  <button className="Donationselect-increment" onClick={handleDecrement}>
                    -
                  </button>
                  <span>{quantity}</span>
                  <button className="Donationselect-increment" onClick={handleIncrement}>
                    +
                  </button>
                </div>
                <button className="Donationselect-Donate" onClick={() => navigate('/pickup')}>Donate</button>
              </>
            )}
          </div>
        </div>
      );case 7:
      return (
        <div className="Donationselect-main">
          <Header role="Donor" loggedIn={true}/>
          <div className="Donationselect-container">
            {donation && (
              <>
              <div className="Donationselect-title">{donation.title}</div>
                <img
                  className="Donationselect-picture"
                  src={`/${donation.picture}`}
                  alt="Book"
                />
                <div className="Donationselect-description">
                  Name: {donation.name} <br></br>
                  <br></br> Quantity : {donation.quantitykg}
                </div>
                <div className="Donationselect-counter">
                  <span className="Donationselect-label">Quantity in kg:</span>
                  <button className="Donationselect-increment" onClick={handleDecrement}>
                    -
                  </button>
                  <span>{quantity}</span>
                  <button className="Donationselect-increment" onClick={handleIncrement}>
                    +
                  </button>
                </div>
                <button className="Donationselect-Donate" onClick={() => navigate('/pickup')}>Donate</button>
              </>
            )}
          </div>
        </div>
      );case 8:
      return (
        <div className="Donationselect-main">
          <Header role="Donor" loggedIn={true}/>
          <div className="Donationselect-container">
            {donation && (
              <>
              <div className="Donationselect-title">{donation.title}</div>
                <img
                  className="Donationselect-picture"
                  src={`/${donation.picture}`}
                  alt="Book"
                />
                <div className="Donationselect-description">
                  Name: {donation.name} <br></br>
                  <br></br> Quantity : {donation.quantitykg}
                </div>
                <div className="Donationselect-counter">
                  <span className="Donationselect-label">Quantity in kg:</span>
                  <button className="Donationselect-increment" onClick={handleDecrement}>
                    -
                  </button>
                  <span>{quantity}</span>
                  <button className="Donationselect-increment" onClick={handleIncrement}>
                    +
                  </button>
                </div>
                <button className="Donationselect-Donate" onClick={() => navigate('/pickup')}>Donate</button>
              </>
            )}
          </div>
        </div>
      );case 9:
      return (
        <div className="Donationselect-main">
          <Header role="Donor" loggedIn={true}/>
          <div className="Donationselect-container">
            {donation && (
              <>
              <div className="Donationselect-title">{donation.title}</div>
                <img
                  className="Donationselect-picture"
                  src={`/${donation.picture}`}
                  alt="Book"
                />
                <div className="Donationselect-description">
                  Name: {donation.name} <br></br>
                  <br></br> Quantity : {donation.quantity}
                </div>
                <div className="Donationselect-counter">
                  <span className="Donationselect-label">Quantity :</span>
                  <button className="Donationselect-increment" onClick={handleDecrement}>
                    -
                  </button>
                  <span>{quantity}</span>
                  <button className="Donationselect-increment" onClick={handleIncrement}>
                    +
                  </button>
                </div>
                <button className="Donationselect-Donate" onClick={() => navigate('/pickup')}>Donate</button>
              </>
            )}
          </div>
        </div>
      );case 10:
      return (
        <div className="Donationselect-main">
          <Header role="Donor" loggedIn={true}/>
          <div className="Donationselect-container">
            {donation && (
              <>
              <div className="Donationselect-title">{donation.title}</div>
                <img
                  className="Donationselect-picture"
                  src={`/${donation.picture}`}
                  alt="Book"
                />
                <div className="Donationselect-description">
                  Type: {donation.type} <br></br>
                  Use: {donation.use} <br></br> Quantity : {donation.quantity}
                </div>
                <div className="Donationselect-counter">
                  <span className="Donationselect-label">Quantity:</span>
                  <button className="Donationselect-increment" onClick={handleDecrement}>
                    -
                  </button>
                  <span>{quantity}</span>
                  <button className="Donationselect-increment" onClick={handleIncrement}>
                    +
                  </button>
                </div>
                <button className="Donationselect-Donate" onClick={() => navigate('/pickup')}>Donate</button>
              </>
            )}
          </div>
        </div>
      );case 11:
      return (
        <div className="Donationselect-main">
          <Header role="Donor" loggedIn={true}/>
          <div className="Donationselect-container">
            {donation && (
              <>
              <div className="Donationselect-title">{donation.title}</div>
                <img
                  className="Donationselect-picture"
                  src={`/${donation.picture}`}
                  alt="Book"
                />
                <div className="Donationselect-description">
                  Type: {donation.type} <br></br>
                  Use: {donation.use} <br></br> Quantity : {donation.quantity}
                </div>
                <div className="Donationselect-counter">
                  <span className="Donationselect-label">Quantity:</span>
                  <button className="Donationselect-increment" onClick={handleDecrement}>
                    -
                  </button>
                  <span>{quantity}</span>
                  <button className="Donationselect-increment" onClick={handleIncrement}>
                    +
                  </button>
                </div>
                <button className="Donationselect-Donate" onClick={() => navigate('/pickup')}>Donate</button>
              </>
            )}
          </div>
        </div>
      );case 12:
      return (
        <div className="Donationselect-main">
          <Header role="Donor" loggedIn={true}/>
          <div className="Donationselect-container">
            {donation && (
              <>
              <div className="Donationselect-title">{donation.title}</div>
                <img
                  className="Donationselect-picture"
                  src={`/${donation.picture}`}
                  alt="Book"
                />
                <div className="Donationselect-description">
                  Type: {donation.type} <br></br>
                  Use: {donation.use} <br></br> Quantity : {donation.quantity}
                </div>
                <div className="Donationselect-counter">
                  <span className="Donationselect-label">Quantity:</span>
                  <button className="Donationselect-increment" onClick={handleDecrement}>
                    -
                  </button>
                  <span>{quantity}</span>
                  <button className="Donationselect-increment" onClick={handleIncrement}>
                    +
                  </button>
                </div>
                <button className="Donationselect-Donate" onClick={() => navigate('/pickup')}>Donate</button>
              </>
            )}
          </div>
        </div>
      );case 13:
      return (
        <div className="Donationselect-main">
          <Header role="Donor" loggedIn={true}/>
          <div className="Donationselect-container">
            {donation && (
              <>
              <div className="Donationselect-title">{donation.title}</div>
                <img
                  className="Donationselect-picture"
                  src={`/${donation.picture}`}
                  alt="Book"
                />
                <div className="Donationselect-description" style={{height:"180px"}}>
                  Patient Name: {donation.name} <br></br>
                  Blood type: {donation.bloodType} <br></br> Hospital Name : {donation.hospitalName}
                  <iframe className="Donationselect-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.2137924485046!2d31.27919757555103!3d29.973285274959583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583943bf2cc69b%3A0x9332e195d7e8ee57!2sAndalusia%20Hospital!5e0!3m2!1sen!2seg!4v1715277428174!5m2!1sen!2seg" ></iframe>
                </div>
               
                <button className="Donationselect-Donate" onClick={() => navigate('/pickup')}>Donate</button>
              </>
            )}
          </div>
        </div>
      );case 14:
      return (
        <div className="Donationselect-main">
          <Header role="Donor" loggedIn={true}/>
          <div className="Donationselect-container">
            {donation && (
              <>
              <div className="Donationselect-title">{donation.title}</div>
                <img
                  className="Donationselect-picture"
                  src={`/${donation.picture}`}
                  alt="Book"
                />
                <div className="Donationselect-description" style={{height:"180px"}}>
                  Patient Name: {donation.name} <br></br>
                  Blood type: {donation.bloodType} <br></br> Hospital Name : {donation.hospitalName}
                  <iframe className='Donationselect-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13810.761829307892!2d31.29768368715819!3d30.074406100000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583e362a73caf5%3A0xeef97f1d9f5d705!2sNasr%20City%20Hospital!5e0!3m2!1sen!2seg!4v1715282793293!5m2!1sen!2seg" ></iframe>
                </div>
               
                <button className="Donationselect-Donate" onClick={() => navigate('/pickup')}>Donate</button>
              </>
            )}
          </div>
        </div>
      );case 15:
      return (
        <div className="Donationselect-main">
          <Header role="Donor" loggedIn={true}/>
          <div className="Donationselect-container">
            {donation && (
              <>
              <div className="Donationselect-title">{donation.title}</div>
                <img
                  className="Donationselect-picture"
                  src={`/${donation.picture}`}
                  alt="Book"
                />
                <div className="Donationselect-description" style={{height:"200px"}}>
                  Subject: {donation.subject} <br></br>
                  Address: {donation.address} <br></br> Number of students : {donation.numberOfStudents}
                  <iframe  className='Donationselect-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.547319159817!2d31.4223650755529!3d30.021152074935387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583cde1a6c16cb%3A0x11d5349a2107f195!2sN%2090th%20Street%20-%20Service%20Ln%2C%20New%20Cairo%201%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1715284527316!5m2!1sen!2seg" ></iframe>
                </div>
                <button className="Donationselect-Donate" onClick={()=>role==='Teacher'?
                navigate('/pickup')
                :
                setMessage(true)} >
                  Donate
                </button>
                {message && <div className="Donationselect-message-div">
                  <p className="Donationselect-message"> Cannot donate to this request. Only a teacher is allowed</p>
                </div>}
              </>
            )}
          </div>
        </div>
      );case 16:
      return (
        <div className="Donationselect-main">
          <Header role="Donor" loggedIn={true}/>
          <div className="Donationselect-container">
            {donation && (
              <>
              <div className="Donationselect-title">{donation.title}</div>
                <img
                  className="Donationselect-picture"
                  src={`/${donation.picture}`}
                  alt="Book"
                />
                <div className="Donationselect-description" style={{height:"200px"}}>
                  Subject: {donation.subject} <br></br>
                  Address: {donation.address} <br></br> Number of students : {donation.numberOfStudents}
                  <iframe className='Donationselect-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d442166.9370651346!2d31.224348593880425!3d30.024542353658386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145822cffcd270e7%3A0x98b73d687889fd8!2sNew%20Cairo%20City%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1715285127497!5m2!1sen!2seg"></iframe>                </div>
                  <button className="Donationselect-Donate" onClick={()=>role==='Teacher'?
                navigate('/pickup')
                :
                setMessage(true)} >
                  Donate
                </button>
                {message && <div className="Donationselect-message-div">
                  <p className="Donationselect-message"> Cannot donate to this request. Only a teacher is allowed</p>
                </div>}
              </>
            )}
          </div>
        </div>
      );case 17:
      return (
        <div className="Donationselect-main">
          <Header role="Donor" loggedIn={true}/>
          <div className="Donationselect-container">
            {donation && (
              <>
              <div className="Donationselect-title">{donation.title}</div>
                <img
                  className="Donationselect-picture"
                  src={`/${donation.picture}`}
                  alt="Book"
                />
                <div className="Donationselect-description"style={{height:"200px"}}>
                Patient name: {donation.name} <br></br>
                Age: {donation.age} <br></br> Gender : {donation.gender}
                <br></br> Weight : {donation.weight}<br></br> Medical Speciality : {donation.medicalSpecialty}
                <br></br> Case Description : {donation.caseDescription}
                <iframe style={{left:"10%",bottom:"150px"}} className='Donationselect-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.768218997515!2d31.284885075550434!3d29.957344874967596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458383f12be6d3d%3A0x3aa0984dd84f3330!2sEl-Nasr%20Rd%2C%20Maadi%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1715285509655!5m2!1sen!2seg"></iframe>
                </div>

                <button className="Donationselect-Donate" onClick={()=>role==='Doctor'?
                navigate('/pickup')
                :
                setMessage(true)} >
                  Donate
                </button>
                {message && <div className="Donationselect-message-div">
                  <p className="Donationselect-message"> Cannot donate to this request. Only a doctor is allowed</p>
                </div>}
              </>
            )}
          </div>
        </div>
      );case 18:
      return (
        <div className="Donationselect-main">
          <Header role="Donor" loggedIn={true}/>
          <div className="Donationselect-container">
            {donation && (
              <>
              <div className="Donationselect-title">{donation.title}</div>
                <img
                  className="Donationselect-picture"
                  src={`/${donation.picture}`}
                  alt="Book"
                />
                <div className="Donationselect-description"style={{height:"200px"}}>
                  Patient name: {donation.name} <br></br>
                  Age: {donation.age} <br></br> Gender : {donation.gender}
                  <br></br> Weight : {donation.weight}<br></br> Medical Speciality : {donation.medicalSpecialty}
                  <br></br> Case Description : {donation.caseDescription}
                  <iframe style={{left:"10%",bottom:"150px"}} className='Donationselect-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.768218997515!2d31.284885075550434!3d29.957344874967596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458383f12be6d3d%3A0x3aa0984dd84f3330!2sEl-Nasr%20Rd%2C%20Maadi%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1715285509655!5m2!1sen!2seg"></iframe>
                </div>

                <button className="Donationselect-Donate" onClick={()=>role==='Doctor'?
                navigate('/pickup')
                :
                setMessage(true)} >
                  Donate
                </button>
                {message && <div className="Donationselect-message-div">
                  <p className="Donationselect-message"> Cannot donate to this request. Only a doctor is allowed</p>
                </div>}

              </>
            )}
          </div>
        </div>
      );
    default:
      return <div>Invalid ID</div>;
  }
}

export default Donationselect;