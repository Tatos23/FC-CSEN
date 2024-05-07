import './UserCard.css';

export default function UserCard({ type, name, organizationType }) {
    return (
        <div className="user-card">
            <h2 className="user-card-type">{type}</h2>
            <h1 className="user-card-name">{type == 'Donor' ? 'Username: ' : 'Organization name: '}{name}</h1>
            {type == 'Organization' ? <h2 className="user-card-name">Organization Type: {organizationType}</h2> : null}
        </div>
    )
};
