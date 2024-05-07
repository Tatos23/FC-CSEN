import './UserCard.css';

export default function UserCard({ type, name }) {
    return (
        <div className="user-card">
            <h2 className="user-card-type">Type: {type}</h2>
            <h1 className="user-card-name">{type == 'Donor' ? 'Username: ' : 'Organization name: '}{name}</h1>
        </div>
    )
};
