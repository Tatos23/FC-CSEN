import '../admin/components/user-submission-card/UserSubmissionCard.css';

export default function UserSubmissionCard2({ usersData, setUsersData, user }) {

    const handleDeleteClick = () => {
        const updatedUsersData = usersData.filter(u => u.name !== user.name);
        setUsersData(updatedUsersData);
    };

    return (
        <div className='user-submission-card'>
            <div className='user-submission-card-body'>
                <div className='user-submission-card-left'>
                    <h2 className="user-submission-card-type">{user.type}</h2>
                    <h1 className="user-submission-card-name">{user.type == 'Donor' ? 'Username: ' : 'Organization name: '}{user.name}</h1>
                    <p className="user-submission-card-info">Contact Number: {user.contactNumber}</p>
                    <p className="user-submission-card-info">Email: {user.email}</p>
                    <p className="user-submission-card-info">Username: {user.username}</p>
                    {user.type === 'Donor' ? (
                        <>
                            <p className="user-submission-card-info">Gender: {user.gender}</p>
                            <p className="user-submission-card-info">Address: {user.address}</p>
                            <p className="user-submission-card-info">Donor Role: {user.donorRole}</p>
                        </>
                    ) : (
                        <>
                            <p className="user-submission-card-info">Organization Type: {user.organizationType}</p>
                            <p className="user-submission-card-info">Organization Address: {user.organizationAddress}</p>
                            <p className="user-submission-card-info">Organization Area: {user.organizationArea}</p>
                            <p className="user-submission-card-info">Organization Governorate: {user.organizationGovernorate}</p>
                            {/* <p className="user-submission-card-info">Google Maps URL: {user.googleMapsUrl}</p> */}
                        </>
                    )}
                </div>
                <div className='user-submission-card-right'>
                    <h2>Location</h2>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2690.5931365370516!2d-122.3365103073408!3d47.595155314487975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906aa3b9f1182b%3A0xa636cd513bba22dc!2sLumen%20Field!5e0!3m2!1sen!2seg!4v1715458131888!5m2!1sen!2seg" ></iframe>
                </div>
            </div>
            <div className='user-submission-card-footer'>
             
            </div>
        </div>
    )
}