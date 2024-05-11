import './UserSubmissionCard.css';

export default function UserSubmissionCard({ usersData, setUsersData, user }) {

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
                    <h2>Documents</h2>
                    {(user.type === 'Donor' && (user.donorRole === 'Doctor' || user.donorRole === 'Teacher')) || user.type === 'Organization' ? (
                        <label >1: <a href={`${process.env.PUBLIC_URL}/project-test.pdf`} download>Download project-test.pdf</a></label>
                    ) : (
                        <p>No documents available</p>
                    )}
                </div>
            </div>
            <div className='user-submission-card-footer'>
                <button className='user-submission-card-accept' onClick={handleDeleteClick}>Accept</button>
                <button className='user-submission-card-reject' onClick={handleDeleteClick}>Reject</button>
            </div>
        </div>
    )
}