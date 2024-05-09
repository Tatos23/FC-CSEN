import React, { useEffect, useState } from 'react';
import Header from './Header'; // Import the Header component
import './Donationselect.css';

function Donationselect({ id }) {
 
  const [donations, setDonations] = useState([]);
  const [donation, setDonation] = useState({}); // Initialize donation state with an empty object
  const [quantity, setQuantity] = useState(1);

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
        
      });
  },[id]);

  switch (id) {
    case 1:
      return (
        <div className="Donationselect-main">
          <Header />
          <div className="Donationselect-container">
            {donation && (
              <>
              <div className="Donationselect-title">{donation.title}</div>
                <img
                  className="Donationselect-picture"
                  src={donation.picture}
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
                <button className="Donationselect-Donate">Donate</button>
              </>
            )}
          </div>
        </div>
      );
    case 2:
      return (
        <div className="Donationselect-main">
          <Header />
          <div className="Donationselect-container">
            {donation && (
              <>
              <div className="Donationselect-title">{donation.title}</div>
                <img
                  className="Donationselect-picture"
                  src={donation.picture}
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
                <button className="Donationselect-Donate">Donate</button>
              </>
            )}
          </div>
        </div>
      );

    case 3:
      return (
        <div className="Donationselect-main">
          <Header />
          <div className="Donationselect-container">
            {donation && (
              <>
              <div className="Donationselect-title">{donation.title}</div>
                <img
                  className="Donationselect-picture"
                  src={donation.picture}
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
                <button className="Donationselect-Donate">Donate</button>
              </>
            )}
          </div>
        </div>
      );case 4:
      return (
        <div className="Donationselect-main">
          <Header />
          <div className="Donationselect-container">
            {donation && (
              <>
              <div className="Donationselect-title">{donation.title}</div>
                <img
                  className="Donationselect-picture"
                  src={donation.picture}
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
                <button className="Donationselect-Donate">Donate</button>
              </>
            )}
          </div>
        </div>
      );case 5:
      return (
        <div className="Donationselect-main">
          <Header />
          <div className="Donationselect-container">
            {donation && (
              <>
              <div className="Donationselect-title">{donation.title}</div>
                <img
                  className="Donationselect-picture"
                  src={donation.picture}
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
                <button className="Donationselect-Donate">Donate</button>
              </>
            )}
          </div>
        </div>
      );case 6:
      return (
        <div className="Donationselect-main">
          <Header />
          <div className="Donationselect-container">
            {donation && (
              <>
              <div className="Donationselect-title">{donation.title}</div>
                <img
                  className="Donationselect-picture"
                  src={donation.picture}
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
                <button className="Donationselect-Donate">Donate</button>
              </>
            )}
          </div>
        </div>
      );case 7:
      return (
        <div className="Donationselect-main">
          <Header />
          <div className="Donationselect-container">
            {donation && (
              <>
              <div className="Donationselect-title">{donation.title}</div>
                <img
                  className="Donationselect-picture"
                  src={donation.picture}
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
                <button className="Donationselect-Donate">Donate</button>
              </>
            )}
          </div>
        </div>
      );case 8:
      return (
        <div className="Donationselect-main">
          <Header />
          <div className="Donationselect-container">
            {donation && (
              <>
              <div className="Donationselect-title">{donation.title}</div>
                <img
                  className="Donationselect-picture"
                  src={donation.picture}
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
                <button className="Donationselect-Donate">Donate</button>
              </>
            )}
          </div>
        </div>
      );case 9:
      return (
        <div className="Donationselect-main">
          <Header />
          <div className="Donationselect-container">
            {donation && (
              <>
              <div className="Donationselect-title">{donation.title}</div>
                <img
                  className="Donationselect-picture"
                  src={donation.picture}
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
                <button className="Donationselect-Donate">Donate</button>
              </>
            )}
          </div>
        </div>
      );case 10:
      return (
        <div className="Donationselect-main">
          <Header />
          <div className="Donationselect-container">
            {donation && (
              <>
              <div className="Donationselect-title">{donation.title}</div>
                <img
                  className="Donationselect-picture"
                  src={donation.picture}
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
                <button className="Donationselect-Donate">Donate</button>
              </>
            )}
          </div>
        </div>
      );case 11:
      return (
        <div className="Donationselect-main">
          <Header />
          <div className="Donationselect-container">
            {donation && (
              <>
              <div className="Donationselect-title">{donation.title}</div>
                <img
                  className="Donationselect-picture"
                  src={donation.picture}
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
                <button className="Donationselect-Donate">Donate</button>
              </>
            )}
          </div>
        </div>
      );case 12:
      return (
        <div className="Donationselect-main">
          <Header />
          <div className="Donationselect-container">
            {donation && (
              <>
              <div className="Donationselect-title">{donation.title}</div>
                <img
                  className="Donationselect-picture"
                  src={donation.picture}
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
                <button className="Donationselect-Donate">Donate</button>
              </>
            )}
          </div>
        </div>
      );case 13:
      return (
        <div className="Donationselect-main">
          <Header />
          <div className="Donationselect-container">
            {donation && (
              <>
              <div className="Donationselect-title">{donation.title}</div>
                <img
                  className="Donationselect-picture"
                  src={donation.picture}
                  alt="Book"
                />
                <div className="Donationselect-description">
                  Patient Name: {donation.name} <br></br>
                  Blood type: {donation.use} <br></br> Quantity : {donation.quantity}
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
                <button className="Donationselect-Donate">Donate</button>
              </>
            )}
          </div>
        </div>
      );case 10:
      return (
        <div className="Donationselect-main">
          <Header />
          <div className="Donationselect-container">
            {donation && (
              <>
              <div className="Donationselect-title">{donation.title}</div>
                <img
                  className="Donationselect-picture"
                  src={donation.picture}
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
                <button className="Donationselect-Donate">Donate</button>
              </>
            )}
          </div>
        </div>
      );case 10:
      return (
        <div className="Donationselect-main">
          <Header />
          <div className="Donationselect-container">
            {donation && (
              <>
              <div className="Donationselect-title">{donation.title}</div>
                <img
                  className="Donationselect-picture"
                  src={donation.picture}
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
                <button className="Donationselect-Donate">Donate</button>
              </>
            )}
          </div>
        </div>
      );case 10:
      return (
        <div className="Donationselect-main">
          <Header />
          <div className="Donationselect-container">
            {donation && (
              <>
              <div className="Donationselect-title">{donation.title}</div>
                <img
                  className="Donationselect-picture"
                  src={donation.picture}
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
                <button className="Donationselect-Donate">Donate</button>
              </>
            )}
          </div>
        </div>
      );case 10:
      return (
        <div className="Donationselect-main">
          <Header />
          <div className="Donationselect-container">
            {donation && (
              <>
              <div className="Donationselect-title">{donation.title}</div>
                <img
                  className="Donationselect-picture"
                  src={donation.picture}
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
                <button className="Donationselect-Donate">Donate</button>
              </>
            )}
          </div>
        </div>
      );case 10:
      return (
        <div className="Donationselect-main">
          <Header />
          <div className="Donationselect-container">
            {donation && (
              <>
              <div className="Donationselect-title">{donation.title}</div>
                <img
                  className="Donationselect-picture"
                  src={donation.picture}
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
                <button className="Donationselect-Donate">Donate</button>
              </>
            )}
          </div>
        </div>
      );case 10:
      return (
        <div className="Donationselect-main">
          <Header />
          <div className="Donationselect-container">
            {donation && (
              <>
              <div className="Donationselect-title">{donation.title}</div>
                <img
                  className="Donationselect-picture"
                  src={donation.picture}
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
                <button className="Donationselect-Donate">Donate</button>
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