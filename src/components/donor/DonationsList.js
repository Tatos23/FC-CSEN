
const DonationsList = ({donations, title, handleView }) => {
    return (
      <div className="donations-list">
        <h2>{ title }</h2>
        {donations.map(donation => (
          <div className="donation-preview" key={donation.id} >
            <h2 className="DonationsList-donation-preview-title">{ donation.title }</h2>
            <div className="donation-details">
            <p>
            Posted by {donation.author} | Category: {donation.category} | Quantity: {donation.quantity}
            </p>
            </div>
            {/* <p>Category: {donation.category}</p>
            <p>Quantity: {donation.quantity}</p> */}
            {/* <button className="view-button" onClick={() => handleDelete(blog.id)}>delete request</button> */}
            <button className="view-button" onClick={() => handleView(donation.id)}>view request</button>
          </div>
        ))}
      </div>
    );
  }
   
  export default DonationsList;